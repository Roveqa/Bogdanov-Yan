import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import mainStyles from "../../../main.module.sass"
import { projectNataliaShpedtportfolioImages } from '../../../assets/Img'
import s from './NataliaShpedtportfolio.module.sass'

function NataliaShpedtportfolio() {


  const { t } = useTranslation("project")


  useEffect(() => {
    document.title = "BY — Works — Natalia Shpedt (portfolio)";
  }, []);

  return (
    <>

      <Helmet>
        <title>BY — Works — Natalia Shpedt &#40;portfolio&#41;</title>
        <meta name="description" content="Minimalistic portfolio website for showcasing interior projects. Clean visuals, concise typography, and structure highlight the designer’s style." />
        <meta name="robots" content="index, follow" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='BY — Works — Natalia Shpedt &#40;portfolio&#41;' />
        <meta property='og:description' content='Minimalistic portfolio website for showcasing interior projects. Clean visuals, concise typography, and structure highlight the designer’s style.' />
        <meta property="og:image" content="/src/assets/Img/Meta/prev.png" />
        <meta property='og:url' content='https://bogdanovyan.ru/works/ecolink' />
      </Helmet>

      <div className={s.works}>
        <Link to="/works" className={mainStyles.titleLink}>
          <h1 className={mainStyles.margin_110px}>
            {t('title.Works')}
          </h1>
        </Link>
        <div className={`${s.mainContainer} ${mainStyles.margin_300px}`}>
          <div className={s.projectWrapper}>

            <hr className={mainStyles.margin_20px} /> 
            <div className={`${s.info} ${mainStyles.margin_30px}`}>

              <div className={s.infoWrapper}>
                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Project')}
                  </span>
                  <p>
                    Natalia Shpedt <br/>&#40;portfolio&#41;
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Directions')}
                  </span>
                  <p>
                    {t('nataliaShpedt(portfolio).Directions Text')}
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Type')}
                  </span>
                  <p>
                    Design
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Year')}
                  </span>
                  <p>
                    2024
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Live')}
                  </span>
                  <div className={s.links}>
                    <a className={`${mainStyles.link} ${mainStyles.margin_8px}`} href="https://dprofile.ru/case/72635/portfolio-for-interior-designer" target="_blank">
                      Dprofile
                    </a>
                    <a className={`${mainStyles.link} ${mainStyles.margin_8px}`} href="https://www.behance.net/gallery/200977631/Portfolio-for-interior-designer" target="_blank">
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
                  {t('nataliaShpedt(portfolio).Information Text')}
                </p>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Goal')}
                </span>
                <p className={mainStyles.margin_20px}>
                  {t('nataliaShpedt(portfolio).Goal Text')}
                </p>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Tasks')}
                </span>
                <ul className={mainStyles.margin_20px}>
                    <li>{t('nataliaShpedt(portfolio).Tasks Text 1')}</li>
                    <li>{t('nataliaShpedt(portfolio).Tasks Text 2')}</li>
                </ul>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Problems')}
                </span>
                <p>
                  {t('nataliaShpedt(portfolio).Problems Text 1')}
                </p>
                <p>
                  {t('nataliaShpedt(portfolio).Problems Text 2')}
                </p>

              </div>

            </div> 

            <div className={s.imgGrid}>
              <img className={s.img1} src={projectNataliaShpedtportfolioImages.projectNataliaShpedtportfolio1} alt="projectNataliaShpedtportfolio" />
              <img className={s.img2} src={projectNataliaShpedtportfolioImages.projectNataliaShpedtportfolio2} alt="projectNataliaShpedtportfolio" />
              <img className={s.img3} src={projectNataliaShpedtportfolioImages.projectNataliaShpedtportfolio3} alt="projectNataliaShpedtportfolio" />
              <img className={s.img4} src={projectNataliaShpedtportfolioImages.projectNataliaShpedtportfolio4} alt="projectNataliaShpedtportfolio" />
              <img className={s.img5} src={projectNataliaShpedtportfolioImages.projectNataliaShpedtportfolio5} alt="projectNataliaShpedtportfolio" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default NataliaShpedtportfolio