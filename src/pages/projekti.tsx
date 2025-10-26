import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Projects from '@/templates/Projects'

export default function projectPage() {
  return <Projects />
}

export async function getStaticProps() {
  return {
    props: {
      ...(await serverSideTranslations('sr', ['common', 'projects', 'footer']))
    }
  }
}
