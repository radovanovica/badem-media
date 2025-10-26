import React from 'react'
import { useTranslation } from 'next-i18next'
import { Routes, routes } from '@/routes'

const useLanguageRoute = (route: Routes) => {
  const { i18n } = useTranslation()

  return routes[i18n.language as keyof typeof routes][route]
}

export default useLanguageRoute
