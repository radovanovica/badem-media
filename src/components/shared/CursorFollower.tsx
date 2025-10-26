import React, { ReactNode, useEffect, useState } from 'react'

import { Power2, gsap } from 'gsap'

import useMenuItemsPrev from '@/store/useCursorIcon'

import useWindowWidth from '@/hooks/UseWindowWidth'

import DragArrow from '/src/assets/icons/thin-arrow.svg'

type Props = {
  children: ReactNode
}

const CursorFollower = ({ children }: Props) => {
  const [sliderHover, setSliderHover] = useState(false)
  const [projectsFeaturedHover, setProjectsFeaturedSliderHover] =
    useState(false)
  const { cursorIcon, setCursorIcon } = useMenuItemsPrev()

  const width = useWindowWidth()

  useEffect(() => {
    const follower: HTMLDivElement = document.querySelector('.follower')!

    const nav = document.getElementById('main-header')

    if (!width) return
    if (!follower) return

    document.onmousemove = function (e: any) {
      switch (true) {
        case e.target.classList.contains('ham-menu-btn'):
          const targetEl: HTMLDivElement =
            document.querySelector('.ham-menu-btn')!

          gsap.to(follower, {
            duration: 0.5,
            width: 70,
            height: 70,
            left:
              window.innerWidth < 1536
                ? targetEl.offsetLeft - 17
                : targetEl.offsetLeft - 15,
            top:
              window.innerWidth < 1536
                ? targetEl.offsetTop
                : targetEl.offsetTop + 3,
            transform: 'translate(0, 0)',
            ease: Power2.easeOut
          })

          break
        case e.target.classList.contains('color-mode-switch'):
          const el: HTMLDivElement =
            document.querySelector('.color-mode-switch')!

          gsap.to(follower, {
            duration: 0.5,
            width: 60,
            height: 60,
            left: el.offsetLeft - 13,
            top: el.offsetTop - 14,
            transform: 'translate(0, 0)',
            ease: Power2.easeOut
          })

          break
        case e.target.classList.contains('menu-item'):
          gsap.to(follower, {
            duration: 0.7,
            width: 220,
            height: 220,
            left: e.clientX,
            top: e.clientY,
            ease: Power2.easeOut
          })
          break
        case e.target.classList.contains('contact-us-submit-btn'):
          gsap.to(follower, {
            duration: 0.7,
            width: 0,
            height: 0,
            left: e.clientX,
            top: e.clientY,
            ease: Power2.easeOut
          })
          break
        case e.target.classList.contains('home-page-slider-box') ||
          e.target.classList.contains('influencer-box') ||
          e.target.classList.contains('influencer-box-img-container'):
          setSliderHover(true)

          gsap.to(follower, {
            duration: 0.7,
            width: 90,
            height: 90,
            left: e.clientX,
            top: e.clientY,
            ease: Power2.easeOut
          })
          break
        case e.target.classList.contains('featured-projects'):
          setProjectsFeaturedSliderHover(true)

          gsap.to(follower, {
            duration: 0.7,
            width: 120,
            height: 120,
            left: e.clientX,
            top: e.clientY,
            ease: Power2.easeOut,
            border: '1px solid black',
            color: 'black',
            background: 'transparent'
          })
          break

        default:
          if (follower.textContent === 'DRAG') {
            follower.textContent = ''
          }

          setSliderHover(false)
          setProjectsFeaturedSliderHover(false)
          setCursorIcon(null)
          gsap.to(follower, {
            duration: 0.7,
            width: 10,
            height: 10,
            left: e.clientX,
            top: e.clientY,
            transform: 'translate(-50%, -50%)',
            ease: Power2.easeOut,
            border: 'none',
            background: 'white'
          })
      }
    }
  }, [width, setCursorIcon])

  return (
    <>
      <div className="follower rounded-full bg-white fixed z-40 pointer-events-none text-xl text-main-black hidden lg:flex overflow-hidden font-light">
        {cursorIcon && (
          <div className="self-center mx-auto scale-125">
            <div>{cursorIcon}</div>
          </div>
        )}
        {sliderHover && (
          <div className="self-center mx-auto flex justify-between">
            <DragArrow className="scale-[0.4] rotate-180" />
            <DragArrow className="scale-[0.4]" />
          </div>
        )}
        {projectsFeaturedHover && (
          <div className="self-center mx-auto flex justify-center whitespace-nowrap">
            view all
          </div>
        )}
      </div>
      {children}
    </>
  )
}

export default CursorFollower
