import React, { useEffect, useRef } from 'react'

import influencer1 from '/public/images/Usluge/Influ/Dunja.png'
import influencer2 from '/public/images/Usluge/Influ/Iva.png'
import influencer3 from '/public/images/Usluge/Influ/Gleb.png'
import Image from 'next/image'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/dist/Draggable'

gsap.registerPlugin(Draggable)

const influencerList = [
  {
    img: influencer1,
    alt: 'slika',
    href: '/',
    name: 'Janja Jovanović',
    id: 1
  },
  {
    img: influencer2,
    alt: 'slika',
    href: '/',
    name: 'Iva Chu'
  },
  {
    img: influencer3,
    alt: 'slika',
    href: '/',
    name: 'Gleb'
  },
  {
    img: influencer1,
    alt: 'slika',
    href: '/',
    name: 'Gleb12'
  },
  {
    img: influencer2,
    alt: 'slika',
    href: '/',
    name: 'Gleb2'
  },
  {
    img: influencer3,
    alt: 'slika',
    href: '/',
    name: 'Gleb3'
  },
  {
    img: influencer1,
    alt: 'slika',
    href: '/',
    name: 'Gleb4'
  },
  {
    img: influencer2,
    alt: 'slika',
    href: '/',
    name: 'Gleb5'
  }
]

const InfluencerGallery = () => {
  const boxRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!boxRef.current?.clientHeight && !boxRef.current?.clientHeight) return

    const wrapper = document.querySelector('.influencer-wrapper')
    const boxes = document.querySelector('.influencer-boxes')
    const allBoxes = document.querySelectorAll('.influencer-box')
    const proxy = document.createElement('div')

    let direction = 'to-right' // "to-left" | "to-right"
    const directionVal = direction == 'to-left ' ? -1 : 1 // -1 = "to-left" | 1 = "to-right"
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

    const animation = gsap.to('.influencer-box', {
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
      trigger: '.influencer-wrapper',
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
    <div className="influencer-wrapper relative overflow-hidden">
      <div className="influencer-boxes relative">
        {influencerList.map(({ img, alt, href, name }, i) => (
          <div
            {...(i === 0 && { ref: boxRef })}
            key={i}
            className="influencer-box absolute flex flex-col gap-10 md:gap-16 items-center sm:min-w-[14rem] md:min-w-[18.4375rem] px-5 sm:px-10"
          >
            <div className="influencer-box-img-container w-32 sm:w-40 md:w-56 xl:w-72 relative">
              <Image
                src={img}
                alt={alt}
                style={{ width: '100%', height: '100%', borderRadius: '50%' }}
              />
            </div>
            <p className="text-xl sm:text-2xl md:text-4xl font-light">{name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfluencerGallery
