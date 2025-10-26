import PageLayout from '@/components/layout/PageLayout'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'

import ProductsHero from '@/components/shared/oldDesign/ProductsHero'

import ProductsBgImage from '@/components/shared/ProductsBgImage'
import ProductsReadMoreBtn from '@/components/shared/oldDesign/ProductsReadMoreBtn'
import PresentationSlider from '@/components/shared/oldDesign/PresentationSlider'

import { serbiaOpenPoductInfo } from '@/data/productsInfo'

import background from '/public/images/Klijenti/SERBIA OPEN/serbia-open-background.png'
import serbiaOpenLogo from '/public/images/Logotipi/serbia-open-logo.png'

import tennisMatchRounded from '/public/images/Klijenti/SERBIA OPEN/tennis-match.rounded.png'
import djokovicRounded from '/public/images//Klijenti/SERBIA OPEN/novak-djokovic-rounded.png'
import { IProducts } from '@/utils/types/productsImagesType'

const SerbiaOpen = ({ images, videos }: IProducts) => {
  const { t } = useTranslation('serbiaOpen')
  const firstTitleRef = useRef<HTMLHeadingElement | null>(null)
  const secondTitleRef = useRef<HTMLHeadingElement | null>(null)

  const isFirstTitleInView = useInView(firstTitleRef, { once: true })
  const isSecondTitleInView = useInView(secondTitleRef, { once: true })

  return (
    <PageLayout
      title={t('serbiaOpen:metaTitle')}
      desc={t('serbiaOpen:metaDesc')}
    >
      <section
        data-scroll-section
        className=" relative pb-28 sm:pb-36  bg-no-repeat bg-top bg-contain"
      >
        <ProductsBgImage image={background} />

        <ProductsHero
          logo={serbiaOpenLogo}
          logoWidth={244}
          logoHeight={256}
          pageDesc={t('pageDesc')}
          productInfo={serbiaOpenPoductInfo}
        />
      </section>

      <section data-scroll-section className="mb-24 sm:mb-36 md:mb-44">
        <div className="flex md:gap-20 xl:gap-36 items-start md:items-center flex-col md:flex-row">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 30 }}
            viewport={{ once: true }}
            className="relative w-[60%] sm:w-1/2 lg:w-auto lg:min-w-[30.9375rem]"
          >
            <Image
              src={tennisMatchRounded}
              alt="tennis match"
              sizes="(max-width: 768px) 65vw, (max-width: 1200px) 50vw, 25vw"
              width={490}
              height={697}
            />
          </motion.div>

          <div className="mx-auto pr-6 pl-6 md:pl-0 md:pr-16 w-full mt-6 sm:mt-9">
            <div ref={firstTitleRef} className="overflow-hidden">
              <motion.h2
                initial="hidden"
                animate={isFirstTitleInView && 'visible'}
                variants={{
                  hidden: { y: -160 },
                  visible: {
                    y: 0,
                    transition: { type: 'tween', duration: 0.7, delay: 0.5 }
                  }
                }}
                className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-left"
              >
                {t('section1.title')}
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: 'anticipate' }}
              viewport={{ once: true }}
              className="text-lg sm:text-2xl pt-8 sm:pt-12 max-w-[40.625rem]"
            >
              {t('section1.desc')}
            </motion.p>
          </div>
        </div>
      </section>

      <section data-scroll-section>
        <PresentationSlider videoItems={videos} mobileFullWidth />
      </section>

      <section data-scroll-section className="my-24 sm:my-36 md:my-44">
        <div className="flex md:gap-20 xl:gap-36 items-end md:items-center md:justify-end flex-col-reverse md:flex-row">
          <div className="mx-auto pr-6 pl-6 md:pr-0 md:pl-16 w-full mt-6 sm:mt-9 ">
            <div ref={secondTitleRef} className="overflow-hidden">
              <motion.h2
                initial="hidden"
                animate={isSecondTitleInView && 'visible'}
                variants={{
                  hidden: { y: -160 },
                  visible: {
                    y: 0,
                    transition: { type: 'tween', duration: 0.7, delay: 0.5 }
                  }
                }}
                className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-right"
              >
                {t('section2.title')}
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: 'anticipate' }}
              viewport={{ once: true }}
              className="text-lg sm:text-2xl pt-8 sm:pt-12 max-w-[40.625rem] text-right ml-auto"
            >
              {t('section2.desc')}
            </motion.p>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 30 }}
            viewport={{ once: true }}
            className="relative w-[60%] sm:w-1/2 lg:w-auto lg:min-w-[30.9375rem] flex justify-end"
          >
            <Image
              src={djokovicRounded}
              alt="tennis match"
              sizes="(max-width: 768px) 65vw, (max-width: 1200px) 50vw, 25vw"
              width={490}
              height={697}
            />
          </motion.div>
        </div>
      </section>

      <section data-scroll-section className="mb-24 sm:mb-36 md:mb-44">
        <PresentationSlider sliderItems={images} />

        <ProductsReadMoreBtn
          href="https://www.instagram.com/serbiaopen/"
          text={t('common:productsReadMore')}
        />
      </section>
    </PageLayout>
  )
}

export default SerbiaOpen
