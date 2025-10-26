import React from 'react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

import PageLayout from '@/components/layout/PageLayout'
import ProductsHero from '@/components/shared/oldDesign/ProductsHero'
import PresentationSlider from '@/components/shared/oldDesign/PresentationSlider'
import AnimatedParagraph from '@/components/shared/AnimatedParagraph'
import ProductsReadMoreBtn from '@/components/shared/oldDesign/ProductsReadMoreBtn'
import ProductsBgImage from '@/components/shared/ProductsBgImage'

import { poliginProductInfo } from '@/data/productsInfo'

import poliginLogo from '/public/images/Logotipi/Poligin - Logo.png'
import poligiBgImg from '/public/images/Klijenti/POLIGIN/poligin-background.png'

import { IProducts } from '@/utils/types/productsImagesType'
import UseLocoScroll from '@/store/useLocoScroll'

const Poligin = ({ images, videos }: IProducts) => {
  const { locomotiveScroll } = UseLocoScroll()

  const { t } = useTranslation('poligin')

  return (
    <PageLayout
      title={t('poligin:metaTitle')}
      desc={t('poligin:metaDesc')}
      purpleBg
    >
      <section data-scroll-section className="lg:min-h-screen relative ">
        <ProductsBgImage image={poligiBgImg} />

        <ProductsHero
          logo={poliginLogo}
          logoWidth={646}
          logoHeight={256}
          pageDesc={t('pageDesc')}
          productInfo={poliginProductInfo}
        />

        <div className="relative z-[1]">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', duration: 1 }}
            viewport={{ once: true }}
            className="px-6 sm:px-16 max-w-[76rem] gap-20 mx-auto mt-24 sm:mt-36 md:mt-44"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              onLoadedData={() => locomotiveScroll.update()}
            >
              <source
                src="https://badem-media-videos.s3.eu-central-1.amazonaws.com/poligin/page-video/POLIGIN+VIDEO+1.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          <AnimatedParagraph>
            <p className="mx-auto max-w-[60rem] px-6 md:px-16 text-2xl my-24 sm:my-36 md:my-44 text-center">
              {t('text1')}
            </p>
          </AnimatedParagraph>
        </div>
      </section>

      <section data-scroll-section>
        <PresentationSlider videoItems={videos} itemsPerSlide={3} />
      </section>

      <section data-scroll-section className="mb-24 sm:mb-36 md:mb-44">
        <AnimatedParagraph>
          <p className="mx-auto max-w-[60rem] px-6 md:px-16 text-2xl my-24 sm:my-36 md:my-44 text-center">
            {t('text2')}
          </p>
        </AnimatedParagraph>

        <PresentationSlider sliderItems={images} />

        <ProductsReadMoreBtn
          href="https://www.instagram.com/poligin.poliklinika/"
          text={t('common:productsReadMore')}
        />
      </section>
    </PageLayout>
  )
}

export default Poligin
