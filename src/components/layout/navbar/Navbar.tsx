import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Logo from '@/components/shared/Logo'
import LanguageSwitch from '@/components/shared/LanguageSwitch'

import MenuBtn from './MenuBtn'
import MenuItems from './MenuItems'
import ThemeToggle from './ThemeToggle'

import UseLocoScroll from '@/store/useLocoScroll'

type Props = {
  purpleBg?: boolean
}

const Navbar = ({ purpleBg }: Props) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [transition, isTransition] = useState(false)
  const { locomotiveScroll } = UseLocoScroll()

  const [isScroll, setIsScroll] = useState(false)
  const [isScrollTopOfPage, setIsScrollTopOfPage] = useState(true)

  useEffect(() => {
    if (window.innerWidth < 1024) return

    if (Object.keys(locomotiveScroll).length === 0) return

    let currPageOffset = 0
    let timeoutSet: NodeJS.Timeout | null = null

    locomotiveScroll.on('scroll', (e: any) => {
      const pageOffset = e.scroll.y

      setIsScroll(pageOffset < currPageOffset || pageOffset === 0)

      setIsScrollTopOfPage(pageOffset === 0)

      if (pageOffset > 0 && pageOffset < currPageOffset) {
        timeoutSet && clearTimeout(timeoutSet)
        timeoutSet = null

        const timeout = setTimeout(() => {
          setIsScroll(false)
        }, 1000)
        timeoutSet = timeout
      } else if (
        pageOffset === 0 ||
        (pageOffset > currPageOffset && timeoutSet)
      ) {
        if (timeoutSet) {
          clearTimeout(timeoutSet)
          timeoutSet = null
        }
      }

      currPageOffset = pageOffset
    })
  }, [locomotiveScroll])

  useEffect(() => {
    if (window.innerWidth > 1024) return

    let currPageOffset = 0
    let timeoutSet: NodeJS.Timeout | null = null

    window.addEventListener('scroll', () => {
      const pageOffset = window.scrollY

      setIsScroll(pageOffset < currPageOffset || pageOffset === 0)

      setIsScrollTopOfPage(pageOffset === 0)

      if (pageOffset > 0 && pageOffset < currPageOffset) {
        timeoutSet && clearTimeout(timeoutSet)
        timeoutSet = null

        const timeout = setTimeout(() => {
          setIsScroll(false)
        }, 1000)
        timeoutSet = timeout
      } else if (
        pageOffset === 0 ||
        (pageOffset > currPageOffset && timeoutSet)
      ) {
        if (timeoutSet) {
          clearTimeout(timeoutSet)
          timeoutSet = null
        }
      }

      currPageOffset = pageOffset
    })
  }, [])

  return (
    <>
      <div
        data-scroll-sticky
        data-scroll-target="#app-wrapper"
        className={clsx(
          'fixed left-0 right-0 top-0 h-20 md:h-[8rem] z-[39] transition-all duration-500',
          {
            'translate-y-[-130%]': !isScrollTopOfPage && !isScroll && !isOpen,
            ' h-[6rem] mt-0':
              !isScrollTopOfPage && !isScrollTopOfPage && isScroll && !isOpen,
            'backdrop-blur-lg': !isScrollTopOfPage && !isOpen,
            'backdrop-blur-0': isScrollTopOfPage || isOpen
            // 'dark:bg-main-black bg-badem-brown delay-[1.6s]': isOpen
          }
        )}
      >
        <motion.div
          initial="visible"
          animate={
            isOpen || (!isScrollTopOfPage && !isScroll) || isScrollTopOfPage
              ? 'hidden'
              : 'visible'
          }
          variants={{
            hidden: {
              width: '0%',
              transition: { type: 'tween', duration: 0.5 }
            },
            visible: {
              width: '100%',
              transition: { type: 'tween', duration: 1 }
            }
          }}
          className="absolute left-0 bottom-0 h-1 w-full bg-white"
        />
      </div>
      <header
        data-scroll-sticky
        data-scroll-target="#app-wrapper"
        id="main-header"
        className={clsx(
          'fixed left-0 right-0 top-0 h-20 md:h-[8rem] transition-all duration-500 z-[41]',
          {
            'translate-y-[-130%]': !isScrollTopOfPage && !isScroll && !isOpen,
            ' h-[6rem] mt-0':
              !isScrollTopOfPage && !isScrollTopOfPage && isScroll && !isOpen
          }
        )}
      >
        <div className="flex justify-between items-center h-full px-6 md:px-14 xl:px-16 relative">
          <div
            className="relative flex z-[11] items-center"
            onClick={() => {
              locomotiveScroll.start()
              if ('/' !== router.pathname) return
              isOpen && setIsOpen(false)
            }}
          >
            <Logo />
          </div>
          <div className="h-fit flex flex-row gap-3 sm:gap-5 md:gap-10 items-center">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            <LanguageSwitch />

            <MenuBtn
              isOpen={isOpen}
              setIsOpen={() => {
                if (transition) return

                if (!isOpen) {
                  setIsOpen(true)
                  isTransition(true)
                  locomotiveScroll.stop()
                  document.querySelector('body')?.classList.toggle('scroll-of')
                } else {
                  setIsOpen(false)
                  isTransition(true)
                  locomotiveScroll.start()
                  document.querySelector('body')?.classList.toggle('scroll-of')
                }
              }}
            />
          </div>
        </div>
      </header>
      <MenuItems
        purpleBg={purpleBg}
        isOpen={isOpen}
        closeMenu={() => {
          setIsOpen(false)
          isTransition(true)
        }}
        continueScroll={() => {
          locomotiveScroll.start()
          document.querySelector('body')?.classList.remove('scroll-of')
        }}
        setIsTransition={() => isTransition(false)}
      />
    </>
  )
}

export default Navbar
