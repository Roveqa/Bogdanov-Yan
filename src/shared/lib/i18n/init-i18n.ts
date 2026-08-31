import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import aboutEn from '@content/i18n/en/about.json'
import caseStudyEn from '@content/i18n/en/case-study.json'
import commonEn from '@content/i18n/en/common.json'
import homeEn from '@content/i18n/en/home.json'
import seoEn from '@content/i18n/en/seo.json'
import worksEn from '@content/i18n/en/works.json'
import aboutRu from '@content/i18n/ru/about.json'
import caseStudyRu from '@content/i18n/ru/case-study.json'
import commonRu from '@content/i18n/ru/common.json'
import homeRu from '@content/i18n/ru/home.json'
import seoRu from '@content/i18n/ru/seo.json'
import worksRu from '@content/i18n/ru/works.json'
import { defaultLocale, supportedLocales } from '@shared/constants/locales'

import { i18nNamespaces, type I18nResourceTree } from './i18n.types'
import { detectInitialLocale } from './locale-detector'

export const i18nResources = {
  en: {
    common: commonEn,
    home: homeEn,
    about: aboutEn,
    works: worksEn,
    'case-study': caseStudyEn,
    seo: seoEn,
  },
  ru: {
    common: commonRu,
    home: homeRu,
    about: aboutRu,
    works: worksRu,
    'case-study': caseStudyRu,
    seo: seoRu,
  },
} as const satisfies I18nResourceTree

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: i18nResources,
    lng: detectInitialLocale(),
    fallbackLng: defaultLocale,
    supportedLngs: supportedLocales,
    ns: i18nNamespaces,
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
  })
}

export { i18n }
