import React from 'react'
import { useTranslation } from 'next-i18next'

import PageLayout from '@/components/layout/PageLayout'
import ProductsBgImage from '@/components/shared/ProductsBgImage'
import ProductsHero from '@/components/shared/oldDesign/ProductsHero'

import PresentationSlider from '@/components/shared/oldDesign/PresentationSlider'
import AnimatedParagraph from '@/components/shared/AnimatedParagraph'
import ProductsReadMoreBtn from '@/components/shared/oldDesign/ProductsReadMoreBtn'

import { divcibareProductInfo } from '@/data/productsInfo'

import divcibarBgImage from '/public/images/Klijenti/DIVCIBAR/divcibar-pozadina.png'
import divcibarLogo from '/public/images/Logotipi/divcibar-logo.png'
import { IProducts } from '@/utils/types/productsImagesType'

const Divcibar = ({ images, videos }: IProducts) => {
  const { t } = useTranslation('divcibar')

  return (
    <PageLayout title={t('divcibar:metaTitle')} desc={t('divcibar:metaDesc')}>
      <section data-scroll-section className="sm:min-h-screen">
        <ProductsBgImage image={divcibarBgImage} opacity={0.7} />

        <ProductsHero
          logo={divcibarLogo}
          logoWidth={468}
          logoHeight={184}
          pageDesc={t('pageDesc')}
          productInfo={divcibareProductInfo}
        />

        <div className="my-24 sm:my-36 md:my-44">
          <PresentationSlider videoItems={videos} itemsPerSlide={3} />
        </div>

        <AnimatedParagraph>
          <p className=" max-w-[60rem] text-2xl mx-auto text-center px-6 md:px-16">
            {t('text1')}
          </p>
        </AnimatedParagraph>
      </section>

      <section data-scroll-section className="my-24 sm:my-36 md:my-44">
        <PresentationSlider sliderItems={images} />

        <ProductsReadMoreBtn
          href="https://www.instagram.com/divcibar/"
          text={t('common:productsReadMore')}
        />
      </section>
    </PageLayout>
  )
}

export default Divcibar
