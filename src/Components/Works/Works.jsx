import { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import { useTranslation } from 'react-i18next'
import ProjectCard from './ProjectCard'
import {
  worksClowiImages,
  worksEcolinkImages,
  worksDlaifeImages,
  worksColtsadeusImages,
  worksNataliaShpedtImages,
  worksArturioImages
} from '../../assets/Img'

import s from './Works.module.sass'
import mainStyles from '../../main.module.sass'


function Works() {


  const { t } = useTranslation("work");


  const projectData = [
    {
      project: 'CLOWI',
      directions: t("clowi.Directions Text"),
      type: 'SaaS',
      year: '2025',
      link: '/works/clowi',
      description: [
        t("clowi.Information Text"),
      ],
      image: worksClowiImages.worksClowi,
    },
    {
      project: 'Ecolink',
      directions: t("ecolink.Directions Text"),
      type: 'Industrial',
      year: '2025',
      link: '/works/ecolink',
      description: [
        t("ecolink.Information Text"),
      ],
      image: worksEcolinkImages.worksEcolink,
      hasBorder: true
    },
    {
      project: 'Dlaife',
      directions: t("dlaife.Directions Text"),
      type: 'E-commerce',
      year: '2024',
      link: '/works/dlaife',
      description: [
        t("dlaife.Information Text"),
      ],
      image: worksDlaifeImages.worksDlaife,
    },
    {
      project: 'Coltsadeus',
      directions: t("coltsadeus.Directions Text"),
      type: 'E-commerce',
      year: '2024',
      link: '/works/coltsadeus',
      description: [
        t("coltsadeus.Information Text"),
      ],
      image: worksColtsadeusImages.worksColtsadeus,
      hasBorder: true
    },
    {
      project: 'Natalia Shpedt (portfolio)',
      directions: t("natalia Shpedt (portfolio).Directions Text"),
      type: 'Design',
      year: '2024',
      link: '/works/natalia-shpedt',
      description: [
        t("natalia Shpedt (portfolio).Information Text"),
      ],
      image: worksNataliaShpedtImages.worksNataliaShpedt,
    },
    {
      project: 'Arturio',
      directions: t("arturio.Directions Text"),
      type: 'Art',
      year: '2024',
      link: '/works/arturio',
      description: [
        t("arturio.Information 1 Text"),
        t("arturio.Information 2 Text"),
      ],
      image: worksArturioImages.worksArturio,
    },
  ]


  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    document.title = "BY — Works";
  }, []);

  return (
    <>
      <Helmet>
        <title>BY — Works</title>
        <meta name="description" content="Collection of design projects: interfaces, branding, UX/UI cases, and creative solutions for digital products and services." />
        <meta name="robots" content="index, follow" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Bogdanov Yan — Works' />
        <meta property='og:description' content='Collection of design projects: interfaces, branding, UX/UI cases, and creative solutions for digital products and services.' />
        <meta property="og:image" content="/src/assets/Img/Meta/prev.png" />
        <meta property='og:url' content='https://bogdanovyan.ru/works' />
      </Helmet>
      <div className={s.works}>
        <h1 className={`${s.title} ${mainStyles.margin_110px}`}>Works</h1>
        <div className={s.mainContainer}>
          <div className={s.projectWrapper}>
            {projectData.map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                isHoverable={project.isHoverable}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Works