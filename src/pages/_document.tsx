import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

import { i18n } from 'next-i18next'

export default function Document() {
  return (
    <Html lang={i18n?.language}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#111" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          name="google-site-verification"
          content="8uVxG6gllZKF6mnwMmUViayRbxFn6_XeP-eTaEC2nQA"
        />

        <meta
          name="facebook-domain-verification"
          content="nzdwk5q9m8zxdn0ex9pofekj9bedut"
        />

        <script
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UtZDLp"
          defer
        ></script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
