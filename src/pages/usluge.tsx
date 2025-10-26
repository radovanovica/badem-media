import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Services from '@/templates/Services'

export default function ServicesPage() {
  return <Services />
}

export async function getStaticProps() {
  return {
    props: {
      ...(await serverSideTranslations('sr', ['common', 'services', 'footer']))
    }
  }
}
