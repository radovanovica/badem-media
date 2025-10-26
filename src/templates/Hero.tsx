import React from 'react'
import { useTranslation } from 'next-i18next'

import PageLayout from '@/components/layout/PageLayout'
import ProductsBgImage from '@/components/shared/ProductsBgImage'
import ProductsHero from '@/components/shared/oldDesign/ProductsHero'

import PresentationSlider from '@/components/shared/oldDesign/PresentationSlider'

import { heroInfo } from '@/data/productsInfo'

import heroBgImage from '/public/images/Klijenti/HERO/hero-background.png'
import heroLogo from '/public/images/Logotipi/hero-logo.png'
import AnimatedParagraph from '@/components/shared/AnimatedParagraph'
import ProductsReadMoreBtn from '@/components/shared/oldDesign/ProductsReadMoreBtn'

import { IProducts } from '@/utils/types/productsImagesType'

const Hero = ({ images, videos }: IProducts) => {
  const { t } = useTranslation('hero')

  return (
    <PageLayout title={t('hero:metaTitle')} desc={t('hero:metaDesc')}>
      <section data-scroll-section className="pb-40">
        <ProductsBgImage image={heroBgImage} opacity={0.8} />

        <ProductsHero
          logo={heroLogo}
          logoWidth={426}
          logoHeight={126}
          pageDesc={t('pageDesc')}
          productInfo={heroInfo}
        />

        <div className="my-24 sm:my-36 md:my-44">
          <PresentationSlider videoItems={videos} itemsPerSlide={3} />
        </div>

        <AnimatedParagraph>
          <p className="mx-auto text-center text-2xl max-w-[60rem] px-6 md:px-16">
            {t('text1')}
          </p>
        </AnimatedParagraph>
      </section>

      <section data-scroll-section className="pb-24 sm:pb-36 md:pb-44">
        <PresentationSlider sliderItems={images} />

        <ProductsReadMoreBtn
          href="https://www.instagram.com/behero.rs/"
          text={t('common:productsReadMore')}
        />
      </section>
    </PageLayout>
  )
}

export default Hero
