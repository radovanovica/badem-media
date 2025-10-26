import React from 'react'
import About from '@/templates/About'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function AboutPage() {
  return <About />
}

export async function getStaticProps() {
  return {
    props: {
      ...(await serverSideTranslations('sr', ['common', 'about', 'footer']))
    }
  }
}
