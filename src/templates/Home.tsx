import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import PageLayout from '@/components/layout/PageLayout'
import HomeSlider from '@/components/home/HomeSlider'
import { useTranslation } from 'next-i18next'
import TitleWithBall from '@/components/shared/TitleWithBall'
import HomeServices from '@/components/home/HomeServices'
import HomeLogos from '@/components/home/HomeLogos'

import LinkWithUnderline from '@/components/shared/LinkWithUnderline'

import useLanguageRoute from '@/hooks/useLanguageRoute'
import { Routes } from '@/routes'

import HomeAnimatedTextRow from '@/components/home/HomeAnimatedTextRow'
import useWindowWidth from '@/hooks/UseWindowWidth'

// import MutedIcon from '@/assets/muted-icon.svg'
// import UnmutedIcon from '@/assets/unmuted-icon.svg'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  // const [isMuted, setIsMuted] = useState(true)

  const { t } = useTranslation()

  const width = useWindowWidth()

  useEffect(() => {
    if (!videoRef) return
    videoRef.current?.play()
  }, [videoRef])

  return (
    <PageLayout title={t('home:metaTitle')} desc={t('home:metaDesc')}>
      <section
        data-scroll-section
        className="h-screen w-screen relative overflow-hidden"
      >
        {width > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            className="h-screen w-screen relative"
          >
            {/* <div
              className="absolute right-10 bottom-10 cursor-pointer sm:hover:scale-110 z-10 duration-200 grid place-items-center"
              onClick={() => setIsMuted(state => !state)}
            >
              <div
                className={clsx('duration-300 absolute', {
                  'translate-x-0': isMuted,
                  'translate-x-[200%]': !isMuted
                })}
              >
                <MutedIcon />
              </div>

              <div
                className={clsx('duration-300 absolute', {
                  'translate-x-0': !isMuted,
                  'translate-x-[200%]': isMuted
                })}
              >
                <UnmutedIcon />
              </div>
            </div> */}

            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              {width > 640 ? (
                <>
                  <source
                    src="https://badem-media-videos.s3.eu-central-1.amazonaws.com/home-page/16x9+BADEM+Final_v2.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="https://badem-media-videos.s3.eu-central-1.amazonaws.com/home-page/16x9+BADEM+Final_v2.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://badem-media-videos.s3.eu-central-1.amazonaws.com/home-page/16x9-BADEM-Final_v2.ogg"
                    type="video/ogg"
                  />
                </>
              ) : (
                <>
                  <source
                    src="https://badem-media-videos.s3.eu-central-1.amazonaws.com/home-page/9x16+BADEM+FINAL_v2.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="https://badem-media-videos.s3.eu-central-1.amazonaws.com/home-page/9x16+BADEM+FINAL_v2.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://badem-media-videos.s3.eu-central-1.amazonaws.com/home-page/9x16-BADEM-FINAL_v2.ogg"
                    type="video/ogg"
                  />
                </>
              )}
            </video>
          </motion.div>
        )}
      </section>

      <section
        data-scroll-section
        className="sm:min-h-screen py-24 sm:py-36 md:py-44"
      >
        <div className="ml-0 lg:ml-44">
          <div className="px-6 sm:px-16 lg:px-0 lg:pr-16">
            <TitleWithBall title={t('home:projects')} />
          </div>
          <HomeSlider />
        </div>
      </section>

      <section
        data-scroll-section
        className="pb-24 sm:pb-36 md:pb-44 sm:py-0 sm:min-h-screen flex flex-col items-center justify-center px-6 lg:px-16"
      >
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {}
          }}
          viewport={{ once: true, margin: '0px 0px -150px 0px' }}
          className="mx-auto max-w-[61.25rem] font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center"
        >
          {(width > 1024
            ? t('home:animatedTextDesktop')
            : t('home:animatedTextMobile')
          )
            .split(/\r?\n/)
            .map((line, i) => {
              return (
                <HomeAnimatedTextRow
                  key={line}
                  text={line}
                  id={`el${i}`}
                  index={i}
                />
              )
            })}
        </motion.p>
        <LinkWithUnderline
          type="nextLink"
          href={useLanguageRoute(Routes.ABOUT)}
          text={`${t('moreAboutUs')}`}
          className="font-light text-xl sm:text-2xl mx-auto mt-12"
        />
      </section>

      <section data-scroll-section className="px-6 sm:px-16  xl:px-36">
        <TitleWithBall title={t('home:services')} reverse />
        <HomeServices />
      </section>

      <section data-scroll-section className="py-24 sm:py-36 md:py-44">
        <div className="px-6 sm:px-16  xl:px-36">
          <TitleWithBall title={t('home:clients')} />
        </div>

        <div className="sm:px-16 xl:px-36">
          <HomeLogos />
        </div>
      </section>
    </PageLayout>
  )
}
