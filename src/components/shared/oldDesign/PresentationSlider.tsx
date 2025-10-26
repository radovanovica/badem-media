import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'

import ThinArrow from '/src/assets/icons/thin-arrow.svg'
import ThinArrowVideoFullWidth from '/src/assets/icons/mobile-video-full-width-arrow.svg'
import VideoCard from '../VideoCard'
import clsx from 'clsx'
import { IImages } from '@/utils/types/productsImagesType'
import useWindowWidth from '@/hooks/UseWindowWidth'

type Props = {
  itemsPerSlide?: number
  sliderItems?: IImages
  videoItems?: string[]
  sitform?: boolean
  mobileFullWidth?: boolean
}

const CustomRightArrow = ({ onClick, mobileFullWidth }: any) => {
  const width = useWindowWidth()

  return (
    <div
      onClick={() => onClick()}
      className={clsx(
        'absolute lg:fixed md:hover:scale-110 duration-300 cursor-pointer scale-75 md:scale-100 z-10 w-fit',
        {
          'right-2 sm:right-5 xl:right-14': !mobileFullWidth,
          'right-[20%] sm:right-5 xl:right-14': mobileFullWidth
        }
      )}
      style={{ bottom: mobileFullWidth && width < 640 && '-0rem' }}
    >
      {width > 0 && (
        <div>
          {mobileFullWidth && width < 640 ? (
            <ThinArrowVideoFullWidth />
          ) : (
            <ThinArrow />
          )}
        </div>
      )}
    </div>
  )
}

const CustomLeftArrow = ({ onClick, mobileFullWidth }: any) => {
  const width = useWindowWidth()

  return (
    <div
      onClick={() => onClick()}
      className={clsx(
        'absolute lg:fixed rotate-180 md:hover:scale-110 duration-300 cursor-pointer scale-75 md:scale-100 z-10 w-fit',
        {
          'left-2 sm:left-5 xl:left-14': !mobileFullWidth,
          'left-[20%] sm:left-5 xl:left-14': mobileFullWidth
        }
      )}
      style={{ bottom: mobileFullWidth && width < 640 && '-0rem' }}
    >
      {width > 0 && (
        <div>
          {mobileFullWidth && width < 640 ? (
            <ThinArrowVideoFullWidth />
          ) : (
            <ThinArrow />
          )}
        </div>
      )}
    </div>
  )
}

const PresentationSlider = ({
  sliderItems,
  videoItems,
  itemsPerSlide = 2,
  sitform,
  mobileFullWidth
}: Props) => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  useEffect(() => {
    return () => setPlayingVideo(null)
  }, [])

  console.log(sliderItems)

  return (
    <div className="relative flex items-center md:px-16 xl:px-36 w-full max-w-[77rem]  mx-auto">
      <Carousel
        responsive={{
          desktop: {
            breakpoint: { max: 4000, min: 1025 },
            items: itemsPerSlide,
            slidesToSlide: 1
          },

          mobile: {
            breakpoint: { max: 1024, min: 0 },
            items: 1,
            slidesToSlide: 1
          }
        }}
        infinite
        ssr
        swipeable={false}
        draggable={false}
        customRightArrow={
          <CustomRightArrow mobileFullWidth={mobileFullWidth} />
        }
        customLeftArrow={<CustomLeftArrow mobileFullWidth={mobileFullWidth} />}
        className={clsx(' h-full mx-auto w-full', {
          'max-w-[70rem] 2xl:max-w-[80rem]': !sitform,
          'max-w-[66.75rem]': sitform
        })}
      >
        {sliderItems &&
          sliderItems.map((data: StaticImageData, i: number) => (
            <div
              key={i}
              className="cursor-pointer relative h-full w-full flex justify-center px-14 sm:px-16 md:px-24 lg:px-3 max-h-[70vh]"
            >
              <Image
                src={data}
                alt="image"
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                width={700}
                height={500}
                priority
                style={{ minHeight: '100%', objectFit: 'cover' }}
                className="min-h-full"
              />
            </div>
          ))}

        {videoItems &&
          videoItems.length > 0 &&
          videoItems.map((url, i) => (
            <div
              key={url}
              className={clsx(' lg:px-3 h-full max-h-[80vh] sm:max-h-[70vh]', {
                'px-14 sm:px-16 md:px-24': !mobileFullWidth,
                'pb-20 sm:pb-0': mobileFullWidth
              })}
            >
              <VideoCard
                url={url}
                isPlay={playingVideo === url}
                setPlayingVideo={setPlayingVideo}
                index={i}
              />
            </div>
          ))}
      </Carousel>
    </div>
  )
}

export default PresentationSlider
