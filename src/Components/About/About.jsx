import { Helmet } from "react-helmet"
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import mainStyles from "../.././main.module.sass"
import s from './About.module.sass'


function About() {


  const { i18n, t } = useTranslation("about");


  useEffect(() => {
    document.title = "BY — About me";
  }, []);


  return (
    <>

      <Helmet>
        <title>BY — About me</title>
        <meta name="description" content="Web developer and UI/UX designer. I create responsive, user-friendly, and modern web applications with a focus on design and functionality." />
        <meta name="robots" content="index, follow" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Bogdanov Yan — About me' />
        <meta property='og:description' content='Web developer and UI/UX designer. I create responsive, user-friendly, and modern web applications with a focus on design and functionality.' />
        <meta property="og:image" content="/src/assets/Img/Meta/prev.png" />
        <meta property='og:url' content='https://bogdanovyan.ru/about' />
      </Helmet>

      <div className={s.about}>
        <h1 className={`${s.title} ${mainStyles.margin_110px}`}>
          {t("title.h1")}
        </h1>
        <div className={s.mainContainer}>
          <div className={mainStyles.margin_50px}>
            <h2 className={s.h2}>
              {t("title.Personal information")}
            </h2>
            <div className={mainStyles.margin_40px}>
              <p>
                {t("text.PI 1")}
              </p>
              <p>
                {t("text.PI 2")}
              </p>
              <p>
                {t("text.PI 3")}
              </p>
              <p>
                {t("text.PI 4")}
              </p>
              <p>
                {t("text.PI 5")}
              </p>
            </div>
            <img className={s.img} src="/src/assets/Img/About/Photo.png" alt="Photo" />
          </div>

          <div className={mainStyles.margin_50px}>
            <h2 className={s.h2}>
              {t("title.Experience")}
            </h2>
            <div className={mainStyles.margin_40px}>
              <h3 className={`${s.h3Info} ${mainStyles.margin_6px}`}>
                maryco
              </h3>
              <h3 className={`${s.h3Info} ${mainStyles.margin_10px}`}>
                {t("title.EX date 1")}
              </h3>
              <p>
                {t("text.EX maryco 1")}
              </p>
              <p>
                {t("text.EX maryco 2")}
              </p>
              <p>
                {t("text.EX maryco 3")}
              </p>
            </div>

            <div> 
              <h3 className={`${s.h3Info} ${mainStyles.margin_6px}`}>
                {t("title.EX name 2")}
              </h3>
              <h3 className={`${s.h3Info} ${mainStyles.margin_10px}`}>
                {t("title.EX date 2")}
              </h3>
              <p>
                {t("text.EX Freelance 1")}
              </p>
              <ul>
                <li>{t("text.EX Freelance li 1")}</li>
                <li>{t("text.EX Freelance li 2")}</li>
                <li>{t("text.EX Freelance li 3")}</li>
                <li>{t("text.EX Freelance li 4")}</li>
                <li>{t("text.EX Freelance li 5")}</li>
                <li>{t("text.EX Freelance li 6")}</li>
                <li>{t("text.EX Freelance li 7")}</li>
              </ul>
            </div>
          </div>

          <div className={mainStyles.margin_50px}>
            <h2 className={s.h2}>
              {t("title.Hard skills")}
            </h2>
            <div>
              <p>
                {t("text.HS 1")}
              </p>
              <p>
                {t("text.HS 2")}
              </p>
              <p>
                {t("text.HS 3")}
              </p>
            </div>
          </div>

          <div className={mainStyles.margin_50px}>
            <h2 className={s.h2}>
              {t("title.Soft skills")}
            </h2>
            <div>
              <p>
                {t("text.SS 1")}
              </p>
              <p>
                {t("text.SS 2")}
              </p>
              <p>
                {t("text.SS 3")}
              </p>
            </div>
          </div>

          <div className={mainStyles.margin_50px}>
            <h2 className={s.h2}>
              {t("title.Technology stack")}
            </h2>
            <div>
              <p>
                Figma, Photoshop, After Effects, Blender, Tilda, Webflow, Framer, HTML5, CSS3, React
              </p>
            </div>
          </div>

          <div className={mainStyles.margin_50px}>
            <h3 className={s.h2}>
              {t("title.CV")}
            </h3>
            <div>
              <a className={`${s.downloadLink} ${mainStyles.link}`} href="/public/Resume/Resume.pdf" download>
                {t("button.Download")}
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About
