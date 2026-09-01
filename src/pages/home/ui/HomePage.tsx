import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import * as THREE from 'three'

import { withBase } from '@shared/lib/browser/asset-url'

import './HomePage.sass'

const cases = [
  {
    href: '/works/rennu',
    name: 'Rennu',
    images: [
      withBase('/home-animation/rennu-1.jpg'),
      withBase('/home-animation/rennu-2.jpg'),
      withBase('/home-animation/rennu-3.jpg'),
      withBase('/home-animation/rennu-4.jpg'),
    ],
  },
  {
    href: '/works/ecolos',
    name: 'Ecolos',
    images: [
      withBase('/home-animation/ecolos-1.jpg'),
      withBase('/home-animation/ecolos-2.jpg'),
      withBase('/home-animation/ecolos-3.jpg'),
      withBase('/home-animation/ecolos-4.jpg'),
    ],
  },
  {
    href: '/works/oyster',
    name: 'ОИСТЕР',
    images: [withBase('/home-animation/oyster-1.png')],
  },
] as const

const slides = cases.flatMap((caseItem) =>
  caseItem.images.map((image, imageIndex) => ({
    caseNumber: imageIndex + 1,
    href: caseItem.href,
    image,
    name: caseItem.name,
  })),
)

const config = {
  autoScrollDelay: 1.2,
  autoScrollSpeed: 0.12,
  cursorDriftPixels: 36,
  cursorSmoothing: 5.5,
  depthStrength: 0,
  distortionRadius: 4.5,
  distortionSmoothing: 6.5,
  distortionStrength: 1.2,
  focusOpacity: 1,
  focusScale: 1,
  gapPixels: 1,
  idleOpacity: 0.34,
  idleScale: 1,
  momentumFriction: 0.9,
  momentumThreshold: 0.0006,
  shearStrength: 0.12,
  slideHeight: 2,
  slideWidth: 3.67,
  smoothing: 8.5,
  tiltStrength: 0,
  touchMomentum: 0.06,
  touchSpeed: 0.008,
  wheelMax: 110,
  wheelSpeed: 0.0065,
} as const

type SlideMesh = THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial> & {
  userData: {
    baseRotation: number
    baseScaleX: number
    baseScaleY: number
    caseNumber: number
    href: string | null
    index: number
    name: string
    offset: number
    originalVertices: number[]
  }
}

function zeroPad(value: number) {
  return String(value).padStart(2, '0')
}

