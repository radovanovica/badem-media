import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import clsx from 'clsx'
import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'

import ThinArrow from '/src/assets/icons/thin-arrow.svg'

const CustomLeftArrow = ({ onClick, isInSlide, prevSlide }: any) => {
  return (
    <div className="fixed left-[20%] md:left-5 lg:left-10 xl:left-14 rotate-180 hover:scale-90 md:hover:scale-110 duration-300 cursor-pointer scale-75 md:scale-100 z-10">
      <ThinArrow
        onClick={() => {
          if (isInSlide) return
          onClick()
          prevSlide()
        }}
        className="cursor-pointer"
      />
    </div>
  )
}

const CustomRightArrow = ({ onClick, isInSlide, nextSlide }: any) => {
  return (
    <div className="fixed right-[20%] md:right-5 lg:right-10 xl:right-14 hover:scale-90 md:hover:scale-110 duration-300 xl:cursor-pointer scale-75 md:scale-100 z-10">
      <ThinArrow
        onClick={() => {
          if (isInSlide) return
          onClick()
          nextSlide()
        }}
        className="cursor-pointer"
      />
    </div>
  )
}

type Props = {
  quality?: number
  sliderScreens: {
    image: StaticImageData
    alt: string
  }[]
}

const PhoneScreensSlider = ({ quality = 70, sliderScreens }: Props) => {
  const [curSlide, setCurSlide] = useState(1)
  const [isInSlide, setIsInSlide] = useState(false)

  const nextSlide = () => {
    const nextSlide = curSlide + 1

    nextSlide > sliderScreens.length - 1
      ? setCurSlide(0)
      : setCurSlide(nextSlide)
  }

  const prevSlide = () => {
    const prevSlide = curSlide - 1

    setCurSlide(prevSlide < 0 ? sliderScreens.length - 1 : prevSlide)
  }

  return (
    <div className="relative px-0 md:px-16 xl:px-36 md:items-center w-full flex">
      <Carousel
        responsive={{
          desktop: {
            breakpoint: { max: 4000, min: 0 },
            items: 3,
            slidesToSlide: 1
          }
        }}
        infinite
        ssr
        draggable={false}
        swipeable={false}
        customRightArrow={
          <CustomRightArrow isInSlide={isInSlide} nextSlide={nextSlide} />
        }
        customLeftArrow={
          <CustomLeftArrow isInSlide={isInSlide} prevSlide={prevSlide} />
        }
        beforeChange={() => setIsInSlide(true)}
        afterChange={() => setIsInSlide(false)}
        className="min-w-[160%] md:min-w-full w-full h-full translate-x-[-18.7%] md:translate-x-['0%'] 
        py-7 sm:py-14"
      >
        {sliderScreens.map(({ image, alt }, i) => (
          <div key={i} className="px-5 lg:px-0 h-full">
            <div
              className={clsx(
                'duration-500 w-full h-full flex items-center justify-center relative',
                {
                  'scale-[1.15] hover:scale-[1.20]': curSlide === i,
                  'hover:scale-110 opacity-30 md:opacity-100': curSlide !== i
                }
              )}
            >
              <Image
                src={image}
                alt={alt}
                width={257}
                height={577}
                quality={quality}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default PhoneScreensSlider
