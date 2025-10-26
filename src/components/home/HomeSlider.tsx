import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/dist/Draggable'

import novak from '/public/images/Home Strana/novak.jpg'
import novakLogo from '/public/images/Logotipi/novak-logo.png'
import poligin from '/public/images/projects/poligin-featured-image.jpg'
import poliginLogo from '/public/images/Logotipi/Poligin - Logo.png'
import divcibar from '/public/images/projects/divcibar-featured-image.jpg'
import divcibarLogo from '/public/images/Logotipi/divcibar-logo.png'
import hero from '/public/images/Home Strana/hero.jpg'
import heroLogo from '/public/images/Logotipi/hero-logo.png'
import sitform from '/public/images/Home Strana/sitform.jpg'
import sitformLogo from '/public/images/Logotipi/sitform-logo.png'
import laScintilla from '/public/images/Home Strana/la-scintilla.jpg'
import laScintillaLogo from '/public/images/Logotipi/la-scintilla-logo.png'
import serbiaOpen from '/public/images/Home Strana/serbia-open.jpg'
import serbiaOpenLogo from '/public/images/Logotipi/serbia-open-logo.png'
import ozzy from '/public/images/Home Strana/ozzy.jpg'
import ozzyLogo from '/public/images/Logotipi/ozzy-logo.png'
import garyTulip from '/public/images/projects/gary-tulip-featured-img.jpg'
import garyTulipLogo from '/public/images/Logotipi/gary-tulip-logo.png'

import Logo from '/src/assets/icons/Logo-Badem Media.svg'

import LinkUnderline from '../shared/LinkUnderline'

import useLanguageRoute from '@/hooks/useLanguageRoute'
import { Routes } from '@/routes'

gsap.registerPlugin(Draggable)

