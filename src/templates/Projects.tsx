import React from 'react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

import PageLayout from '@/components/layout/PageLayout'
import TitleWithBall from '@/components/shared/TitleWithBall'

import serbiaOpen from '/public/images/projects/serbia-open-featured-image.jpg'
import laScintilla from '/public/images/projects/la-scintilla-featured-image.jpg'
import novak from '/public/images/projects/novak-featured-image.jpg'
import sitform from '/public/images/projects/sitform-featured-image.jpg'
import divcibar from '/public/images/projects/divcibar-featured-image.jpg'
import poligin from '/public/images/projects/poligin-featured-image.jpg'
import hero from '/public/images/projects/hero-featured-image.jpg'
import ozzy from '/public/images/projects/ozzy-featured-image.jpg'
import garyTulip from '/public/images/projects/gary-tulip-featured-img.jpg'

import serbiaOpenLogo from '/public/images/Logotipi/serbia-open-logo.png'
import laScintillaLogo from '/public/images/Logotipi/la-scintilla-logo.png'
import novakLogo from '/public/images/Logotipi/novak-logo.png'
import sitformLogo from '/public/images/Logotipi/sitform-logo.png'
import divcibarLogo from '/public/images/Logotipi/divcibar-logo.png'
import answearLogo from '/public/images/Logotipi/Poligin - Logo.png'
import heroLogo from '/public/images/Logotipi/hero-logo.png'
import ozzyLogo from '/public/images/Logotipi/ozzy-logo.png'
import garyTulipLogo from '/public/images/Logotipi/gary-tulip-logo.png'

import useLanguageRoute from '@/hooks/useLanguageRoute'
import { Routes } from '@/routes'
import ProjectCard from '@/components/shared/ProjectCard'
import AnimatedParagraph from '@/components/shared/AnimatedParagraph'

const Projects = () => {
  const { t } = useTranslation('projects')

  const projectsList = [
    {
      category: 'Content | Social Media',
      name: 'Serbia Open',
      image: serbiaOpen,
      href: useLanguageRoute(Routes.SERBIA_OPEN),
      logo: serbiaOpenLogo
    },
    {
      category: 'Social Media',
      name: 'La Scintilla',
      image: laScintilla,
      href: useLanguageRoute(Routes.LA_SCINTILLA),
      logo: laScintillaLogo
    },
    {
      category: 'Content | Social Media',
      name: 'Novak Tennis Centar',
      image: novak,
      href: useLanguageRoute(Routes.NOVAK),
      logo: novakLogo
    },
    {
      category: 'Moodboard | Branding | Social media',
      name: 'SitForm',
      image: sitform,
      href: useLanguageRoute(Routes.SITFORM),
      logo: sitformLogo
    },
    {
      category: 'Content | Social Media',
      name: 'Divčibar',
      image: divcibar,
      href: useLanguageRoute(Routes.DIVCIBAR),
      logo: divcibarLogo
    },
    {
      category: 'Content | Social Media',
      name: 'Poligin',
      image: poligin,
      href: useLanguageRoute(Routes.POLIGIN),
      logo: answearLogo
    },
    {
      category: 'Content | Social Media',
      name: 'Hero',
      image: hero,
      href: useLanguageRoute(Routes.HERO),
      logo: heroLogo
    },
    {
      category: 'Content | Social Media',
      name: 'Ozzy Shop',
      image: ozzy,
      href: useLanguageRoute(Routes.OZZY),
      logo: ozzyLogo
    },
    {
      category: 'Content | Social Media',
      name: 'Gary Tulip',
      image: garyTulip,
      href: useLanguageRoute(Routes.GARY_TULIP),
      logo: garyTulipLogo,
      newProject: true
    }
  ]

  return (
    <PageLayout title={t('projects:metaTitle')} desc={t('projects:metaDesc')}>
      <section
        data-scroll-section
        className="h-full pt-40 pb-20 md:py-56 px-6 lg:px-16"
      >
        <TitleWithBall title={t('title')} servicesPage />

        <AnimatedParagraph>
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mt-14 sm:mt-24">
            {t('text1')}
          </h2>
        </AnimatedParagraph>
      </section>

      <section data-scroll-section className="pb-20 md:pb-56 px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16 max-w-[85rem] mx-auto">
          {projectsList.map(projectItem => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'tween', duration: 0.5 }}
              viewport={{ once: true }}
              key={projectItem.href}
            >
              <ProjectCard {...projectItem} />
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}

export default Projects
