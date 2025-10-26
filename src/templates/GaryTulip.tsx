import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { motion, useInView } from 'framer-motion'

import UseLocoScroll from '@/store/useLocoScroll'

import PageLayout from '@/components/layout/PageLayout'
import ProductsHeroRedesign from '@/components/shared/ProductsHeroRedesign'
import ProductsBgImage from '@/components/shared/ProductsBgImage'
import ProjectsSectionTitle from '@/components/shared/ProjectsSectionTitle'

import { IProductInfo, IProjectTags } from '@/utils/types/projectTypes'

import GaryTulipLogo from '/public/images/Logotipi/gary-tulip-logo.png'
import BgImage from '/public/images/Klijenti/gary tulip/gary-tulip-img.png'

import FeaturedProjects from '@/components/shared/FeaturedProjects'
import ProjectsReadMoreBtn from '@/components/shared/ProjectsReadMoreBtn'
import PhotographsGallery from '@/components/gary-tulip/PhotographsGallery'
import PresentationSlider from '@/components/shared/PresentationSliderRedesign'
import AnimatedParagraph from '@/components/shared/AnimatedParagraph'
import AnimatedIMagesWrap from '@/components/shared/AnimatedIMagesWrap'

export type IGaryTulip = {
  instagramPostsImages: string[]
  instagramStoriesImages: string[]
  reels: string[]
}

