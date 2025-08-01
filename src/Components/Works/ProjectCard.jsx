import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import s from './Works.module.sass'
import mainStyles from '../../main.module.sass'

function ProjectCard({ project }) {


  const { t } = useTranslation("work")

  const fields = [
    { key: 'project', label: t('card.Project') },
    { key: 'directions', label: t('card.Directions') },
    { key: 'type', label: t('card.Type') },
    { key: 'year', label: t('card.Year') }
  ]


  return (
    <>
      <hr className={mainStyles.margin_20px} />

      <div className={`${s.info} ${mainStyles.margin_30px}`}>
        <div className={s.infoWrapper}>
          {fields.map((field, idx) => (
            <div className={s.infoType} key={idx}>
              <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
                {field.label}
              </span>
              <p className={field.key === 'directions' ? s.directionsText : ''}>
                {project[field.key]}
              </p>
            </div>
          ))}

          <div className={s.infoType}>
            <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
              {t('card.Case')}
            </span>
            <Link className={mainStyles.link} to={project.link}>
              {t('card.Case Text')}
            </Link>
          </div>
        </div>

        <div className={s.information}>
          <span className={`${s.titleType} ${mainStyles.margin_4px}`}>
            {t('card.Information')}
          </span>
          {project.description.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      </div>

      <Link to={project.link}>
        <div className={`${s.imageWrapper} ${mainStyles.margin_90px}`}>
          <img
            className={`${s.imageBase} ${project.hasBorder ? mainStyles.border : ''}`}
            src={project.image}
            alt="Project cover"
          />
        </div>
      </Link>
    </>
  )
}

export default ProjectCard