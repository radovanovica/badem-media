import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import useWindowWidth from '@/hooks/UseWindowWidth'

import Logo from '/src/assets/icons/footer-logo.svg'
import MobileLogo from '/src/assets/icons/footer-logo-mobile.svg'

const FooterAnimatedText = () => {
  const width = useWindowWidth()

  const boxRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (width === 0) return
    if (!boxRef.current?.clientHeight && !boxRef.current?.clientHeight) return

    const wrapper = document.querySelector('.footer-wrapper')
    const boxes = document.querySelector('.footer-boxes')
    const allBoxes = document.querySelectorAll('.footer-box')

    const direction = 'left'
    const numBoxes = allBoxes.length
    const boxWidth = boxRef.current?.clientWidth
    const boxHeight = boxRef.current?.clientHeight
    let viewWidth = innerWidth
    const wrapWidth = numBoxes * boxWidth

    gsap.set([wrapper], { height: boxHeight, width: '100%' })
    gsap.set(boxes, { left: -boxWidth })

    const stringX = direction === 'left' ? `-=${wrapWidth}` : `+=${wrapWidth}`

    Array.from(allBoxes).forEach((box, i) => {
      gsap.set(box, {
        x: i * boxWidth,
        width: boxWidth,
        height: boxHeight
      })
    })

    const animation = gsap.to('.footer-box', {
      repeat: -1,
      duration: 100,
      x: stringX,
      ease: 'none',
      paused: true,
      modifiers: {
        x: function (x, target) {
          if (direction === 'left') {
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

    function resize() {
      animation.render(animation.time(), false, true)
    }

    window.addEventListener('resize', resize)

    // AUTOPLAY
    animation.play()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [boxRef, width])

  return (
    <div className="footer-wrapper relative overflow-hidden">
      <div className="footer-boxes relative">
        {width > 0 &&
          Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute footer-box pl-10"
              {...(i === 0 && { ref: boxRef })}
            >
              {width > 640 ? <Logo /> : <MobileLogo />}
            </div>
          ))}
      </div>
    </div>
  )
}

export default FooterAnimatedText
