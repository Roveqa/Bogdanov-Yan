import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import mainStyles from "../../../main.module.sass"
import { projectEcolinkImages } from '../../../assets/Img'
import s from './Ecolink.module.sass'

function Ecolink() {
  
  
  const { t } = useTranslation("project")
  

  useEffect(() => {
    document.title = "BY — Works — Ecolink";
  }, []);

  return (
    <>

      <Helmet>
        <title>BY — Works — Ecolink</title>
        <meta name="description" content="Innovative brand offering high-quality wind turbines and renewable energy systems. Reliable solutions for clean electricity and a sustainable future." />
        <meta name="robots" content="index, follow" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='BY — Works — Ecolink' />
        <meta property='og:description' content='Innovative brand offering high-quality wind turbines and renewable energy systems. Reliable solutions for clean electricity and a sustainable future.' />
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

            {/* Ecolink */}

            <hr className={mainStyles.margin_20px} /> 
            <div className={`${s.info} ${mainStyles.margin_30px}`}>

              <div className={s.infoWrapper}>
                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Project')}
                  </span>
                  <p>
                    Ecolink
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Directions')}
                  </span>
                  <p>
                    {t('ecolink.Directions Text')}
                  </p>
                </div>

                <div className={s.infoType}>
                  <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                    {t('card.Type')}
                  </span>
                  <p>
                    Industrial
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
                    <a className={`${mainStyles.link} ${mainStyles.margin_8px}`} href="https://dprofile.ru/case/104924/ecolink" target="_blank">
                      Dprofile
                    </a>
                    <a className={`${mainStyles.link} ${mainStyles.margin_8px}`} href="https://www.behance.net/gallery/216512527/Ecolink" target="_blank">
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
                  {t('ecolink.Information Text')}
                </p>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Goal')}
                </span>
                <p className={mainStyles.margin_20px}>
                  {t('ecolink.Goal Text')}
                </p>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Tasks')}
                </span>
                <ul className={mainStyles.margin_20px}>
                    <li>{t('ecolink.Tasks Text 1')}</li>
                    <li>{t('ecolink.Tasks Text 2')}</li>
                    <li>{t('ecolink.Tasks Text 3')}</li>
                </ul>

                <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                  {t('card.Problems')}
                </span>
                <p>
                  {t('ecolink.Problems Text')}
                </p>

              </div>

            </div> 

            <div className={s.imgGrid}>
              <img className={`${s.img1} ${mainStyles.border}`} src={projectEcolinkImages.projectEcolink1} alt="projectEcolink" />
              <img className={`${s.img2} ${mainStyles.border}`} src={projectEcolinkImages.projectEcolink2} alt="projectEcolink" />
              <img className={`${s.img3} ${mainStyles.border}`} src={projectEcolinkImages.projectEcolink3} alt="projectEcolink" />
              <img className={s.img4} src={projectEcolinkImages.projectEcolink4} alt="projectEcolink" />
              <img className={s.img5} src={projectEcolinkImages.projectEcolink5} alt="projectEcolink" />
              <img className={`${s.img6} ${mainStyles.border}`} src={projectEcolinkImages.projectEcolink6} alt="projectEcolink" />
              <img className={`${s.img7} ${mainStyles.border}`} src={projectEcolinkImages.projectEcolink7} alt="projectEcolink" />
              <img className={s.img8} src={projectEcolinkImages.projectEcolink8} alt="projectEcolink" />
              <img className={s.img9} src={projectEcolinkImages.projectEcolink9} alt="projectEcolink" />
              <img className={`${s.img10} ${mainStyles.border}`} src={projectEcolinkImages.projectEcolink10} alt="projectEcolink" />
              <img className={`${s.img11} ${mainStyles.border}`} src={projectEcolinkImages.projectEcolink11} alt="projectEcolink" />
              <img className={`${s.img12} ${mainStyles.border}`} src={projectEcolinkImages.projectEcolink12} alt="projectEcolink" />
              <img className={s.img13} src={projectEcolinkImages.projectEcolink13} alt="projectEcolink" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Ecolink