const GaryTulip = ({
  instagramPostsImages,
  instagramStoriesImages,
  reels
}: IGaryTulip) => {
  const { t } = useTranslation('garyTulip')
  const { locomotiveScroll } = UseLocoScroll()

  const viewportRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(viewportRef, { once: true })

  useEffect(() => {
    if (!isInView) return

    locomotiveScroll.update()
  }, [isInView, locomotiveScroll])

  const tags: IProjectTags = t('tags', { returnObjects: true })
  const projectInfo: IProductInfo = t('projectInfo', {
    returnObjects: true
  })

  const section1Content: { text: string; title: string }[] = t(
    'section1.content',
    { returnObjects: true }
  )

  return (
    <PageLayout title={t('garyTulip:metaTitle')} desc={t('garyTulip:metaDesc')}>
      <section
        data-scroll-section
        className="min-h-screen pb-24 sm:pb-48 lg:pb-72 relative "
      >
        <ProductsBgImage image={BgImage} opacity={0.6} />
        <div className="container relative z-[1]">
          <ProductsHeroRedesign
            title={t('title')}
            tags={tags}
            productInfo={projectInfo}
            logo={GaryTulipLogo}
            instaHref="https://www.instagram.com/garytulip/"
          />

          <AnimatedIMagesWrap className="mt-14 sm:mt-32">
            <video
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => locomotiveScroll.update()}
              className="w-full h-full object-cover"
            >
              <source
                src="https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/Gary+Tulip+WEBSITE+video.mp4"
                type="video/mp4"
              />
            </video>
          </AnimatedIMagesWrap>

          <div className="flex mt-36 sm:mt-80 flex-col md:flex-row justify-between relative gap-10">
            <ProjectsSectionTitle number="01" title={t('section1.title')} />

            <AnimatedParagraph>
              <p
                dangerouslySetInnerHTML={{ __html: t('section1.desc') }}
                className="max-w-[38rem] text-text-muted "
              />
            </AnimatedParagraph>
          </div>
        </div>
      </section>

      <section data-scroll-section className="pb-36 sm:pb-80 relative">
        <motion.p
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40
          }}
          viewport={{ once: true }}
          className="hidden md:block text-outline text-[40rem] absolute z-0 -right-10 top-1/2 -translate-y-1/2"
        >
          01
        </motion.p>
        <div className="container">
          <div className="flex flex-col gap-24 sm:gap-40 max-w-[45rem]">
            {section1Content.map(({ text, title }) => (
              <AnimatedParagraph key={title}>
                <div>
                  <h3 className="mb-7 md:text-5xl font-semibold text-3xl sm:text-4xl">
                    {title}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{ __html: text }}
                    className="text-text-muted"
                  />
                </div>
              </AnimatedParagraph>
            ))}

            <div>
              <AnimatedParagraph>
                <h3 className="mb-7 md:text-5xl font-semibold text-3xl sm:text-4xl">
                  {t('section1.ourRole')}
                </h3>
              </AnimatedParagraph>
              <div className="flex items-center gap-4 flex-wrap">
                {tags.map((tag, i) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 40,
                      delay: 0.1 + i * 0.1
                    }}
                    viewport={{ once: true }}
                    className="rounded-full border-1 border-white px-3 py-1 w-fit h-fit text-xs sm:text-base"
                  >
                    {tag}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-scroll-section className="pb-24 sm:pb-48 lg:pb-72 relative">
        <div className="container">
          <div className="flex justify-between relative gap-10 flex-col md:flex-row">
            <ProjectsSectionTitle number="02" title={t('section2.title')} />

            <AnimatedParagraph>
              <p
                dangerouslySetInnerHTML={{ __html: t('section2.desc') }}
                className="max-w-[38rem] text-text-muted"
              />
            </AnimatedParagraph>
          </div>
          <div className="pt-24 sm:pt-48 pb-16">
            <AnimatedParagraph>
              <h3 className="mb-7 font-semibold md:text-5xl text-3xl sm:text-4xl ">
                {t('section2.content.title')}
              </h3>
            </AnimatedParagraph>

            <div className="flex justify-between flex-col md:flex-row gap-7 md:gap-16 text-text-muted">
              <AnimatedParagraph>
                <p>{t('section2.content.text1')}</p>
              </AnimatedParagraph>
              <AnimatedParagraph>
                <p>{t('section2.content.text2')}</p>
              </AnimatedParagraph>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <motion.p
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 40
            }}
            viewport={{ once: true }}
            className="hidden md:block text-outline text-[40rem] absolute z-0 -right-10 "
          >
            02
          </motion.p>
          <div className="container pb-24 sm:pb-48 relative z-[1]">
            <Image
              src={
                'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/feed/feed+1.jpg'
              }
              alt="gallery placeholder"
              width={1100}
              height={1831}
              quality={100}
              priority
            />
          </div>
        </div>

        <div className="container">
          <AnimatedParagraph>
            <h3 className="mb-10 sm:mb-16 md:text-5xl text-3xl sm:text-4xl font-semibold ">
              {t('section2.content.title2')}
            </h3>
          </AnimatedParagraph>

          <PhotographsGallery />

          <AnimatedParagraph>
            <h3 className="mb-10 sm:mb-16 md:text-5xl text-3xl sm:text-4xl font-semibold ">
              {t('section2.content.title3')}
            </h3>
          </AnimatedParagraph>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-10 sm:mb-16">
            {instagramPostsImages &&
              instagramPostsImages.map(img => (
                <Image
                  key={img}
                  src={img}
                  width={500}
                  height={500}
                  alt="gallery image w-full"
                  style={{ objectFit: 'cover' }}
                />
              ))}
          </div>

          <ProjectsReadMoreBtn
            href="https://www.instagram.com/garytulip/"
            text="More posts"
            className="mb-24 sm:mb-48"
          />
          <AnimatedParagraph>
            <h3 className="mb-7 md:text-5xl font-semibold text-3xl sm:text-4xl ">
              {t('section2.content.title4')}
            </h3>
          </AnimatedParagraph>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-10 sm:mb-16">
            {instagramStoriesImages &&
              instagramStoriesImages.map(img => (
                <Image
                  key={img}
                  src={img}
                  width={500}
                  height={500}
                  alt="gallery image w-full"
                  style={{ objectFit: 'cover' }}
                />
              ))}
          </div>

          <ProjectsReadMoreBtn
            href="https://www.instagram.com/garytulip/"
            text="More stories"
            className="mb-24 sm:mb-48"
          />

          <AnimatedParagraph>
            <h3 className="mb-10 sm:mb-16 md:text-5xl font-semibold text-3xl sm:text-4xl ">
              {t('section2.content.title5')}
            </h3>
          </AnimatedParagraph>

          <PresentationSlider videoItems={reels} itemsPerSlide={3} />

          <ProjectsReadMoreBtn
            href="https://www.instagram.com/garytulip/"
            text="More reels"
            className=" mt-10 sm:mt-16"
          />
        </div>
      </section>

      <section data-scroll-section className="pb-36 sm:pb-60 lg:pb-80 relative">
        <motion.p
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40
          }}
          viewport={{ once: true }}
          className="hidden md:block text-outline text-[40rem] absolute z-0 -right-10 top-96"
        >
          03
        </motion.p>
        <div className="container relative z-[1]">
          <div className="flex justify-between relative gap-10 mb-24 sm:mb-48 lg:mb-72 flex-col md:flex-row">
            <ProjectsSectionTitle number="03" title={t('section3.title')} />

            <AnimatedParagraph>
              <p
                dangerouslySetInnerHTML={{ __html: t('section3.desc') }}
                className="max-w-[38rem] text-text-muted"
              />
            </AnimatedParagraph>
          </div>

          <Image
            src={
              'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/Frame+219.png'
            }
            alt="Results gallery image"
            width={1100}
            height={2216}
            priority
            quality={100}
          />
        </div>
      </section>

      <section
        ref={viewportRef}
        data-scroll-section
        className="pb-36 sm:pb-60 lg:pb-80"
      >
        <div className="container">
          <div className="flex justify-between relative gap-10 flex-col md:flex-row">
            <ProjectsSectionTitle number="04" title={t('section4.title')} />

            <div className="max-w-[38rem]">
              <AnimatedParagraph>
                <p
                  dangerouslySetInnerHTML={{ __html: t('section4.desc') }}
                  className=" text-text-muted italic"
                />
              </AnimatedParagraph>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{
                  duration: 0.5,
                  ease: 'backIn',
                  delay: 0.3
                }}
                viewport={{ once: true }}
                className="w-full bg-white h-1 my-7"
              />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.4
                }}
                viewport={{ once: true }}
              >
                <p>Jovan Zdravković</p>
                <p className="text-[1.75rem] font-semibold mt-2">
                  Gary Tulip, CEO
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjects />
    </PageLayout>
  )
}

export default GaryTulip
