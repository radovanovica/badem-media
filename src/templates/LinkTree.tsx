import Link from 'next/link'
import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

import PageLayout from '@/components/layout/PageLayout'

import Logo from '@/assets/icons/links-logo.svg'
import Arrow from '@/assets/arrow-right-links.svg'
import LinkTreeArrow from '@/assets/linktree-arrow.svg'
import clsx from 'clsx'
import { socialLinks } from '@/components/layout/footer/FooterSocial'
import AnimatedParagraph from '@/components/shared/AnimatedParagraph'
import useWindowHeight from '@/hooks/UseWindowHeight'
import UseLocoScroll from '@/store/useLocoScroll'
import FooterEmailSubscribe from '@/components/layout/footer/FooterEmailSubscribe'
import { useRouter } from 'next/router'

const LinkTree = () => {
  const { t } = useTranslation('links')
  const router = useRouter()
  const height = useWindowHeight()
  const { locomotiveScroll } = UseLocoScroll()
  const [isOpen, setIsOpen] = useState(false)

  const links: { label: string; href: string }[] = t('links', {
    returnObjects: true
  })

  return (
    <PageLayout title="" desc="" hideFooter hideNavbar>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 h-screen w-screen bg-[#FFFFE2] overflow-hidden">
        <div
          className="flex gap-8 sm:gap-14 w-[2500xp] z-0 rounded-lg m-2 bg-main-black"
          style={{ height: height - 16 }}
        >
          {[...Array(100)].map((_, index) => (
            <div key={index} className="flex flex-col gap-8 sm:gap-14">
              {[...Array(100)].map((_, index) => (
                <div
                  key={index}
                  className="min-w-[3.8px] sm:min-w-[4.8px] min-h-[3.8px] sm:min-h-[4.8px] bg-gray-300/20"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        data-scroll-section
        className="container py-10 max-w-[40rem] mx-auto flex flex-col relative z-[1]"
      >
        {isOpen && (
          <div
            className="fixed left-1/2 top-0 bg-black/30 z-10 flex items-center justify-center px-3 h-screen w-screen -translate-x-1/2"
            onClick={() => setIsOpen(false)}
          >
            <div
              className=" bg-main-black rounded-lg border border-border py-5 px-5 sm:px-10 flex flex-col gap-4"
              onClick={e => e.stopPropagation()}
            >
              <FooterEmailSubscribe />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-4 sm:mb-12">
          <div>
            <Link
              href="/"
              className="scale-75 sm:scale-100 block -ml-[1.7rem] sm:-ml-0"
            >
              <Logo />
            </Link>

            <AnimatedParagraph>
              <p className="text-[#FFFFE2] font-extralight mt-2 sm:mt-[1.875rem] text-base sm:text-2xl ">
                {t('pageDesc')}
              </p>
            </AnimatedParagraph>
          </div>

          <LinkTreeArrow className="scale-[0.5] sm:scale-100" />
        </div>

        <div className="flex flex-col gap-5">
          {links.map(({ href, label }, i) => (
            <motion.div
              initial={{
                opacity: 0,
                translateX: 80
              }}
              animate={{
                opacity: 1,
                translateX: 0
              }}
              transition={{
                type: 'spring',
                stiffness: 40,
                delay: 0.2 + i * 0.2
              }}
              key={href}
            >
              <div
                onClick={() => {
                  href === '' ? setIsOpen(true) : router.push(href)
                }}
                className={clsx(
                  'text-base sm:text-lg md:text-2xl border border-white rounded-lg p-5 sm:p-[1.875rem] flex items-center gap-3 sm:gap-5 hover:bg-[#FFFFE2] hover:text-main-black duration-300 cursor-pointer',
                  {
                    'bg-[#FFFFE2] text-main-black': i === 0,
                    'bg-main-black': i > 0
                  }
                )}
              >
                <Arrow className="scale-[0.6] sm:scale-100" />
                <span>{label}</span>
              </div>
            </motion.div>
          ))}

          <div className="rounded-lg flex items-center justify-between mt-2 sm:mt-6 p-4 sm:p-[1.875rem] relative z-[1]">
            {socialLinks.map(({ href, icon }, i) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 40,
                  delay: 0.1 + i * 0.1
                }}
                viewport={{ once: true }}
                key={href}
              >
                <Link href={href} className="hover:scale-110 duration-200">
                  {icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default LinkTree
