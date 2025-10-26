import Link from 'next/link'
import React from 'react'

import LogoIcon from '../../assets/icons/Logo-Badem Media.svg'
import useLanguageRoute from '@/hooks/useLanguageRoute'
import { Routes } from '@/routes'

type Props = {
  className?: string
}

const Logo = ({ className }: Props) => {
  return (
    <Link
      href={useLanguageRoute(Routes.INDEX)}
      className={`w-fit block ${className} scale-[0.6] sm:scale-90 md:scale-100 -ml-10 sm:-ml-0`}
    >
      <LogoIcon />
    </Link>
  )
}

export default Logo
