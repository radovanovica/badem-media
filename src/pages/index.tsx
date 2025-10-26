import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Home from '@/templates/Home'

export default function HomePage() {
  return <Home />
}

export async function getStaticProps() {
  return {
    props: {
      ...(await serverSideTranslations('sr', ['common', 'home', 'footer']))
    }
  }
}
