import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ContactUs from '@/templates/ContactUs'

export default function ContactPage() {
  return <ContactUs />
}

export async function getStaticProps() {
  return {
    props: {
      ...(await serverSideTranslations('en', ['common', 'contact', 'footer']))
    }
  }
}
