import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'

import PageLayout from '@/components/layout/PageLayout'
import ProductsBgImage from '@/components/shared/ProductsBgImage'
import ProductsHero from '@/components/shared/oldDesign/ProductsHero'

import AnimatedIMagesWrap from '@/components/shared/AnimatedIMagesWrap'
import AnimatedParagraph from '@/components/shared/AnimatedParagraph'
import ProductsReadMoreBtn from '@/components/shared/oldDesign/ProductsReadMoreBtn'

import { novakInfo } from '@/data/productsInfo'

import novakBgImage from '/public/images/Klijenti/NOVAK/blurfotka.png'
import novakLogo from '/public/images/Logotipi/novak-logo.png'

import PresentationSlider from '@/components/shared/oldDesign/PresentationSlider'

import { IProducts } from '@/utils/types/productsImagesType'

import UseLocoScroll from '@/store/useLocoScroll'

const Novak = ({ images, videos }: IProducts) => {
  const { t } = useTranslation('novak')
  const { locomotiveScroll } = UseLocoScroll()

  return (
    <PageLayout title={t('novak:metaTitle')} desc={t('novak:metaDesc')}>
      <section data-scroll-section className="min-h-screen">
        <ProductsBgImage image={novakBgImage} />

        <ProductsHero
          logo={novakLogo}
          logoWidth={488}
          logoHeight={136}
          pageDesc={t('pageDesc')}
          productInfo={novakInfo}
        />

        <div className="mx-auto px-6 md:px-16 lg:max-w-[76rem] my-24 sm:my-36 md:my-44 flex justify-center relative z-[1]">
          <AnimatedIMagesWrap>
            <video
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => locomotiveScroll.update()}
              className="w-full h-full object-cover"
            >
              <source
                src="https://badem-media-videos.s3.eu-central-1.amazonaws.com/novak-trening-centar/page-video/NOVAK+DESKTOP.mp4"
                type="video/mp4"
              />
            </video>
          </AnimatedIMagesWrap>
        </div>

        <AnimatedParagraph>
          <p className="mx-auto text-2xl max-w-[60rem] mb-24 sm:mb-36 md:mb-44 text-center px-6 md:px-16">
            {t('text1')}
          </p>
        </AnimatedParagraph>
      </section>

      <section data-scroll-section>
        <PresentationSlider videoItems={videos} itemsPerSlide={3} />
      </section>

      <section data-scroll-section className="my-24 sm:my-36 md:my-44">
        <PresentationSlider sliderItems={images} />

        <ProductsReadMoreBtn
          href="https://www.instagram.com/novak.tennis.center/"
          text={t('common:productsReadMore')}
        />
      </section>
    </PageLayout>
  )
}

export default Novak
