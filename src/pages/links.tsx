import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LinkTree from '@/templates/LinkTree'

export default function AboutPage() {
  return <LinkTree />
}

export async function getStaticProps() {
  return {
    props: {
      ...(await serverSideTranslations('sr', ['links', 'about', 'footer']))
    }
  }
}
