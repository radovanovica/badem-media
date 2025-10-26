import React from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import PageLayout from '@/components/layout/PageLayout'
import ServicesGallery from '@/components/servicesPage/ServicesGallery'
import TitleWithBall from '@/components/shared/TitleWithBall'

import serbiaOpen from '/public/images/Usluge/social media/serbia-open-insta.png'
import serbiaOpen2 from '/public/images/Usluge/social media/serbia-open-insta-2.png'
import hero from '/public/images/Usluge/social media/hero-insta.png'
import ozzy from '/public/images/Usluge/social media/ozzy-insta.png'
import divcibar from '/public/images/Usluge/social media/divcibar-insta.png'
import divcibar2 from '/public/images/Usluge/social media/divcibar-insta-2.png'
import sitform from '/public/images/Usluge/social media/sitform-insta.png'
import sitform2 from '/public/images/Usluge/social media/sitform-insta-2.png'

import bgtImage from '/public/images/pozadina-about.png'
import ImgBigBall from '@/components/servicesPage/ImgBigBall'

import AnimatedParagraph from '@/components/shared/AnimatedParagraph'
import PhoneScreensSlider from '@/components/shared/PhoneScreensSlider'
import UseLocoScroll from '@/store/useLocoScroll'

const instaGallery = [
  {
    image: serbiaOpen,
    alt: '#'
  },
  {
    image: serbiaOpen2,
    alt: '#'
  },
  {
    image: hero,
    alt: '#'
  },
  {
    image: ozzy,
    alt: '#'
  },
  {
    image: divcibar,
    alt: '#'
  },
  {
    image: divcibar2,
    alt: '#'
  },
  {
    image: sitform,
    alt: '#'
  },
  {
    image: sitform2,
    alt: '#'
  }
]

const Services = () => {
  const { t } = useTranslation('services')
  const { locomotiveScroll } = UseLocoScroll()

  return (
    <PageLayout title={t('services:metaTitle')} desc={t('services:metaDesc')}>
      <section
        data-scroll-section
        className="pt-36 sm:pt-44 md:pt-56 lg:pt-72 px-6 md:px-16 sm:min-h-screen relative"
      >
        <div className="w-full h-full absolute inset-0 z-[-1]">
          <Image src={bgtImage} alt="pozadina" fill className="grayscale" />
        </div>

        <TitleWithBall title={t('socialMediaSection.title')} servicesPage />

        <AnimatedParagraph>
          <p className="mb-10 sm:mb-14 mt-10 sm:mt-24 max-w-[70rem] text-2xl sm:text-3xl lg:text-4xl font-semibold">
            {t('socialMediaSection.socialMediaDesc')}
          </p>
        </AnimatedParagraph>

        <AnimatedParagraph>
          <p className="text-base sm:text-xl lg:text-2xl max-w-[70rem]">
            {t('socialMediaSection.socialMediaDesc2')}
          </p>
        </AnimatedParagraph>
      </section>

      <section data-scroll-section className="relative my-24 sm:my-36 md:my-44">
        <PhoneScreensSlider sliderScreens={instaGallery} quality={30} />
      </section>

      <section
        data-scroll-section
        className="px-6 md:px-16 mb-24 sm:mb-36 md:mb-44"
      >
        <TitleWithBall
          title={t('contentCreation.title')}
          reverse
          servicesPage
        />

        <div className="ml-auto w-fit max-w-[75rem] text-right flex flex-col gap-10 sm:gap-14 mt-14 sm:mt-24">
          <AnimatedParagraph>
            <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl ">
              {t('contentCreation.services')}
            </p>
          </AnimatedParagraph>

          <AnimatedParagraph margin={-100}>
            <p className="text-base sm:text-xl lg:text-2xl">
              {t('contentCreation.contentCreationDesc')}
            </p>
          </AnimatedParagraph>
        </div>

        <ServicesGallery />
      </section>

      <section
        data-scroll-section
        className="px-6 md:px-16 mt-24 sm:mt-36 md:mt-44"
      >
        <TitleWithBall title={t('adsSection.title')} servicesPage />

        <div className="flex flex-col gap-10 sm:gap-14 max-w-[80rem] mt-14 sm:mt-24">
          <AnimatedParagraph>
            <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl ">
              {t('adsSection.text1')}
            </p>
          </AnimatedParagraph>

          <AnimatedParagraph margin={100}>
            <p className="text-base sm:text-xl lg:text-2xl">
              {t('adsSection.text2.preBold')}{' '}
              <b>{t('adsSection.text2.bold')}</b>{' '}
              {t('adsSection.text2.afterBold')}
            </p>
          </AnimatedParagraph>
        </div>

        <div className="mt-16 sm:my-20">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="max-w-full sm:max-w-[80%] lg:max-w-[50rem] h-full mx-auto"
            onLoadedData={() => locomotiveScroll.update()}
          >
            <source src="/transparent.mov" type="video/quicktime" />
            <source src="/ihi0z-fiyne.webm" type="video/webm" />
          </video>
        </div>
      </section>

      <section data-scroll-section className="mt-16 mb-24 sm:my-28">
        <div className="px-6 md:px-16">
          <TitleWithBall
            title={t('webDesignSection.title')}
            reverse
            servicesPage
          />
        </div>
        <AnimatedParagraph>
          <p
            className="font-semibold text-2xl sm:text-3xl lg:text-4xl max-w-[70rem] text-right ml-auto 
          px-6 md:px-16 mt-14 sm:mt-24 mb-14"
          >
            {t('webDesignSection.text3')}
          </p>
        </AnimatedParagraph>

        <AnimatedParagraph>
          <p className="mb-14 max-w-[70rem] px-6 md:px-16 text-base sm:text-xl lg:text-2xl text-right ml-auto">
            {t('webDesignSection.text4')}
          </p>
        </AnimatedParagraph>

        <ImgBigBall />
      </section>

      <section data-scroll-section className="mb-24 sm:mb-36 md:mb-44">
        <div className="px-6 md:px-16">
          <TitleWithBall title={t('influenserSection.title')} servicesPage />

          <div className="flex flex-col gap-10 sm:gap-24 max-w-[70rem] mb-24 mt-14 sm:mt-24">
            <AnimatedParagraph>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                {`${t('influenserSection.text1')}`}
              </p>
            </AnimatedParagraph>

            <AnimatedParagraph margin={100}>
              <p className="text-base sm:text-xl lg:text-2xl">
                {t('influenserSection.text2')}
              </p>
            </AnimatedParagraph>
          </div>
        </div>

        {/* <div className=" flex items-center">
          <InfluencerGallery />
        </div> */}
      </section>
    </PageLayout>
  )
}

export default Services
