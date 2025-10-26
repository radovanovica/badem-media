import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import PageLayout from '@/components/layout/PageLayout'
import ProductsBgImage from '@/components/shared/ProductsBgImage'
import ProductsHero from '@/components/shared/oldDesign/ProductsHero'
import PresentationSlider from '@/components/shared/oldDesign/PresentationSlider'

import AnimatedIMagesWrap from '@/components/shared/AnimatedIMagesWrap'
import ProductsReadMoreBtn from '@/components/shared/oldDesign/ProductsReadMoreBtn'

import { laScintillaInfo } from '@/data/productsInfo'

import laScintillaBgImage from '/public/images/Klijenti/LA SCINTILLA/la-scintilla-background.png'
import laScintillaLogo from '/public/images/Logotipi/la-scintilla-logo.png'

import redCake from '/public/images/Klijenti/LA SCINTILLA/big-red-cake.png'

import { IProducts } from '@/utils/types/productsImagesType'

const LaScintilla = ({ images, videos }: IProducts) => {
  const { t } = useTranslation('laScintilla')

  return (
    <PageLayout
      title={t('laScintilla:metaTitle')}
      desc={t('laScintilla:metaDesc')}
    >
      <section data-scroll-section>
        <ProductsBgImage image={laScintillaBgImage} />

        <ProductsHero
          logo={laScintillaLogo}
          logoWidth={482}
          logoHeight={78}
          pageDesc={t('pageDesc')}
          productInfo={laScintillaInfo}
        />

        <div className="mx-auto md:max-w-[76.5rem] px-6 md:px-16 py-24 sm:py-36 md:py-44 relative z-[1]">
          <AnimatedIMagesWrap>
            <Image src={redCake} alt="red cake" />
          </AnimatedIMagesWrap>
        </div>

        <p className="mx-auto max-w-[60rem] px-6 md:px-16 text-2xl mb-24 sm:mb-36 md:mb-44 text-center">
          {t('text1')}
        </p>
      </section>

      <section data-scroll-section>
        <PresentationSlider videoItems={videos} itemsPerSlide={3} />
      </section>

      <section data-scroll-section className="my-24 sm:my-36 md:my-44">
        <PresentationSlider sliderItems={images} />

        <ProductsReadMoreBtn
          href="https://www.instagram.com/la_scintilla_belgrade/"
          text={t('common:productsReadMore')}
        />
      </section>
    </PageLayout>
  )
}

export default LaScintilla
