import { Helmet } from "react-helmet"
import { useEffect } from 'react'

import mainStyles from "../.././main.module.sass"
import s from './Services.module.sass'

function Services() {

  useEffect(() => {
    document.title = "Bogdanov Yan — Services";
  }, []);

  return (
    <>

      <Helmet>
        <title>Bogdanov Yan — Services</title>
        <meta name="description" content="Web developer and UI/UX designer. I create responsive, user-friendly, and modern web applications with a focus on design and functionality." />
        <meta name="robots" content="index, follow" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Bogdanov Yan — Services' />
        <meta property='og:description' content='Web developer and UI/UX designer. I create responsive, user-friendly, and modern web applications with a focus on design and functionality.' />
        {/* <meta property="og:image" content="https://bogdanovyan.com/og-preview.jpg" /> */}
        {/* <meta property='og:url' content='website' /> */}
      </Helmet>

      <div className={s.about}>
        <h1 className={mainStyles.margin_110px}>
          Services
        </h1>
        <div className={s.mainContainer}>

          <div className={mainStyles.margin_50px}>
            <h3 className={s.h3}>
              Website Design
            </h3>
            <div>
              <p>
                I&nbsp;create modern and thoughtful website design that doesn&rsquo;t just look pretty, but helps solve real business problems&nbsp;&mdash; from the first screen to&nbsp;the last pixel. Emphasis on&nbsp;structure, clear navigation, adaptability and visual presentation that sets your product apart from the competition and makes the user experience simple and enjoyable.
              </p>
            </div>
          </div>

          <div className={mainStyles.margin_50px}>
            <h3 className={s.h3}>
              Website Development
            </h3>
            <div>
              <p>
                I&nbsp;help translate design into a&nbsp;live, working website&nbsp;&mdash; fast, adaptive and accurate.
              </p>
              <p>
                I&nbsp;work primarily with Tilda, Webflow and Framer&nbsp;&mdash; this allows me&nbsp;to&nbsp;quickly launch modern, adaptive sites with flexible visual editing and animation.
              </p>
              <p>
                For simple and lightweight sites&nbsp;I also use React, HTML and CSS&nbsp;&mdash; if&nbsp;you need a&nbsp;more custom approach without a&nbsp;builder.
              </p>
              <p>
                I&nbsp;can develop a&nbsp;website based on&nbsp;my&nbsp;own design as&nbsp;well as&nbsp;on&nbsp;client&rsquo;s ready-made layouts. I&nbsp;always focus on&nbsp;clean implementation, clear structure and correct work on&nbsp;all devices.
              </p>
            </div>
          </div>

          <div className={mainStyles.margin_50px}>
            <h3 className={s.h3}>
              Design Support
            </h3>
            <div>
              <p>
                A&nbsp;service for products that are already launched but require regular visual and&nbsp;UX development.
              </p>
              <p>
                I&nbsp;join the project after the main design phase&nbsp;&mdash; to&nbsp;add new screens, adapt interfaces, update components or&nbsp;create additional content.
              </p>
              <p>
                I&nbsp;work within an&nbsp;existing design system, following the style, structure and UX-logic. This allows me&nbsp;to&nbsp;develop the product consistently, without losing quality and visual integrity.
              </p>
            </div>
          </div>

          <div className={mainStyles.margin_50px}>
            <h3 className={s.h3}>
              Seo Optimization
            </h3>
            <div>
              <p>
                Design isn&rsquo;t just about the visuals, it&rsquo;s also about how you are found.
              </p>
              <p>
                I&nbsp;integrate basic SEO optimization into every website so&nbsp;that it&rsquo;s not only aesthetically pleasing, but also visible in&nbsp;search. I&nbsp;customize everything that matters at&nbsp;the start: proper titles, meta tags, readable URLs, alt-texts, page structure, and adaptability.
              </p>
              <p>
                I&nbsp;work with sites on&nbsp;Tilda, Webflow and custom layout.
              </p>
              <p>
                SEO is&nbsp;a&nbsp;logical extension of&nbsp;quality UX-design: users don&rsquo;t just see your site, they find it&nbsp;easily, navigate quickly and take the necessary actions.
              </p>
            </div>
          </div>

          <div className={mainStyles.margin_50px}>
            <h3 className={s.h3}>
              Other
            </h3>
            <div>
              <p>
                Looking for something out of&nbsp;the box? Great&nbsp;&mdash; I&rsquo;m open to&nbsp;interesting challenges.
              </p>
              <p>
                If&nbsp;your idea doesn&rsquo;t fit within typical services but is&nbsp;related to&nbsp;design, digital products or&nbsp;visual pitching&nbsp;&mdash; just tell me&nbsp;what you need. It&nbsp;could be&nbsp;a&nbsp;concept, a&nbsp;case study design, an&nbsp;interface redesign&nbsp;&mdash; or&nbsp;something completely unique.
              </p>
              <p>
                I&nbsp;am flexible and offer a&nbsp;solution that works for you. Write to&nbsp;discuss format, deadlines and find a&nbsp;suitable format of&nbsp;cooperation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Services