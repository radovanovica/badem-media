import { useTranslation } from 'next-i18next'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import FooterSocial from './FooterSocial'
import FooterAnimatedText from './FooterAnimatedText'
import FooterEmailSubscribe from './FooterEmailSubscribe'

import LinkWithUnderline from '@/components/shared/LinkWithUnderline'

import PlayBtn from '/src/assets/icons/play-btn.svg'

import useLanguageRoute from '@/hooks/useLanguageRoute'

import { Routes } from '@/routes'

const Footer = () => {
  const { t } = useTranslation('footer')

  const footerNav = [
    {
      text: 'about',
      href: useLanguageRoute(Routes.ABOUT)
    },
    {
      text: 'linkTree',
      href: useLanguageRoute(Routes.LINKS)
    },
    {
      text: 'privacyPolicy',
      href: '/'
    },
    {
      text: 'termsOfUse',
      href: '/'
    }
  ]

  return (
    <footer
      data-scroll-section
      id="footer"
      className="bg-main-gray pt-20 sm:pt-28 relative z-[1]"
    >
      <FooterAnimatedText />
      <div className="pt-24 font-light px-6 md:px-16 lg:px-36">
        <div
          className={`flex items-center lg:justify-between gap-14 lg:gap-0 flex-col lg:flex-row `}
        >
          <div>
            <div className="flex items-center gap-7 mb-4">
              <p className="text-[2.1875rem] leading-[2.3rem] sm:text-5xl ">
                {`${t('startProject')}`}
              </p>
              <Link
                href={useLanguageRoute(Routes.CONTACT)}
                className="bg-badem-brown min-w-[3rem] h-12 rounded-full grid place-content-center duration-200 hover:bg-badem-brown-dark hover:scale-105 pl-1"
              >
                <PlayBtn />
              </Link>
            </div>

            <LinkWithUnderline
              type="a"
              text="office@bademmedia.com"
              href="mailto:office@bademmedia.com"
              className="text-2xl"
            />

            <div className="mt-14 sm:mt-11 flex flex-col gap-4">
              <FooterEmailSubscribe />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <FooterSocial />

            <div className="flex flex-col justify-center items-center lg:items-end max-w-xs">
              <p className="text-center lg:text-right">{`${t('address')}`}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-lg pt-10 lg:pt-20  pb-20 flex-col lg:flex-row gap-14 lg:gap-0">
          <div className="flex gap-9 flex-col lg:flex-row items-center">
            {footerNav.map(({ text, href }, i) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 40,
                  delay: 0.1 + i * 0.1
                }}
                viewport={{ once: true }}
                key={text}
              >
                <LinkWithUnderline type="nextLink" text={t(text)} href={href} />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 40,
              delay: 0.4
            }}
            viewport={{ once: true }}
            className="text-center"
          >{`${t('rights')}`}</motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
