import React from 'react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import Image from 'next/image'

import SerbiaOpenImg from '/public/images/projects/serbia-open-featured-image.jpg'
import DivcibareImg from '/public/images/projects/divcibar-featured-image.jpg'
import AnimatedParagraph from './AnimatedParagraph'
import { useRouter } from 'next/router'
import { Routes } from '@/routes'
import useLanguageRoute from '@/hooks/useLanguageRoute'

const tags = ['social media', 'content creation', 'photography']

const FeaturedProjects = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const projectsLink = useLanguageRoute(Routes.PROJECTS)

  return (
    <section
      onClick={() => router.push(projectsLink)}
      data-scroll-section
      className="featured-projects bg-white text-black py-12 sm:py-20 lg:py-48"
    >
      <div className="container pointer-events-none">
        <h2 className="pointer-events-none mb-12 sm:mb-20 font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl max-w-[36rem]">
          {t('featuredProjectsTitle')}
        </h2>

        <div className="flex gap-12 flex-col lg:flex-row featured-projects pointer-events-none">
          <div className="flex-1 relative featured-projects pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 40 }}
              viewport={{ once: true }}
              className="pointer-events-none"
            >
              <Image
                src={SerbiaOpenImg}
                alt="featured image"
                className="max-h-[38rem]"
                height={679}
                width={535}
                style={{ objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                duration: 0.5,
                ease: 'backIn',
                delay: 0.3
              }}
              viewport={{ once: true }}
              className="h-1 w-full mt-12 sm:mt-20 mb-5 sm:mb-7 bg-black pointer-events-none"
            />

            <AnimatedParagraph className="pointer-events-none">
              <h3 className="mb-5 sm:mb-7 font-medium text-3xl sm:text-4xl md:text-5xl pointer-events-none">
                Serbia Open
              </h3>
            </AnimatedParagraph>

            <div className="flex flex-wrap gap-4 pointer-events-none">
              {tags.map((tag, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 40,
                    delay: 0.1 + i * 0.1
                  }}
                  viewport={{ once: true, margin: '0px 0px -140px 0px' }}
                  key={tag}
                  className="rounded-full border-1 border-black py-1 px-3 text-xs sm:text-base"
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 featured-projects">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 40 }}
              viewport={{ once: true }}
              className="pointer-events-none"
            >
              <Image
                src={DivcibareImg}
                alt="featured image"
                className="max-h-[37rem] w-full"
                height={679}
                style={{ objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                duration: 0.5,
                ease: 'backIn',
                delay: 0.3
              }}
              viewport={{ once: true }}
              className="h-1 w-full mt-12 sm:mt-20 mb-5 sm:mb-7 bg-black pointer-events-none"
            />

            <AnimatedParagraph className="pointer-events-none">
              <h3 className="mb-5 sm:mb-7 font-medium text-3xl sm:text-4xl md:text-5xl pointer-events-none">
                Divšibare Ski Resort
              </h3>
            </AnimatedParagraph>

            <div className="flex flex-wrap gap-4 pointer-events-none">
              {tags.map((tag, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 40,
                    delay: 0.4 + i * 0.1
                  }}
                  viewport={{ once: true, margin: '0px 0px -140px 0px' }}
                  key={tag}
                  className="rounded-full border-1 border-black py-1 px-3 text-xs sm:text-base"
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