export function HomePage() {
  const navigate = useNavigate()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const infoRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLParagraphElement | null>(null)
  const countRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const infoElement = infoRef.current
    const titleElement = titleRef.current
    const countElement = countRef.current

    if (!canvas || !infoElement || !titleElement || !countElement) {
      return
    }

    // Mobile reuses the exact desktop scene, positions, and physics — every
    // slide still moves along world X exactly like desktop. The only
    // difference is the camera is rolled 90° so that world X reads as
    // vertical on screen, and each mesh is counter-rotated so its own image
    // content (photos, logo text) stays upright despite the camera roll.
    const isVertical = window.innerWidth <= 768

    let activeHref: string | null = null

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#ffffff')

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    )
    camera.position.z = 5

    if (isVertical) {
      camera.up.set(1, 0, 0)
      camera.lookAt(0, 0, 0)
    }

    const meshBaseRotation = isVertical ? -Math.PI / 2 : 0

    // Each mesh is still slideWidth x slideHeight in its own local frame, just
    // rotated -90° so its content reads upright under the rolled camera. That
    // rotation swaps which of its own dimensions actually spans the world axis
    // slides travel along, so layout spacing must use slideHeight instead of
    // slideWidth once rotated.
    const alongSize = isVertical ? config.slideHeight : config.slideWidth

    const meshes: SlideMesh[] = []
    const textures: THREE.Texture[] = []
    const textureLoader = new THREE.TextureLoader()
    const velocityHistory = [0, 0, 0, 0, 0]

    const totalSlides = slides.length
    const slideOffsets: number[] = []

    let loopLength = 0
    let halfLoop = 0
    let isReady = false
    let animationFrameId = 0
    let scrollPosition = 0
    let scrollTarget = 0
    let scrollMomentum = 0
    let isScrolling = false
    let lastFrameTime = 0
    let distortionAmount = 0
    let distortionTarget = 0
    let velocityPeak = 0
    let scrollDirection = 0
    let directionTarget = 0
    let touchStartY = 0
    let touchLastY = 0
    let cursorTarget = 0
    let cursorOffset = 0
    let activeSlideIndex = -1
    let scrollTimeoutId = 0
    let idleTime = 0

    const wrap = (value: number, range: number) =>
      ((value % range) + range) % range

    const getWorldUnitsFromPixels = (pixels: number, depth = 0) => {
      const cameraDistance = camera.position.z - depth
      const verticalFov = THREE.MathUtils.degToRad(camera.fov)
      const viewportHeight = 2 * Math.tan(verticalFov / 2) * cameraDistance

      return (pixels / window.innerHeight) * viewportHeight
    }

    const damp = (
      current: number,
      target: number,
      smoothing: number,
      deltaTime: number,
    ) =>
      THREE.MathUtils.lerp(
        current,
        target,
        1 - Math.exp(-smoothing * deltaTime),
      )

    const updateSlideLayout = () => {
      slideOffsets.length = 0

      const gap = getWorldUnitsFromPixels(config.gapPixels)
      let stackPosition = 0

      for (let index = 0; index < totalSlides; index += 1) {
        if (index === 0) {
          slideOffsets.push(0)
          stackPosition = alongSize / 2
        } else {
          stackPosition += gap + alongSize / 2
          slideOffsets.push(stackPosition)
          stackPosition += alongSize / 2
        }
      }

      loopLength = stackPosition + gap + alongSize / 2
      halfLoop = loopLength / 2
    }

    const configureTexture = (
      texture: THREE.Texture,
      width: number,
      height: number,
    ) => {
      const image = texture.image as { height: number; width: number }

      texture.colorSpace = THREE.SRGBColorSpace
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy()
      texture.wrapS = THREE.ClampToEdgeWrapping
      texture.wrapT = THREE.ClampToEdgeWrapping

      const imageAspect = image.width / image.height
      const planeAspect = width / height
      const ratio = imageAspect / planeAspect

      if (ratio > 1) {
        texture.repeat.set(1 / ratio, 1)
        texture.offset.set((1 - 1 / ratio) / 2, 0)
      } else {
        texture.repeat.set(1, ratio)
        texture.offset.set(0, (1 - ratio) / 2)
      }
    }

    const preloadTextures = async () => {
      const loadedTextures = await Promise.all(
        slides.map(({ image }) => textureLoader.loadAsync(image)),
      )

      loadedTextures.forEach((texture) => {
        textures.push(texture)
      })
    }

    const buildScene = () => {
      for (let index = 0; index < totalSlides; index += 1) {
        const width = config.slideWidth
        const height = config.slideHeight
        const geometry = new THREE.PlaneGeometry(width, height, 20, 10)
        const material = new THREE.MeshBasicMaterial({
          color: '#ffffff',
          map: textures[index],
          opacity: config.idleOpacity,
          side: THREE.DoubleSide,
          transparent: true,
        })
        const mesh = new THREE.Mesh(geometry, material) as SlideMesh

        configureTexture(textures[index], width, height)

        mesh.userData = {
          baseRotation: meshBaseRotation,
          baseScaleX: 1,
          baseScaleY: 1,
          caseNumber: slides[index].caseNumber,
          href: slides[index].href,
          index,
          name: slides[index].name,
          offset: slideOffsets[index] ?? 0,
          originalVertices: [...geometry.attributes.position.array],
        }

        scene.add(mesh)
        meshes.push(mesh)
      }
    }

    const renderFrame = () => {
      renderer.render(scene, camera)
    }

    const warmupRenderer = async () => {
      if (typeof renderer.compileAsync === 'function') {
        await renderer.compileAsync(scene, camera)
      } else {
        renderer.compile(scene, camera)
      }

      if (typeof renderer.initTexture === 'function') {
        textures.forEach((texture: THREE.Texture) => {
          renderer.initTexture(texture)
        })
      }

      renderFrame()
      await new Promise<void>((resolve) => {
        window.requestAnimationFrame(() => {
          resolve()
        })
      })
      renderFrame()
    }

    const applyDistortion = (
      mesh: SlideMesh,
      positionX: number,
      strength: number,
    ) => {
      const positions = mesh.geometry.attributes.position
      const original = mesh.userData.originalVertices
      const distortion = config.distortionStrength * strength
      const shear = config.shearStrength * strength
      const halfHeight = config.slideHeight / 2

      for (let index = 0; index < positions.count; index += 1) {
        const x = original[index * 3] ?? 0
        const y = original[index * 3 + 1] ?? 0
        const distance = Math.sqrt((positionX + x) ** 2 + y * y)
        const falloff = Math.max(0, 1 - distance / config.distortionRadius)
        const bend = Math.pow(Math.sin((falloff * Math.PI) / 2), 1.5)
        const yNormalized = halfHeight === 0 ? 0 : y / halfHeight

        positions.setX(index, x + yNormalized * shear)
        positions.setZ(index, bend * distortion)
      }

      positions.needsUpdate = true
    }

    const addDistortionBurst = (amount: number) => {
      distortionTarget = Math.min(1, distortionTarget + amount)
    }

    const handleWheel = (event: WheelEvent) => {
      if (!isReady) {
        return
      }

      event.preventDefault()

      const rawDelta = isVertical
        ? event.deltaY
        : Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY

      const clampedDelta =
        Math.sign(rawDelta) * Math.min(Math.abs(rawDelta), config.wheelMax)

      addDistortionBurst(Math.abs(clampedDelta) * 0.00045)
      scrollTarget += clampedDelta * config.wheelSpeed
      isScrolling = true

      window.clearTimeout(scrollTimeoutId)
      scrollTimeoutId = window.setTimeout(() => {
        isScrolling = false
      }, 150)
    }

    const handleTouchStart = (event: TouchEvent) => {
      if (!isReady) {
        return
      }

      const touch = event.touches.item(0)

      if (!touch) {
        return
      }

      touchStartY = touch.clientY
      touchLastY = touchStartY
      isScrolling = false
      scrollMomentum = 0
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (!isReady) {
        return
      }

      event.preventDefault()

      const touch = event.touches.item(0)

      if (!touch) {
        return
      }

      const clientY = touch.clientY
      const deltaY = clientY - touchLastY
      touchLastY = clientY

      addDistortionBurst(Math.abs(deltaY) * 0.008)
      scrollTarget -= deltaY * config.touchSpeed
      isScrolling = true
    }

    const handleTouchEnd = () => {
      if (!isReady) {
        return
      }

      const swipeVelocity = (touchLastY - touchStartY) * 0.005

      if (Math.abs(swipeVelocity) > 0.5) {
        scrollMomentum = -swipeVelocity * config.touchMomentum
        addDistortionBurst(Math.abs(swipeVelocity) * 0.2)
        isScrolling = true
        window.setTimeout(() => {
          isScrolling = false
        }, 800)
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!isReady || isVertical) {
        return
      }

      const normalizedX = event.clientX / window.innerWidth - 0.5

      cursorTarget =
        getWorldUnitsFromPixels(config.cursorDriftPixels) * normalizedX * 2
    }

    const handleMouseLeave = () => {
      cursorTarget = 0
    }

    const handleClick = () => {
      if (activeHref) {
        void navigate(activeHref)
      }
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      updateSlideLayout()

      meshes.forEach((mesh, index) => {
        mesh.userData.offset = slideOffsets[index] ?? 0
      })
    }

    const animate = (time = 0) => {
      animationFrameId = window.requestAnimationFrame(animate)

      const deltaTime = lastFrameTime ? (time - lastFrameTime) / 1000 : 0.016
      lastFrameTime = time

      const previousScroll = scrollPosition

      if (isScrolling) {
        scrollTarget += scrollMomentum
        scrollMomentum *= config.momentumFriction

        if (Math.abs(scrollMomentum) < config.momentumThreshold) {
          scrollMomentum = 0
        }

        idleTime = 0
      } else {
        idleTime += deltaTime

        if (idleTime > config.autoScrollDelay) {
          scrollTarget += config.autoScrollSpeed * deltaTime
        }
      }

      scrollPosition = damp(
        scrollPosition,
        scrollTarget,
        config.smoothing,
        deltaTime,
      )

      const frameDelta = scrollPosition - previousScroll

      if (Math.abs(frameDelta) > 0.00001) {
        directionTarget = frameDelta > 0 ? 1 : -1
      }

      scrollDirection = damp(scrollDirection, directionTarget, 7, deltaTime)

      const velocity = Math.abs(frameDelta) / deltaTime

      velocityHistory.push(velocity)
      velocityHistory.shift()

      const averageVelocity =
        velocityHistory.reduce((sum, item) => sum + item, 0) /
        velocityHistory.length

      if (averageVelocity > velocityPeak) {
        velocityPeak = averageVelocity
      }

      const isDecelerating =
        averageVelocity / (velocityPeak + 0.001) < 0.7 && velocityPeak > 0.5

      velocityPeak *= 0.99

      if (velocity > 0.05) {
        distortionTarget = Math.max(
          distortionTarget,
          Math.min(0.75, velocity * 0.035),
        )
      }

      if (isDecelerating || averageVelocity < 0.2) {
        distortionTarget *= isDecelerating ? 0.96 : 0.9
      }

      distortionAmount = damp(
        distortionAmount,
        distortionTarget,
        config.distortionSmoothing,
        deltaTime,
      )
      cursorOffset = damp(
        cursorOffset,
        cursorTarget,
        config.cursorSmoothing,
        deltaTime,
      )

      const signedDistortion = distortionAmount * scrollDirection
      let closestDistance = Infinity
      let closestIndex = 0

      meshes.forEach((mesh) => {
        const { offset } = mesh.userData
        let x = offset - wrap(scrollPosition, loopLength)

        x = wrap(x + halfLoop, loopLength) - halfLoop
        mesh.position.x = x + cursorOffset

        const focus = 1 - Math.min(Math.abs(x) / (alongSize * 1.9), 1)
        const opacity = THREE.MathUtils.lerp(
          config.idleOpacity,
          config.focusOpacity,
          focus,
        )
        const scale = THREE.MathUtils.lerp(
          config.idleScale,
          config.focusScale,
          focus,
        )
        const depth = -focus * config.depthStrength
        const tilt = signedDistortion * config.tiltStrength * focus

        mesh.material.opacity = opacity
        mesh.position.z = depth
        mesh.rotation.z = mesh.userData.baseRotation + tilt
        mesh.scale.x = mesh.userData.baseScaleX * scale
        mesh.scale.y = mesh.userData.baseScaleY * scale

        if (Math.abs(x) < closestDistance) {
          closestDistance = Math.abs(x)
          closestIndex = mesh.userData.index
        }

        if (Math.abs(x) < halfLoop + alongSize) {
          applyDistortion(mesh, x, signedDistortion)
        }
      })

      if (closestIndex !== activeSlideIndex) {
        activeSlideIndex = closestIndex
        titleElement.textContent = slides[activeSlideIndex].name
        countElement.textContent = zeroPad(slides[activeSlideIndex].caseNumber)

        activeHref = slides[activeSlideIndex].href
        canvas.style.cursor = activeHref ? 'pointer' : 'default'
        infoElement.classList.toggle('home-page__info--clickable', Boolean(activeHref))
      }

      renderFrame()
    }

    const cancelled: { current: boolean } = { current: false }
    const isCancelled = () => cancelled.current

    const init = async () => {
      updateSlideLayout()
      await preloadTextures()

      if (isCancelled()) {
        return
      }

      buildScene()
      await warmupRenderer()

      if (isCancelled()) {
        return
      }

      titleElement.textContent = slides[0].name
      countElement.textContent = zeroPad(1)
      activeHref = slides[0].href
      canvas.style.cursor = activeHref ? 'pointer' : 'default'
      infoElement.classList.toggle('home-page__info--clickable', Boolean(activeHref))

      isReady = true
      animate()
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)
    canvas.addEventListener('click', handleClick)
    infoElement.addEventListener('click', handleClick)

    void init()

    return () => {
      cancelled.current = true
      isReady = false
      window.cancelAnimationFrame(animationFrameId)
      window.clearTimeout(scrollTimeoutId)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('click', handleClick)
      infoElement.removeEventListener('click', handleClick)

      meshes.forEach((mesh) => {
        mesh.geometry.dispose()
        mesh.material.dispose()
      })
      textures.forEach((texture) => {
        texture.dispose()
      })
      renderer.dispose()
      scene.clear()
    }
  }, [navigate])

  return (
    <section className="home-page">
      <div className="home-page__info" ref={infoRef}>
        <p className="home-page__title" ref={titleRef} />
        <p className="home-page__count" ref={countRef} />
      </div>

      <canvas className="home-page__canvas" ref={canvasRef} />
    </section>
  )
}
