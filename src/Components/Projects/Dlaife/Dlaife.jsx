import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import mainStyles from "../../../main.module.sass"
import { projectDlaifeImages } from '../../../assets/Img'
import s from './Dlaife.module.sass'

function Dlaife() {


  const { t } = useTranslation("project")


  useEffect(() => {
    document.title = "BY — Works — Dlaife";
  }, []);

  return (
    <>

      <Helmet>
        <title>BY — Works — Dlaife</title>
        <meta name="description" content="An online platform connecting artists and art lovers. Buy original paintings, posters, and art objects on a stylish, minimalist website." />
        <meta name="robots" content="index, follow" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='BY — Works — Dlaife' />
        <meta property='og:description' content='An online platform connecting artists and art lovers. Buy original paintings, posters, and art objects on a stylish, minimalist website.' />
        <meta property="og:image" content="/src/assets/Img/Meta/prev.png" />
        <meta property='og:url' content='https://bogdanovyan.ru/works/dlaife' />
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
                    Dlaife
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Directions')}
                  </span>
                  <p>
                    {t('dlaife.Directions Text')}
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
                    <a className={`${mainStyles.link} ${mainStyles.margin_8px}`} href="https://dprofile.ru/case/78430/online-art-store" target="_blank">
                      Dprofile
                    </a>
                    <a className={`${mainStyles.link} ${mainStyles.margin_8px}`} href="https://www.behance.net/gallery/203790257/Online-art-store" target="_blank">
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
                  {t('dlaife.Information Text')}
                </p>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Goal')}
                </span>
                <p className={mainStyles.margin_20px}>
                  {t('dlaife.Goal Text')}
                </p>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Tasks')}
                </span>
                <ul className={mainStyles.margin_20px}>
                    <li>{t('dlaife.Tasks Text 1')}</li>
                    <li>{t('dlaife.Tasks Text 2')}</li>
                    <li>{t('dlaife.Tasks Text 3')}</li>
                </ul>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Problems')}
                </span>
                <p>
                  {t('dlaife.Problems Text 1')}
                </p>
                <p>
                  {t('dlaife.Problems Text 2')}
                </p>
                <p>
                  {t('dlaife.Problems Text 3')}
                </p>

              </div>

            </div> 

            <div className={s.imgGrid}>
              <img className={s.img1} src={projectDlaifeImages.projectDlaife1} alt="projectDlaife" />
              <img className={s.img2} src={projectDlaifeImages.projectDlaife2} alt="projectDlaife" />
              <img className={s.img3} src={projectDlaifeImages.projectDlaife3} alt="projectDlaife" />
              <img className={s.img4} src={projectDlaifeImages.projectDlaife4} alt="projectDlaife" />
              <img className={s.img5} src={projectDlaifeImages.projectDlaife5} alt="projectDlaife" />
              <img className={s.img6} src={projectDlaifeImages.projectDlaife6} alt="projectDlaife" />
              <img className={s.img7} src={projectDlaifeImages.projectDlaife7} alt="projectDlaife" />
              <img className={s.img8} src={projectDlaifeImages.projectDlaife8} alt="projectDlaife" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Dlaife