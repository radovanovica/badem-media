import React, { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'

import ThemeToggle from './ThemeToggle'

import { Routes } from '@/routes'
import useLanguageRoute from '@/hooks/useLanguageRoute'
import { useRouter } from 'next/router'
import OverlayMenuItems from './OverlayMenuItems'

import HomeIcon from '/src/assets/icons/menu-items-prev/home.svg'
import ServicesIcon from '/src/assets/icons/menu-items-prev/Usluge.svg'
import ProjectsIcon from '/src/assets/icons/menu-items-prev/Projekti.svg'
import AboutIcon from '/src/assets/icons/menu-items-prev/O_nama.svg'
import BookIcon from '/src/assets/icons/menu-items-prev/book.svg'
import ContactIcon from '/src/assets/icons/menu-items-prev/Kontakt.svg'

import useMenuItemsPrev from '@/store/useCursorIcon'

type Props = {
  isOpen: boolean
  purpleBg?: boolean
  closeMenu: () => void
  continueScroll: () => void
  setIsTransition: () => void
}

const MenuItems = ({
  isOpen,
  closeMenu,
  setIsTransition,
  continueScroll,
  purpleBg
}: Props) => {
  const navRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { t } = useTranslation('common')
  const { setCursorIcon } = useMenuItemsPrev()

  const navItems = [
    {
      text: 'navItems.home',
      href: useLanguageRoute(Routes.INDEX),
      previewImg: <HomeIcon />
    },
    {
      text: 'navItems.services',
      href: useLanguageRoute(Routes.SERVICES),
      previewImg: <ServicesIcon />
    },
    {
      text: 'navItems.projects',
      href: useLanguageRoute(Routes.PROJECTS),
      previewImg: <ProjectsIcon />
    },
    {
      text: 'navItems.about',
      href: useLanguageRoute(Routes.ABOUT),
      previewImg: <AboutIcon />
    },
    {
      text: 'navItems.contact',
      href: useLanguageRoute(Routes.CONTACT),
      previewImg: <ContactIcon />
    },
    {
      text: 'e-book',
      href: useLanguageRoute(Routes.EBOOK),
      previewImg: <BookIcon />
    }
  ]

  return (
    <>
      <OverlayMenuItems
        purpleBg={purpleBg}
        isOpen={isOpen}
        setIsTransition={setIsTransition}
      />

      <motion.nav
        data-scroll-sticky
        data-scroll-target="#app-wrapper"
        ref={navRef}
        variants={{
          open: { display: 'grid', transition: { delay: 1.4 } },
          closed: { display: 'none', transition: { delay: 1 } }
        }}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        transition={{ type: 'spring', stiffness: 30 }}
        className={clsx(
          `fixed right-0 top-0 w-screen h-screen z-[30] transition-colors duration-500 grid-rows-[1fr_1fr] overflow-scroll`,
          {
            'bg-badem-brown dark:bg-main-black': !purpleBg,
            'bg-purple': purpleBg
          }
        )}
      >
        <div className="m-auto w-screen flex flex-col mt-32 md:mt-40 px-6 md:px-16">
          {navItems.map(({ text, href, previewImg }, i) => (
            <motion.div
              variants={{
                closed: {
                  y: 20,
                  opacity: 0,
                  transition: { duration: 0.3 }
                },
                open: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                    delay: 1.8 + i * 0.15
                  }
                }
              }}
              whileTap={{ scale: 0.95 }}
              key={text}
              className=" h-20 md:h-[6.4rem] flex items-center border-width relative"
            >
              <motion.div
                variants={{
                  closed: { width: '0%', transition: { duration: 0.8 } },
                  open: {
                    width: '100%',
                    transition: {
                      type: 'spring',
                      stiffness: 35,
                      delay: 1.8 + i * 0.1
                    }
                  }
                }}
                className="absolute w-full h-1 bg-white top-0 left-0 "
              />
              <motion.div
                variants={{
                  closed: { width: '0%', transition: { duration: 0.8 } },
                  open: {
                    width: '100%',
                    transition: {
                      type: 'spring',
                      stiffness: 35,
                      delay: 2.4
                    }
                  }
                }}
                className={clsx(
                  'absolute w-full h-1 bg-white bottom-0 left-0',
                  {
                    ' hidden': i !== navItems.length - 1,
                    ' block': i === navItems.length - 1
                  }
                )}
              />
              <Link
                href={href}
                onMouseOver={() => setCursorIcon(previewImg)}
                onClick={e => {
                  e.preventDefault()
                  continueScroll()

                  if (href === router.pathname) {
                    closeMenu()
                  } else {
                    router.push(href)
                  }
                }}
                className="menu-item group font-thin w-full h-full flex items-center gap-5 sm:gap-8 duration-200 relative overflow-hidden"
              >
                <div className="w-12 md:w-[4.375rem] h-12 md:h-[4.375rem] grid place-content-center border-1 border-white rounded-full text-3xl md:text-5xl group-hover:border-4 duration-300 box-content pointer-events-none">
                  {i + 1}
                </div>

                <div className="left-[4.5rem] md:left-24 absolute text-5xl md:text-7xl lowercase duration-[0.8s] group-hover:translate-y-[150%] rotate-0 group-hover:rotate-[8deg] pointer-events-none">
                  {`${t(text)}`}
                </div>

                <div className="left-[4.5rem] md:left-[6.3rem] absolute text-5xl md:text-7xl lowercase duration-[0.8s] translate-y-[-150%] group-hover:translate-y-0 rotate-[8deg] group-hover:rotate-0 font-light pointer-events-none">
                  {`${t(text)}`}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="block md:hidden mt-10 justify-self-center">
          <ThemeToggle />
        </div>
      </motion.nav>
    </>
  )
}

export default MenuItems
