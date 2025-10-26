import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Ebook from '@/templates/Ebook'

export default function EbookPage() {
  return <Ebook />
}

export async function getStaticProps() {
  return {
    props: {
      ...(await serverSideTranslations('sr', ['common', 'ebook', 'footer']))
    }
  }
}
