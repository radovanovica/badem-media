import { i18n } from 'next-i18next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  title: string
  desc: string
  noindex?: boolean
}

const BASE_URL = 'https://bademmedia.com'

const Helmet = ({ children, title, desc, noindex }: Props) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta content={title} property="og:title" />
        <meta content={desc} property="og:description" />
        <meta content={BASE_URL} property="og:url" />
        <meta
          property="og:image"
          content="https://bademmedia.com/images/preview-logo-image.jpg"
        />

        <meta content="website" property="og:type" />
        <meta content="Badem Media" property="og:site_name" />
        <meta content={title} name="twitter:title" />
        <meta content={desc} name="twitter:description" />

        <link
          rel="canonical"
          href={`${BASE_URL}${router.asPath === '/' ? '' : router.asPath}`}
          key="canonical"
        />

        {router.locales?.map(language => (
          <link
            key={language}
            rel="alternate"
            hrefLang={language}
            href={`${BASE_URL}/${language}${router.asPath}`}
          />
        ))}

        {noindex && <meta name="robots" content="noindex" />}
      </Head>
      {children}
    </>
  )
}

export default Helmet
