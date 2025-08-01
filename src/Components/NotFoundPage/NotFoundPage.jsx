import { useState, useEffect } from 'react'
import mainStyles from "../.././main.module.sass"
import s from './NotFoundPage.module.sass'
import { Link } from 'react-router-dom'


function NotFoundPage() {

  return (
    <>
      <section className={s.NotFoundPage}>
          <h1 className={mainStyles.margin_8px}>
              404
          </h1>
          <Link className={mainStyles.link} to="/">
            Go home →
          </Link>
      </section>
    </>
  )
}

export default NotFoundPage