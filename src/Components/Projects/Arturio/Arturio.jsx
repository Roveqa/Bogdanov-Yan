import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import mainStyles from "../../../main.module.sass"
import { projectArturioImages } from '../../../assets/Img'
import s from './Arturio.module.sass'


function Arturio() {


  const { t } = useTranslation("project")


  useEffect(() => {
      document.title = "BY — Works — Arturio";
  }, []);

  return (
    <>

      <Helmet>
        <title>BY — Works — Arturio</title>
        <meta name="description" content="A modern art space that brings together exhibitions, events and the creative community." />
        <meta name="robots" content="index, follow" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='BY — Works — Arturio' />
        <meta property='og:description' content='A modern art space that brings together exhibitions, events and the creative community.' />
        <meta property="og:image" content="/src/assets/Img/Meta/prev.png" />
        <meta property='og:url' content='https://bogdanovyan.ru/works/arturio' />
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
                    Arturio
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Directions')}
                  </span>
                  <p>
                    {t('arturio.Directions Text')}
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Type')}
                  </span>
                  <p>
                    Art
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
                    <a className={`${mainStyles.link} ${mainStyles.margin_8px}`} href="https://dprofile.ru/case/72577/arturio-website-concept" target="_blank">
                      Dprofile
                    </a>
                    <a className={`${mainStyles.link} ${mainStyles.margin_8px}`} href="https://www.behance.net/gallery/200329993/ARTURIO-Website-concept" target="_blank">
                      Behance
                    </a>
                    <a className={`${mainStyles.link} ${mainStyles.margin_8px}`} href="https://roveqa.github.io/ARTURIO/" target="_blank">
                      {t('card.Live Text')}
                    </a>
                  </div>
                </div>

              </div>

              <div className={s.information}>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Information')}
                </span>
                <p className={mainStyles.margin_20px}>
                  {t('arturio.Information Text 1')}
                </p>
                <p className={mainStyles.margin_20px}>
                  {t('arturio.Information Text 2')}
                </p>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Goal')}
                </span>
                <p className={mainStyles.margin_20px}>
                  {t('arturio.Goal Text')}
                </p>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Tasks')}
                </span>
                <ul className={mainStyles.margin_20px}>
                    <li>{t('arturio.Tasks Text 1')}</li>
                    <li>{t('arturio.Tasks Text 2')}</li>
                </ul>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Problems')}
                </span>
                <p>
                  {t('arturio.Problems Text')}
                </p>

              </div>

            </div> 

            <div className={s.imgGrid}>
              <img className={s.img1} src={projectArturioImages.projectArturio1} alt="" />
              <img className={s.img2} src={projectArturioImages.projectArturio2} alt="" />
              <img className={s.img3} src={projectArturioImages.projectArturio3} alt="" />
              <img className={s.img4} src={projectArturioImages.projectArturio4} alt="" />
              <img className={s.img5} src={projectArturioImages.projectArturio5} alt="" />
              <img className={s.img6} src={projectArturioImages.projectArturio6} alt="" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Arturio