import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet"

import { ClowiImages } from '../../assets/Img'
import { EcolinkImages } from '../../assets/Img'
import { DlaifeImages } from '../../assets/Img'
import { ColtsadeusImages } from '../../assets/Img'

import mainStyles from "../../main.module.sass"
import s from './Index.module.sass'
import { useTranslation } from 'react-i18next'

import { useMemo } from 'react'


function Index() {

  const { i18n, t } = useTranslation("index");

  const projects = useMemo(() => [
    {
      id: 'clowi',
      title: 'CLOWI',
      description: t("text.workText1"),
      images: ClowiImages,
      className: s.clowiBig,
      visibilityClass: s.clowiBigVisible,
      alts: {
        clowi1: 'Clowi - profile interface',
        clowi2: 'Clowi - mobile adaptation main screen interface',
        clowi3: 'Clowi - mobile app icon',
        clowi4: 'Clowi - service favicon',
        clowi5: 'Clowi - subscription interface',
        clowi6: 'Clowi - registration and login interface',
      },
    },
    {
      id: 'ecolink',
      title: 'Ecolink',
      description: t("text.workText2"),
      images: EcolinkImages,
      className: s.ecolinkBig,
      visibilityClass: s.ecolinkBigVisible,
      alts: {
        ecolink1: 'Ecolink - main screen interface',
        ecolink2: 'Ecolink - mobile adaptation main screen interface',
        ecolink3: 'Ecolink - interface of one of the mobile adaptation blocks',
        ecolink4: 'Ecolink - directional sign',
        ecolink5: 'Ecolink - world map',
        ecolink6: 'Ecolink - tape',
        ecolink7: 'Ecolink - badge',
      },
    },
    {
      id: 'dlaife',
      title: 'Dlaife',
      description: t("text.workText3"),
      images: DlaifeImages,
      className: s.dlaifeBig,
      visibilityClass: s.dlaifeBigVisible,
      alts: {
        dlaife1: 'Dlaife - mobile adaptation main screen interface',
        dlaife2: 'Dlaife - main screen interface',
        dlaife3: 'Dlaife - banner',
        dlaife4: 'Dlaife - mobile adaptation registration and login screens',
        dlaife5: 'Dlaife - screens with blocks',
      },
    },
    {
      id: 'coltsadeus',
      title: 'Coltsadeus',
      description: t("text.workText4"),
      images: ColtsadeusImages,
      className: s.coltsadeusBig,
      visibilityClass: s.coltsadeusBigVisible,
      alts: {
        coltsadeus1: 'Coltsadeus - mobile adaptation main screen interface',
        coltsadeus2: 'Coltsadeus - screen with blocks',
        coltsadeus3: 'Coltsadeus - main screen interface',
      },
    }
  ], [t]);


  useEffect(() => {
    document.title = "Bogdanov Yan";
  }, []);

  const nextSectionRef = useRef(null)
  const [hoveredImage, setHoveredImage] = useState(null)

  const handleScroll = () => {
    const offset = 150
    if (nextSectionRef.current) {
      const top = nextSectionRef.current.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const borderedImages = [
    'ecolink1',
    'ecolink5',
    'ecolink6',
    'ecolink7',
    'dlaife1',
    'coltsadeus1'
  ]


  return (
    <>
      <Helmet>
        <title>Bogdanov Yan</title>
        <meta name="description" content={t("seo.description")} />
        <meta name="robots" content="index, follow" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Bogdanov Yan' />
        <meta property='og:description' content='Yan Bogdanov is a UI/UX designer and web developer. I create modern websites and interfaces from concept to launch. Responsive design, high speed.' />
        <meta property="og:image" content="/src/assets/Img/Meta/prev.png" />
        <meta property='og:url' content='https://bogdanovyan.ru/' />
      </Helmet>

      <div className={s.index}>
        
        <section className={`${s.mainSection} ${mainStyles.margin_300px}`}>
          <div className={s.mainContainer}>
            <h1 className={mainStyles.margin_12px}>
              {t("title.h1")}
            </h1>
            <div className={mainStyles.margin_30px}>
              <p>{t("text.mainText1")}</p>
              <p>{t("text.mainText2")}</p>
              <p>{t("text.mainText3")}</p>
              <p>{t("text.mainText4")}</p>
            </div>
            <button className={mainStyles.link} onClick={handleScroll}>{t("button.scroll")}</button>
          </div>
        </section>

        <section ref={nextSectionRef} className={s.works}>
          <h2 className={mainStyles.margin_30px}>
            {t("title.work")}
          </h2>
          <div className={s.worksContainer}>
            <div className={s.worksWrapper}>
              {projects.map(({ id, title, description, images }) => (
                <div key={id} className={mainStyles.margin_90px}>
                  <h3 className={mainStyles.margin_10px}>{title}</h3>
                  <p className={`${s.text} ${mainStyles.margin_10px}`}>{description}</p>
                  <Link to={`/works/${id}`} className={`${mainStyles.link} ${mainStyles.margin_20px}`}>
                    {t("button.seeCase")}
                  </Link>
                  <div className={s.imgWrapper}>
                    {Object.entries(images).map(([key, src]) => (
                      <img
                        key={key}
                        className={`${s[key]} ${borderedImages.includes(key) ? s.border : ''}`}
                        src={src}
                        alt={projects.find(p => p.id === id)?.alts?.[key] || `${title} preview`}
                        onMouseEnter={() => setHoveredImage(key)}
                        onMouseLeave={() => setHoveredImage(null)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {hoveredImage && (
              (() => {
                const project = projects.find(p => hoveredImage.startsWith(p.id));
                const altText = project?.alts?.[hoveredImage] || `${project?.title} preview`;

                return (
                  <img
                    className={`
                      ${project?.className || ''}
                      ${project?.visibilityClass || ''}
                    `}
                    src={project?.images[hoveredImage] || ''}
                    alt={altText}
                  />
                );
              })()
            )}

          </div>
        </section>
      </div>
    </>
  )
}

export default Index