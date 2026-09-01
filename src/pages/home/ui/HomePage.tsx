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

    const isVertical = window.innerWidth <= 768
    const axisConfig = config

    // The camera's world height at z=0 is fixed by its vertical FOV and distance,
    // regardless of viewport aspect — only world width scales with aspect.
    const worldHeight = 2 * Math.tan(THREE.MathUtils.degToRad(45) / 2) * 5
    const worldWidth = worldHeight * (window.innerWidth / window.innerHeight)

    // Match the Figma mobile card proportions exactly: a 292x360 card inset
    // within a 380px-wide reference frame — not stretched to the viewport.
    const crossSize = isVertical ? worldWidth * (292 / 380) : axisConfig.slideHeight
    const axisSize = isVertical ? crossSize * (360 / 292) : axisConfig.slideWidth

    // Desktop's distortion wave spans multiple adjacent slides because its radius
    // is larger than a single slide. Scale the radius by the same ratio on mobile
    // so the wave stays continuous across cards instead of collapsing into each
    // card individually.
    const distortionRadius = isVertical
      ? axisSize * (axisConfig.distortionRadius / axisConfig.slideWidth)
      : axisConfig.distortionRadius

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
    let touchStartPos = 0
    let touchLastPos = 0
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

      const gap = getWorldUnitsFromPixels(axisConfig.gapPixels)
      let stackPosition = 0

      for (let index = 0; index < totalSlides; index += 1) {
        if (index === 0) {
          slideOffsets.push(0)
          stackPosition = axisSize / 2
        } else {
          stackPosition += gap + axisSize / 2
          slideOffsets.push(stackPosition)
          stackPosition += axisSize / 2
        }
      }

      loopLength = stackPosition + gap + axisSize / 2
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
        const width = isVertical ? crossSize : axisSize
        const height = isVertical ? axisSize : crossSize
        const geometry = new THREE.PlaneGeometry(width, height, 20, 10)
        const material = new THREE.MeshBasicMaterial({
          color: '#ffffff',
          map: textures[index],
          opacity: axisConfig.idleOpacity,
          side: THREE.DoubleSide,
          transparent: true,
        })
        const mesh = new THREE.Mesh(geometry, material) as SlideMesh

        configureTexture(textures[index], width, height)

        mesh.userData = {
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
      positionAlong: number,
      strength: number,
    ) => {
      const positions = mesh.geometry.attributes.position
      const original = mesh.userData.originalVertices
      const distortion = axisConfig.distortionStrength * strength
      const shear = axisConfig.shearStrength * strength
      const halfCross = crossSize / 2
      const alongComponent = isVertical ? 1 : 0
      const crossComponent = isVertical ? 0 : 1

      for (let index = 0; index < positions.count; index += 1) {
        const along = original[index * 3 + alongComponent] ?? 0
        const cross = original[index * 3 + crossComponent] ?? 0
        const distance = Math.sqrt((positionAlong + along) ** 2 + cross * cross)
        const falloff = Math.max(0, 1 - distance / distortionRadius)
        const bend = Math.pow(Math.sin((falloff * Math.PI) / 2), 1.5)
        const crossNormalized = halfCross === 0 ? 0 : cross / halfCross

        if (isVertical) {
          positions.setX(index, (original[index * 3] ?? 0) + crossNormalized * shear)
        } else {
          positions.setY(index, (original[index * 3 + 1] ?? 0) + crossNormalized * shear)
        }
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
        Math.sign(rawDelta) * Math.min(Math.abs(rawDelta), axisConfig.wheelMax)

      addDistortionBurst(Math.abs(clampedDelta) * 0.00045)
      scrollTarget += clampedDelta * axisConfig.wheelSpeed
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

      touchStartPos = touch.clientY
      touchLastPos = touchStartPos
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

      const clientPos = touch.clientY
      const delta = clientPos - touchLastPos
      touchLastPos = clientPos

      addDistortionBurst(Math.abs(delta) * 0.008)
      scrollTarget += (isVertical ? delta : -delta) * axisConfig.touchSpeed
      isScrolling = true
    }

    const handleTouchEnd = () => {
      if (!isReady) {
        return
      }

      const swipeVelocity = (touchLastPos - touchStartPos) * 0.005

      if (Math.abs(swipeVelocity) > 0.5) {
        scrollMomentum = (isVertical ? swipeVelocity : -swipeVelocity) * axisConfig.touchMomentum
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
        getWorldUnitsFromPixels(axisConfig.cursorDriftPixels) * normalizedX * 2
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
        scrollMomentum *= axisConfig.momentumFriction

        if (Math.abs(scrollMomentum) < axisConfig.momentumThreshold) {
          scrollMomentum = 0
        }

        idleTime = 0
      } else {
        idleTime += deltaTime

        if (idleTime > axisConfig.autoScrollDelay) {
          scrollTarget += axisConfig.autoScrollSpeed * deltaTime
        }
      }

      scrollPosition = damp(
        scrollPosition,
        scrollTarget,
        axisConfig.smoothing,
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
        axisConfig.distortionSmoothing,
        deltaTime,
      )
      cursorOffset = damp(
        cursorOffset,
        cursorTarget,
        axisConfig.cursorSmoothing,
        deltaTime,
      )

      const signedDistortion = distortionAmount * scrollDirection
      let closestDistance = Infinity
      let closestIndex = 0

      meshes.forEach((mesh) => {
        const { offset } = mesh.userData
        let along = offset - wrap(scrollPosition, loopLength)

        along = wrap(along + halfLoop, loopLength) - halfLoop

        if (isVertical) {
          mesh.position.y = -along
          mesh.position.x = cursorOffset
        } else {
          mesh.position.x = along + cursorOffset
        }

        const focus = 1 - Math.min(Math.abs(along) / (axisSize * 1.9), 1)
        const opacity = THREE.MathUtils.lerp(
          axisConfig.idleOpacity,
          axisConfig.focusOpacity,
          focus,
        )
        const scale = THREE.MathUtils.lerp(
          axisConfig.idleScale,
          axisConfig.focusScale,
          focus,
        )
        const depth = -focus * axisConfig.depthStrength
        const tilt = signedDistortion * axisConfig.tiltStrength * focus

        mesh.material.opacity = opacity
        mesh.position.z = depth
        mesh.rotation.z = tilt
        mesh.scale.x = mesh.userData.baseScaleX * scale
        mesh.scale.y = mesh.userData.baseScaleY * scale

        if (Math.abs(along) < closestDistance) {
          closestDistance = Math.abs(along)
          closestIndex = mesh.userData.index
        }

        if (Math.abs(along) < halfLoop + axisSize) {
          applyDistortion(mesh, along, signedDistortion)
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
