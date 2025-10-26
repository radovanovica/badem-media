import React from 'react'

import { useTranslation } from 'next-i18next'

import PageLayout from '@/components/layout/PageLayout'
import ProductsBgImage from '@/components/shared/ProductsBgImage'
import ProductsHero from '@/components/shared/oldDesign/ProductsHero'
import PresentationSlider from '@/components/shared/oldDesign/PresentationSlider'
import AnimatedParagraph from '@/components/shared/AnimatedParagraph'
import ProductsReadMoreBtn from '@/components/shared/oldDesign/ProductsReadMoreBtn'

import { ozzyInfo } from '@/data/productsInfo'

import ozzyBgImage from '/public//images/Klijenti/OZZY/ozzy-background.png'

import ozzyLogo from '/public//images/Logotipi/ozzy-logo.png'

import { IProducts } from '@/utils/types/productsImagesType'

const Ozzy = ({ images, videos }: IProducts) => {
  const { t } = useTranslation('ozzy')

  return (
    <PageLayout title={t('ozzy:metaTitle')} desc={t('ozzy:metaDesc')}>
      <section data-scroll-section className="min-h-screen">
        <ProductsBgImage image={ozzyBgImage} />

        <ProductsHero
          logo={ozzyLogo}
          logoWidth={392}
          logoHeight={184}
          pageDesc={t('pageDesc')}
          productInfo={ozzyInfo}
        />

        <div className="mt-24 sm:mt-36 md:mt-44">
          <PresentationSlider sliderItems={images} />
        </div>
      </section>

      <section data-scroll-section className="pt-24 sm:pt-36 md:pt-44">
        <AnimatedParagraph>
          <p className="mx-auto text-center max-w-[64rem] text-lg sm:text-xl md:text-2xl px-6 md:px-16 ">
            {t('text1')}
          </p>
        </AnimatedParagraph>
      </section>

      <section data-scroll-section className="py-24 sm:py-36 md:py-44 relative">
        <PresentationSlider videoItems={videos} />

        <ProductsReadMoreBtn
          href="https://www.instagram.com/ozzy_shop_/"
          text={t('common:productsReadMore')}
        />
      </section>
    </PageLayout>
  )
}

export default Ozzy
