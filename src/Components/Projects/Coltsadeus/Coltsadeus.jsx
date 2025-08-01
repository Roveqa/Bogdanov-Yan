import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import mainStyles from "../../../main.module.sass"
import { projectColtsadeusImages } from '../../../assets/Img'
import s from './Coltsadeus.module.sass'

function Coltsadeus() {


  const { t } = useTranslation("project")


  useEffect(() => {
    document.title = "BY — Works — Coltsadeus";
  }, []);

  return (
    <>

      <Helmet>
        <title>BY — Works — Coltsadeus</title>
        <meta name="description" content="A modern online store for designer jewelry lovers who value style and originality. Elegant visuals and an intuitive, user-friendly interface." />
        <meta name="robots" content="index, follow" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='BY — Works — Coltsadeus' />
        <meta property='og:description' content='A modern online store for designer jewelry lovers who value style and originality. Elegant visuals and an intuitive, user-friendly interface.' />
        <meta property="og:image" content="/src/assets/Img/Meta/prev.png" />
        <meta property='og:url' content='https://bogdanovyan.ru/works/coltsadeus' />
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
                    Coltsadeus
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Directions')}
                  </span>
                  <p>
                    {t('coltsadeus.Directions Text')}
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Type')}
                  </span>
                  <p>
                    E-commerce
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
                    <a className={`${mainStyles.link} ${mainStyles.margin_8px}`} href="https://dprofile.ru/case/76240/online-jewelry-store-website" target="_blank">
                      Dprofile
                    </a>
                    <a className={`${mainStyles.link} ${mainStyles.margin_8px}`} href="https://www.behance.net/gallery/202780329/Online-jewelry-store-Website" target="_blank">
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
                  {t('coltsadeus.Information Text')}
                </p>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Goal')}
                </span>
                <p className={mainStyles.margin_20px}>
                  {t('coltsadeus.Goal Text')}
                </p>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Tasks')}
                </span>
                <ul className={mainStyles.margin_20px}>
                    <li>{t('coltsadeus.Tasks Text 1')}</li>
                    <li>{t('coltsadeus.Tasks Text 2')}</li>
                    <li>{t('coltsadeus.Tasks Text 3')}</li>
                </ul>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Problems')}
                </span>
                <p>
                  {t('coltsadeus.Problems Text 1')}
                </p>
                <p>
                  {t('coltsadeus.Problems Text 2')}
                </p>
                <p>
                  {t('coltsadeus.Problems Text 3')}
                </p>

              </div>

            </div> 

            <div className={s.imgGrid}>
              <img className={s.img1} src={projectColtsadeusImages.projectColtsadeus1} alt="projectColtsadeus" />
              <img className={s.img2} src={projectColtsadeusImages.projectColtsadeus2} alt="projectColtsadeus" />
              <img className={s.img3} src={projectColtsadeusImages.projectColtsadeus3} alt="projectColtsadeus" />
              <img className={s.img4} src={projectColtsadeusImages.projectColtsadeus4} alt="projectColtsadeus" />
              <img className={s.img5} src={projectColtsadeusImages.projectColtsadeus5} alt="projectColtsadeus" />
              <img className={s.img6} src={projectColtsadeusImages.projectColtsadeus6} alt="projectColtsadeus" />
              <img className={s.img7} src={projectColtsadeusImages.projectColtsadeus7} alt="projectColtsadeus" />
              <img className={s.img8} src={projectColtsadeusImages.projectColtsadeus8} alt="projectColtsadeus" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Coltsadeus