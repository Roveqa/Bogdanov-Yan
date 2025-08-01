import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import { useTranslation } from 'react-i18next'

import mainStyles from "../.././main.module.sass"
import s from './Contact.module.sass'
import { Link } from 'react-router-dom'


function Contact() {


  const { i18n, t } = useTranslation("contact");


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8250d38f-383b-4222-8fe7-bb2772804657");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  useEffect(() => {
    document.title = "BY — Contact";
  }, []);

  return (
    <>

      <Helmet>
        <title>BY — Contact</title>
        <meta name="description" content="Contact me via email, form, or social media. Open to collaborations, projects, and new opportunities." />
        <meta name="robots" content="index, follow" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='BY — Contact' />
        <meta property='og:description' content='Contact me via email, form, or social media. Open to collaborations, projects, and new opportunities.' />
        <meta property="og:image" content="/src/assets/Img/Meta/prev.png" />
        <meta property='og:url' content='https://bogdanovyan.ru/contact' />
      </Helmet>

      <section className={s.contactSection}>
        <h1 className={s.contact}>
          {t("title.h2")}
        </h1>
        <div className={s.info}>
  
          {/* Socials */}
  
          <div className={`${s.socials} ${mainStyles.margin_60px}`}>
            <h3 className={`${s.h3} ${mainStyles.margin_4px}`}>
              {t("title.h2Social")}
            </h3>
            <a className={`${s.text} ${s.social} ${mainStyles.margin_4px}`} href="#">
              Telegram
            </a>
            <a className={`${s.text} ${s.social} ${mainStyles.margin_4px}`} href="#">
              Behance
            </a>
            <a className={`${s.text} ${s.social} ${mainStyles.margin_4px}`} href="#">
              Dprofile
            </a>
            <a className={`${s.text} ${s.social} ${mainStyles.margin_4px}`} href="#">
              Instagram
            </a>
            <a className={`${s.text} ${s.social}`} href="#">
              Github
            </a>  
          </div>
  
          {/* General inquiries */}
  
          <div className={`${s.generalInquiries} ${mainStyles.margin_60px}`}>
            <h3 className={`${s.h3} ${mainStyles.margin_4px}`}>
              {t("title.h2General")}
            </h3>
            <a className={`${s.text} ${s.social}`} href="#">
              hello@bogdanovyan.com
            </a>  
          </div>
  
          {/* Copyright */}
  
          <div className={s.copyright}>
            <p className={s.text}>
              © 2025 Bogdanov Yan, {t("text.All Rights Reserved")} <br />
              <Link to={"/privacy-policy"} className={`${s.text} ${s.link} ${s.social}`}>
                {t("text.Privacy policy,")}&nbsp;
              </Link> 
              <Link to={"/cookie-policy"} className={`${s.text} ${s.link} ${s.social}`}>
                {t("text.Cookie Policy")}
              </Link> 
            </p>
          </div>
  
        </div>
  
        {/* Feedback form */}
  
        <div className={s.feedback}>
          <h3 className={`${s.formTitle} ${mainStyles.margin_25px}`}>
            {t("title.h2Form")}
          </h3>

          <form onSubmit={onSubmit}>

            <input className={`${s.inputName} ${mainStyles.margin_25px}`} type="text" name="name" placeholder={t("form.placeholders.name")} required/>

            <input className={`${s.inputMail} ${mainStyles.margin_25px}`} type='email' name="email" placeholder={t("form.placeholders.email")} required/>

            <select className={`${s.inputService} ${mainStyles.margin_25px}`} name="Service" id="" required>
              <option value="" disabled selected>{t("form.placeholders.service")}</option>
              <option value="option1">Website Design</option>
              <option value="option2">Website Development</option>
              <option value="option3">Design Support</option>
              <option value="option4">Seo Optimization</option>
              <option value="option5">Other</option>
            </select>

            <select className={`${s.inputBudget} ${mainStyles.margin_25px}`} name="Budget" id="">
              <option value="" disabled selected>{t("form.placeholders.budget")}</option>
              <option value="option1">&lt;70$</option>
              <option value="option2">&lt;120$</option>
              <option value="option3">&lt;200$</option>
              <option value="option4">&lt;400$</option>
              <option value="option5">&lt;700$</option>
            </select>
            
            <textarea className={`${s.inputMessage} ${mainStyles.margin_25px}`} name="message" id="" placeholder={t("form.placeholders.message")} wrap="soft"></textarea>

            <div className={`${s.check} ${mainStyles.margin_25px}`}>
              <label className={s.label}>
                <input className={s.checkbox} type="checkbox" name="" id="" required/>
                <span class={s.customCheckbox}></span>
                <p className={s.text}>
                  {t("text.agree to the")}&nbsp;
                  <Link to={"/privacy-policy"} className={`${s.text} ${s.link} ${s.social}`}>
                    {t("text.Privacy policy")}
                  </Link> 
                </p>
              </label>
            </div>

            <button type="submit" className={mainStyles.link}>
              {t("button.Send message")}
            </button>
          </form>
        </div>

      </section>
    </>
  )
}

export default Contact