const HomeSlider = () => {
  const { t } = useTranslation('common')
  const boxRef = useRef<HTMLDivElement | null>(null)

  const slideItems = [
    {
      alt: 'poligin',

      imgUrl: poligin,
      logo: poliginLogo,
      href: useLanguageRoute(Routes.POLIGIN)
    },
    {
      alt: 'divcibar',
      imgUrl: divcibar,
      logo: divcibarLogo,
      href: useLanguageRoute(Routes.DIVCIBAR)
    },
    {
      alt: 'serbiaOpen',
      imgUrl: serbiaOpen,
      logo: serbiaOpenLogo,
      href: useLanguageRoute(Routes.SERBIA_OPEN)
    },
    {
      alt: 'hero',
      imgUrl: hero,
      logo: heroLogo,
      href: useLanguageRoute(Routes.HERO)
    },
    {
      alt: 'novak',
      imgUrl: novak,
      logo: novakLogo,
      href: useLanguageRoute(Routes.NOVAK)
    },
    {
      alt: 'sitform',
      imgUrl: sitform,
      logo: sitformLogo,
      href: useLanguageRoute(Routes.SITFORM)
    },
    {
      alt: 'laScintilla',
      imgUrl: laScintilla,
      logo: laScintillaLogo,
      href: useLanguageRoute(Routes.LA_SCINTILLA)
    },
    {
      alt: 'ozzy',
      imgUrl: ozzy,
      logo: ozzyLogo,
      href: useLanguageRoute(Routes.OZZY)
    },
    {
      alt: 'Gary Tulip',
      imgUrl: garyTulip,
      logo: garyTulipLogo,
      href: useLanguageRoute(Routes.GARY_TULIP)
    }
  ]

  const h3Variants = {
    hidden: { x: -40 },
    visible: { x: 0, transition: { type: 'spring', stiffness: 100 } }
  }

  useEffect(() => {
    if (!boxRef.current?.clientHeight && !boxRef.current?.clientHeight) return

    const wrapper = document.querySelector('.wrapper')
    const boxes = document.querySelector('.boxes')
    const allBoxes = document.querySelectorAll('.box')
    const proxy = document.createElement('div')

    const direction = 'to-left' // "to-left" | "to-right"
    const directionVal = direction == 'to-left' ? -1 : 1 // -1 = "to-left" | 1 = "to-right"
    const numBoxes = 8
    const boxWidth = boxRef.current?.clientWidth
    const boxHeight = boxRef.current?.clientHeight
    let viewWidth = innerWidth
    const wrapWidth = numBoxes * boxWidth
    const wrapVal = gsap.utils.wrap(0, wrapWidth)
    const wrapProgress = gsap.utils.wrap(0, 1)

    gsap.set([wrapper], { height: boxHeight, width: '100%' })
    gsap.set(boxes, { left: -boxWidth })

    const stringX = directionVal == -1 ? `-=${wrapWidth}` : `+=${wrapWidth}`

    Array.from(allBoxes).forEach((box, i) => {
      gsap.set(box, {
        x: i * boxWidth,
        width: boxWidth,
        height: boxHeight
      })
    })

    const animation = gsap.to('.box', {
      repeat: -1,
      duration: 100,
      x: stringX,
      ease: 'none',
      paused: true,
      modifiers: {
        x: function (x, target) {
          if (directionVal == -1) {
            x = ((parseInt(x) - wrapWidth) % wrapWidth) + wrapWidth
          } else {
            x = parseInt(x) % wrapWidth
          }

          target.style.visibility =
            x - boxWidth > viewWidth ? 'visible' : 'visible'
          return `${x}px`
        }
      }
    })

    Draggable.create(proxy, {
      type: 'x',
      trigger: '.wrapper',
      inertia: true,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress
    })

    function updateProgress() {
      // @ts-ignore:next-line
      const dragValue = wrapVal(this.deltaX * directionVal) / wrapWidth

      const currentProgressAnim = animation.progress()

      const endProgress = wrapProgress(currentProgressAnim + dragValue)

      animation.progress(endProgress)
    }

    function resize() {
      animation.render(animation.time(), false, true)
    }

    window.addEventListener('resize', () =>
      animation.render(animation.time(), false, true)
    )

    const pause = () => {
      animation.pause()
    }

    const play = () => {
      animation.play()
    }

    wrapper?.addEventListener('mouseenter', () => animation.pause())
    wrapper?.addEventListener('mouseleave', () => animation.play())

    // AUTOPLAY
    animation.play()

    return () => {
      window.removeEventListener('resize', resize)
      wrapper?.removeEventListener('mouseenter', () => animation.pause())
      wrapper?.removeEventListener('mouseleave', () => animation.play())
    }
  }, [boxRef])

  return (
    <div className=" wrapper  w-full relative overflow-hidden">
      <div className="boxes relative">
        {slideItems.map(({ alt, imgUrl, logo, href }, i) => (
          <div
            {...(i === 3 && { ref: boxRef })}
            key={i}
            className="home-page-slider-box  box absolute pr-10 home-products-slider"
          >
            <Link href={href} className="relative block w-fit h-full">
              <Image
                src={imgUrl}
                alt={alt}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 34vw"
                style={{ minHeight: '100%' }}
              />

              <motion.div
                initial="hidden"
                whileHover="visible"
                variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                className="absolute inset-0 backdrop-blur-[5px] p-6 overflow-hidden flex flex-col"
              >
                <motion.div
                  variants={h3Variants}
                  className="font-light w-fit flex items-center gap-3"
                >
                  <Image
                    src={logo}
                    alt={`${alt} logo`}
                    width={150}
                    style={{ height: 'auto' }}
                  />
                </motion.div>

                <div className="self-center my-auto flex flex-col items-center gap-3">
                  <motion.svg
                    width={70}
                    height={70}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.circle
                      variants={{
                        hidden: { pathLength: 0 },
                        visible: {
                          pathLength: 1.2,
                          transition: { duration: 0.8, delay: 0.3 }
                        }
                      }}
                      width={70}
                      height={70}
                      cx="10"
                      cy="10"
                      r="5"
                      strokeWidth={10}
                      stroke="white"
                      fill="none"
                    />
                  </motion.svg>

                  <p className="group font-light relative overflow-hidden">
                    {`${t('readMore')}`}

                    <LinkUnderline />
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeSlider
