import PageLayout from '@/components/layout/PageLayout'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { motion } from 'framer-motion'

import TitleUnderline from '@/assets/title-underline.svg'

import ebookPhones from '/public/images/ebook-phones.png'

import ArrowLeft from '@/assets/arrow-left.svg'
import ArrowRight from '@/assets/arrow-right.svg'
import AnimatedIMagesWrap from '@/components/shared/AnimatedIMagesWrap'
import AnimatedParagraph from '@/components/shared/AnimatedParagraph'
import UseLocoScroll from '@/store/useLocoScroll'

function Ebook() {
  const { t } = useTranslation('ebook')
  const { locomotiveScroll } = UseLocoScroll()

  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  return (
    <PageLayout title="" desc="">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 h-screen flex gap-14 w-[2500xp] z-0">
        {[...Array(100)].map((_, index) => (
          <div key={index} className="w-[1px] h-full bg-gray-400/10" />
        ))}
      </div>

      <div className="fixed left-0 top-1/2 -translate-y-1/2 w-screen flex flex-col gap-14 h-[2500xp] z-0">
        {[...Array(120)].map((_, index) => (
          <div key={index} className="w-full h-[1px] bg-gray-400/10" />
        ))}
      </div>
      <div
        data-scroll-section
        className="pt-[8rem] sm:pt-[10rem] lg:pt-64 relative z-[1]"
      >
        <div className="container">
          <p className="text-center text-badem-brown font-extralight text-xs sm:text-base">
            {t('overTitle')}
          </p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center my-6 sm:my-8 lg:my-11"
          >
            <span className="relative">
              {t('title.free')}
              <TitleUnderline className="absolute bottom-0 sm:bottom-1 md:bottom-2 lg:bottom-4 left-0 w-full scale-[0.6] md:scale-75 lg:scale-100 -translate-x-16 sm:-translate-x-24 md:-translate-x-20 lg:translate-x-0" />
              <span className="text-badem-brown"> {t('title.30days')}</span>{' '}
              <br />{' '}
            </span>
            {t('title.row2')}
          </motion.h1>

          <AnimatedParagraph>
            <p className="text-gray-600 font-semibold max-w-[35rem] mx-auto text-center">
              {t('description.grayText')}{' '}
              <span className="text-white">{t('description.whiteText')}</span>
            </p>
          </AnimatedParagraph>

          <div
            className="block w-fit dark:bg-badem-brown hover:bg-badem-brown-dark duration-200 bg-black font-semibold px-5 sm:px-8 py-[0.625rem] sm:py-4 mt-6 sm:mt-8 lg:mt-11 mx-auto text-xs sm:text-base cursor-pointer"
            onClick={() =>
              locomotiveScroll.scrollTo(
                document.querySelector('#ebook-form-container')
              )
            }
          >
            {t('readMore')}
          </div>

          <AnimatedIMagesWrap>
            <Image
              src={ebookPhones}
              alt="phones"
              width={900}
              className="mt-16 lg:mt-[9.25rem] w-full max-w-[55rem] mx-auto px-4 mb-12 sm:mb-[10rem] lg:mb-[17.625rem]"
            />
          </AnimatedIMagesWrap>
        </div>
      </div>
      <section data-scroll-section className="container">
        <div className="flex flex-col gap-4 md:gap-[3rem] max-w-[65rem]">
          <AnimatedParagraph>
            <h2 className="text-[24px] sm:text-4xl lg:text-6xl font-semibold">
              {t('section1.title')}
            </h2>
          </AnimatedParagraph>

          <AnimatedParagraph className=" font-semibold">
            <p>{t('section1.description.row1')}</p>
            <br />
            <p>{t('section1.description.row2')}</p>
            <br />
            <p>{t('section1.description.row3')}</p>
            <br />
            <p>{t('section1.description.row4')}</p>
          </AnimatedParagraph>
        </div>
      </section>

      <section
        data-scroll-section
        className="mt-12 sm:mt-[10rem] lg:mt-[17.625rem]"
      >
        <div className="container flex flex-col gap-7">
          <div className="grid lg:grid-cols-[auto_auto] w-full h-32 sm:h-[19rem] items-center gap-7 overflow-hidden">
            <motion.div
              initial={{
                translateX: '100%'
              }}
              whileInView={{ translateX: '0%' }}
              transition={{ type: 'spring', stiffness: 40 }}
              viewport={{ once: true }}
              className="h-full w-full p-[0.625rem] sm:p-8 flex flex-col justify-end gap-3 relative overflow-hidden rounded-lg bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/images/ebook-bg.png)' }}
            >
              <p className="text-xl sm:text-4xl font-semibold mt-auto z-[1]">
                {t('section2.row1.title')}
              </p>
              <p className="text-gray-600 z-[1] text-xs sm:text-base">
                <span className="text-white">
                  {t('section2.row1.desc.whiteText')}
                </span>{' '}
                {t('section2.row1.desc.grayText')}
              </p>
            </motion.div>
            <div className="h-full px-16 hidden lg:flex items-center justify-center bg-black ">
              <ArrowLeft />
            </div>
          </div>

          <div className="grid lg:grid-cols-[auto_auto] w-full h-32 sm:h-[19rem] items-center gap-7 overflow-hidden">
            <div className="h-full px-16 hidden lg:flex items-center justify-center bg-black">
              <ArrowRight />
            </div>

            <motion.div
              initial={{
                translateX: '-100%'
              }}
              whileInView={{ translateX: '0%' }}
              transition={{ type: 'spring', stiffness: 40 }}
              viewport={{ once: true }}
              className="h-full w-full p-[0.625rem] sm:p-8 flex flex-col justify-end gap-3 relative overflow-hidden rounded-lg bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/images/ebook-bg.png)' }}
            >
              <p className="text-xl sm:text-4xl font-semibold mt-auto relative z-[1] w-[70%] lg:w-full  ml-auto lg:ml-0 text-right lg:text-left">
                {t('section2.row2.title')}
              </p>
              <p className="text-gray-600 z-[1] w-[70%] lg:w-full ml-auto lg:ml-0 text-xs sm:text-base  text-right lg:text-left">
                {t('section2.row2.desc.grayText')}{' '}
                <span className="text-white">
                  {t('section2.row2.desc.whiteText')}
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        data-scroll-section
        className="my-12 sm:my-[10rem] lg:my-[17.625rem]"
      >
        <div
          id="ebook-form-container"
          className="container flex flex-col gap-4 sm:gap-6 md:gap-12 mb-16"
        >
          <AnimatedParagraph>
            <p className="text-gray-600 text-center font-semibold">
              {t('section3.desc.grayText')}{' '}
              <span className="text-white">{t('section3.desc.whiteText')}</span>
            </p>
          </AnimatedParagraph>
          <AnimatedParagraph>
            <h2 className="text-center text-[24px] sm:text-4xl lg:text-6xl font-semibold">
              {t('section3.title')}
            </h2>
          </AnimatedParagraph>

          {mount && <div className="klaviyo-form-WY9yX2 mx-auto"></div>}
        </div>
      </section>
    </PageLayout>
  )
}

export default Ebook
