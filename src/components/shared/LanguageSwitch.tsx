import { useRouter } from 'next/router'
import React from 'react'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

import { Routes, routes } from '@/routes'

const LanguageSwitch = () => {
  const router = useRouter()
  const {
    i18n: { language }
  } = useTranslation()
  const languages = Object.keys(routes)

  const handleLanguageChange = (lng: string) => {
    const route = Object.keys(routes[language as keyof typeof routes]).find(
      // @ts-ignore
      key => routes[language as keyof typeof routes][key] === router.pathname
    )

    const path =
      routes[lng as keyof typeof routes][(route || Routes.INDEX) as Routes]

    return path
  }

  return (
    <div className="flex items-center justify-center relative z-[2] gap-4 mr-2 sm:mr-0">
      <div className="h-4 w-[1px] bg-white absolute left-[50%] translate-x-[-50%]" />

      {languages.map(lng => (
        <Link
          key={lng}
          href={handleLanguageChange(lng)}
          className="w-fit flex items-center"
        >
          <p
            className={clsx(
              'hover:font-semibold text-lg sm:text-[1.375rem] uppercase',
              {
                'font-semibold': lng === language,
                'text-white font-light': lng !== language
              }
            )}
          >
            {lng}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default LanguageSwitch
