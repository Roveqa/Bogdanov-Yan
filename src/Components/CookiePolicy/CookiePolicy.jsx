import { Helmet } from "react-helmet"
import { useEffect } from 'react'

import mainStyles from "../.././main.module.sass"
import s from './CookiePolicy.module.sass'

function CookiePolicy() {

  useEffect(() => {
    document.title = "BY — Cookie Policy";
  }, []);

  return (
    <>

      <Helmet>
        <title>BY — Cookie Policy</title>
      </Helmet>

      <div className={s.CookiePolicy}>

        <h1 className={`${s.title} ${mainStyles.margin_110px}`}>
          Cookie Policy
        </h1>

        <div className={s.mainContainer}>

          <p>
            1. What Are Cookies
          </p>
          <p>
            Cookies are small text files stored on&nbsp;your device when you visit a&nbsp;website. They allow the website to&nbsp;remember your actions and preferences (such as&nbsp;language, region, or&nbsp;display settings) for a&nbsp;certain period of&nbsp;time.
          </p>
          <p>
            2. What Cookies We&nbsp;Use
          </p>
          <p>
            The website uses the following types of&nbsp;cookies:
          </p>
          <ul className={mainStyles.margin_12px}>
            <li>
              Analytical cookies We&nbsp;use Google Analytics and Yandex.Metrica to&nbsp;collect anonymized statistics about how users interact with the website. These cookies help&nbsp;us improve the content and structure of&nbsp;the site.
            </li>
            <li>
              Session and persistent cookies Some cookies are temporary and are deleted when you close your browser (session cookies), while others remain on&nbsp;your device to&nbsp;recognize you on&nbsp;future visits (persistent cookies).
            </li>
          </ul>
          <p>
            3. Purpose of&nbsp;Using Cookies
          </p>
          <p>
            Cookies are used for the following purposes:
          </p>
          <ul className={mainStyles.margin_12px}>
            <li>
              to&nbsp;analyze site traffic and user behavior;
            </li>
            <li>
              to&nbsp;improve the performance and usability of&nbsp;the website;
            </li>
            <li>
              to&nbsp;ensure proper functioning of&nbsp;analytics services.
            </li>
          </ul>
          <p>
            4. Third-Party Services
          </p>
          <p>
            This website uses third-party analytics services:
          </p>
          <ul className={mainStyles.margin_12px}>
            <li>
              Google Analytics&nbsp;&mdash; Privacy Policy: https://policies.google.com/privacy
            </li>
            <li>
              Yandex.Metrica&nbsp;&mdash; Privacy Policy: https://yandex.com/legal/confidential
            </li>
            <li>
              These services may place their own cookies and process data in&nbsp;accordance with their respective privacy policies.
            </li>
          </ul>
          <p>
            5. Managing Cookies
          </p>
          <p>
            You can manage cookie settings in&nbsp;your browser:
          </p>
          <ul className={mainStyles.margin_12px}>
            <li>
              Disabling cookies may affect the functionality of&nbsp;some parts of&nbsp;the website.
            </li>
            <li>
              Instructions on&nbsp;how to&nbsp;disable cookies are usually available in&nbsp;the Help section of&nbsp;your browser.
            </li>
          </ul>
          <p>
            6. Consent to&nbsp;Use Cookies
          </p>
          <p>
            When you visit the website for the first time, a&nbsp;banner is&nbsp;displayed asking for your consent to&nbsp;the use of&nbsp;cookies. By&nbsp;clicking &laquo;Accept&raquo; or&nbsp;continuing to&nbsp;use the website, you agree to&nbsp;the use of&nbsp;cookies in&nbsp;accordance with this Policy.
          </p>
        </div>
            
      </div>

    </>
  )
}

export default CookiePolicy