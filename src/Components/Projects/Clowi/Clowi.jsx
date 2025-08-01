import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import mainStyles from "../../../main.module.sass"
import { projectClowiImages } from '../../../assets/Img'
import s from './Clowi.module.sass'

function Clowi() {


  const { t } = useTranslation("project")


  useEffect(() => {
    document.title = "BY — Works — Clowi";
  }, []);

  return (
    <>

      <Helmet>
        <title>BY — Works — Clowi</title>
        <meta name="description" content="Intuitive web service for designers and developers to create and manage colors, gradients, palettes, text, and images easily." />
        <meta name="robots" content="index, follow" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='BY — Works — Clowi' />
        <meta property='og:description' content='Intuitive web service for designers and developers to create and manage colors, gradients, palettes, text, and images easily.' />
        <meta property="og:image" content="/src/assets/Img/Meta/prev.png" />
        <meta property='og:url' content='https://bogdanovyan.ru/works/clowi' />
      </Helmet>

      <div className={s.works}>
        <Link to="/works" className={mainStyles.titleLink}>
          <h1 className={mainStyles.margin_110px}>
            {t('title.Works')}
          </h1>
        </Link>
        <div className={`${s.mainContainer} ${mainStyles.margin_300px}`}>
          <div className={s.projectWrapper}>

            {/* Clowi */}

            <hr className={mainStyles.margin_20px} /> 
            <div className={`${s.info} ${mainStyles.margin_30px}`}>

              <div className={s.infoWrapper}>
                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Project')}
                  </span>
                  <p>
                    CLOWI
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Directions')}
                  </span>
                  <p>
                    {t('clowi.Directions Text')}
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Type')}
                  </span>
                  <p>
                    SaaS
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Year')}
                  </span>
                  <p>
                    2025
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Live')}
                  </span>
                  <div className={s.links}>
                    <a className={`${mainStyles.link} ${mainStyles.margin_8px}`} href="https://dprofile.ru/case/117934/clowi" target="_blank">
                      Dprofile
                    </a>
                    <a className={`${mainStyles.link} ${mainStyles.margin_8px}`} href="https://www.behance.net/gallery/222700675/CLOWI" target="_blank">
                      Behance
                    </a>
                  </div>
                </div>

              </div>

              <div className={s.information}>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Information')}
                </span>
                <p className={mainStyles.margin_20px}>
                  {t('clowi.Information Text')}
                </p>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Goal')}
                </span>
                <p className={mainStyles.margin_20px}>
                  {t('clowi.Goal Text')}
                </p>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Tasks')}
                </span>
                <ul className={mainStyles.margin_20px}>
                    <li>{t('clowi.Tasks Text 1')}</li>
                    <li>{t('clowi.Tasks Text 2')}</li>
                    <li>{t('clowi.Tasks Text 3')}</li>
                    <li>{t('clowi.Tasks Text 4')}</li>
                    <li>{t('clowi.Tasks Text 5')}</li>
                    <li>{t('clowi.Tasks Text 6')}</li>
                    <li>{t('clowi.Tasks Text 7')}</li>
                </ul>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Problems')}
                </span>
                <p>
                  {t('clowi.Problems Text')}
                </p>

              </div>

            </div> 

            <div className={s.imgGrid}>
              <img className={s.img1} src={projectClowiImages.projectClowi1} alt="projectClowiImages" />
              <img className={s.img2} src={projectClowiImages.projectClowi2} alt="projectClowiImages" />
              <img className={s.img3} src={projectClowiImages.projectClowi3} alt="projectClowiImages" />
              <img className={s.img4} src={projectClowiImages.projectClowi4} alt="projectClowiImages" />
              <img className={s.img5} src={projectClowiImages.projectClowi5} alt="projectClowiImages" />
              <img className={s.img6} src={projectClowiImages.projectClowi6} alt="projectClowiImages" />
              <img className={s.img7} src={projectClowiImages.projectClowi7} alt="projectClowiImages" />
              <img className={s.img8} src={projectClowiImages.projectClowi8} alt="projectClowiImages" />
              <img className={s.img9} src={projectClowiImages.projectClowi9} alt="projectClowiImages" />
              <img className={s.img10} src={projectClowiImages.projectClowi10} alt="projectClowiImages" />
              <img className={s.img11} src={projectClowiImages.projectClowi11} alt="projectClowiImages" />
              <img className={s.img12} src={projectClowiImages.projectClowi12} alt="projectClowiImages" />
              <img className={s.img13} src={projectClowiImages.projectClowi13} alt="projectClowiImages" />
              <img className={s.img14} src={projectClowiImages.projectClowi14} alt="projectClowiImages" />
              <img className={s.img15} src={projectClowiImages.projectClowi15} alt="projectClowiImages" />
              <img className={s.img16} src={projectClowiImages.projectClowi16} alt="projectClowiImages" />
              <img className={s.img17} src={projectClowiImages.projectClowi17} alt="projectClowiImages" />
              <img className={s.img18} src={projectClowiImages.projectClowi18} alt="projectClowiImages" />
              <img className={s.img19} src={projectClowiImages.projectClowi19} alt="projectClowiImages" />
              <img className={s.img20} src={projectClowiImages.projectClowi20} alt="projectClowiImages" />
              <img className={s.img21} src={projectClowiImages.projectClowi21} alt="projectClowiImages" />
              <img className={s.img22} src={projectClowiImages.projectClowi22} alt="projectClowiImages" />
              <img className={s.img23} src={projectClowiImages.projectClowi23} alt="projectClowiImages" />
              <img className={s.img24} src={projectClowiImages.projectClowi24} alt="projectClowiImages" />
              <img className={s.img25} src={projectClowiImages.projectClowi25} alt="projectClowiImages" />
              <img className={s.img26} src={projectClowiImages.projectClowi26} alt="projectClowiImages" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Clowi