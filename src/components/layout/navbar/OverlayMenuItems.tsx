import { gsap } from 'gsap'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

type Props = {
  isOpen: boolean
  purpleBg?: boolean
  setIsTransition: () => void
}

const OverlayMenuItems = ({ isOpen, setIsTransition, purpleBg }: Props) => {
  const { theme } = useTheme()
  const [fillColor, useFillColor] = useState('#A57C5C')
  const [isInit, setIsInit] = useState(true)

  const ChangeTheme = () => {
    const lightBg = purpleBg ? '#662997' : '#A57C5C'
    useFillColor(theme === 'dark' ? '#000' : lightBg)
  }

  useEffect(() => {
    ChangeTheme()
  }, [theme])

  useEffect(() => {
    setIsInit(false)
    if (isInit) return

    const svg: HTMLDivElement = document.querySelector('.overlay-path-svg')!
    const path: HTMLDivElement = document.querySelector('.overlay__path')!
    const header: HTMLHeadElement = document.getElementById('main-header')!

    if (isOpen) {
      svg.style.display = 'block'

      gsap.timeline().to(header, { opacity: 0, duration: 0.2 })

      gsap
        .timeline()
        .set(path, {
          attr: {
            d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z'
          }
        })
        .to(path, {
          duration: 0.7,
          ease: 'power4.in',
          attr: {
            d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z'
          }
        })
        .to(path, {
          duration: 0.7,
          ease: 'power2',
          attr: {
            d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z'
          }
        })
        .set(path, {
          attr: {
            d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z'
          }
        })
        .to(path, {
          duration: 0.2,
          ease: 'power2.in',
          attr: {
            d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z'
          }
        })
        .to(path, {
          duration: 0.7,
          ease: 'power4',
          attr: {
            d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z'
          },
          onComplete: () => {
            svg.style.display = 'none'
          }
        })
        .to(header, {
          opacity: 1,
          duration: 0.1,
          onComplete: () => {
            setIsTransition()
          }
        })
    } else {
      svg.style.display = 'block'

      gsap.timeline().to(header, { opacity: 0, duration: 0.2 })

      gsap
        .timeline()
        .set(path, {
          attr: {
            d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z'
          }
        })
        .to(
          path,
          {
            duration: 0.7,
            ease: 'power4.in',
            attr: {
              d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z'
            }
          },
          '<'
        )
        .to(path, {
          duration: 0.2,
          ease: 'power2',
          attr: {
            d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z'
          }
        })
        .set(path, {
          attr: {
            d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z'
          }
        })
        .to(path, {
          duration: 0.7,
          ease: 'power2.in',
          attr: {
            d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z'
          }
        })
        .to(path, {
          duration: 0.2,
          ease: 'power4',
          attr: {
            d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z'
          },
          onComplete: () => {
            svg.style.display = 'none'
          }
        })
        .to(header, {
          opacity: 1,
          duration: 0.1,
          onComplete: () => {
            setIsTransition()
          }
        })
    }
  }, [isOpen])

  return (
    <svg
      data-scroll-sticky
      data-scroll-target="#app-wrapper"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill={fillColor}
      className="overlay-path-svg fixed z-[31] hidden"
    >
      <path
        className="overlay__path"
        vectorEffect="non-scaling-stroke"
        d="M 0 0 V 0 Q 50 0 100 0 V 0 z"
      />
    </svg>
  )
}

export default OverlayMenuItems
