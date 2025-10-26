import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import PageLayout from '@/components/layout/PageLayout'
import ProductsBgImage from '@/components/shared/ProductsBgImage'
import ProductsHero from '@/components/shared/oldDesign/ProductsHero'
import PresentationSlider from '@/components/shared/oldDesign/PresentationSlider'
import AnimatedIMagesWrap from '@/components/shared/AnimatedIMagesWrap'
import AnimatedParagraph from '@/components/shared/AnimatedParagraph'
import ProductsReadMoreBtn from '@/components/shared/oldDesign/ProductsReadMoreBtn'

import { sitformInfo } from '@/data/productsInfo'

import sitformBgIMage from '/public/images/Klijenti/SIT FORM/sitform-background.png'
import sitformLogo from '/public/images/Logotipi/sitform-logo.png'

import redChair1 from '/public/images/Klijenti/SIT FORM/red-chair-1.png'
import redChair2 from '/public/images/Klijenti/SIT FORM/red-chair-2.png'
import redChair3 from '/public/images/Klijenti/SIT FORM/red-chair-3.png'
import whiteChair1 from '/public/images/Klijenti/SIT FORM/white-chair-1.png'
import whiteChair2 from '/public/images/Klijenti/SIT FORM/white-chair-2.png'

import { IProducts } from '@/utils/types/productsImagesType'

const Sitform = ({ images, videos }: IProducts) => {
  const { t } = useTranslation('sitform')

  return (
    <PageLayout title={t('sitform:metaTitle')} desc={t('sitform:metaDesc')}>
      <section data-scroll-section>
        <ProductsBgImage image={sitformBgIMage} />

        <ProductsHero
          logo={sitformLogo}
          logoWidth={500}
          logoHeight={136}
          pageDesc={t('pageDesc')}
          productInfo={sitformInfo}
        />

        <div className="h-fit max-w-[74rem] mx-auto grid grid-cols-2 gap-x-3 sm:gap-x-6 md:gap-x-10 mt-24 sm:mt-36 md:mt-44 px-6 md:px-[4.3rem] relative z-[1]">
          <div className="flex flex-col gap-3 sm:gap-6 md:gap-10 h-full">
            <AnimatedIMagesWrap>
              <Image src={redChair1} alt="red chair 1" />
            </AnimatedIMagesWrap>

            <AnimatedIMagesWrap>
              <Image src={redChair2} alt="red chair 2" />
            </AnimatedIMagesWrap>
          </div>

          <div className="grid grid-rows-[55fr_45fr] gap-y-3 sm:gap-y-6 md:gap-y-10 h-full">
            <div className="relative h-full w-full">
              <AnimatedIMagesWrap className="w-full h-full">
                <Image
                  src={redChair3}
                  alt="red chair 3"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatedIMagesWrap>
            </div>

            <div className="relative h-full w-full">
              <AnimatedIMagesWrap className="w-full h-full">
                <Image
                  src={whiteChair1}
                  alt="white chair 1"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatedIMagesWrap>
            </div>
          </div>
        </div>
      </section>

      <section data-scroll-section className="mt-3 sm:mt-6 md:mt-10">
        <div className="max-w-[74rem] mx-auto px-6 md:px-[4.4rem]">
          <AnimatedIMagesWrap>
            <Image src={whiteChair2} alt="white chair 2" />
          </AnimatedIMagesWrap>
        </div>

        <AnimatedParagraph>
          <p className="mx-auto max-w-[64rem] text-lg sm:text-xl md:text-2xl text-center my-24 sm:my-36 md:my-44 px-6 md:px-16">
            {t('text1')}
          </p>
        </AnimatedParagraph>

        <PresentationSlider videoItems={videos} itemsPerSlide={3} sitform />
      </section>

      <section data-scroll-section className="py-24 sm:py-36 md:py-44">
        <PresentationSlider sliderItems={images} sitform />

        <ProductsReadMoreBtn
          href="https://www.instagram.com/sitform.beograd/"
          text={t('common:productsReadMore')}
        />
      </section>
    </PageLayout>
  )
}

export default Sitform
