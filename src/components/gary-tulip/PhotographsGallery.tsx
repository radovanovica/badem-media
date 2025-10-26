import Image from 'next/image'
import React from 'react'

const PhotographsGallery = () => {
  return (
    <div className="flex flex-col gap-2 sm:gap-4 mb-24 sm:mb-48">
      <div className="flex gap-2 sm:gap-4">
        <div className="flex flex-col gap-2 sm:gap-4">
          <Image
            src={
              'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/fotografija/1.jpg'
            }
            alt="photography gallery image"
            width={541}
            height={541}
          />
          <Image
            src={
              'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/fotografija/3.jpg'
            }
            alt="photography gallery image"
            width={541}
            height={757}
          />
        </div>
        <div className="flex flex-col gap-2 sm:gap-4">
          <Image
            src={
              'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/fotografija/2.jpg'
            }
            alt="photography gallery image"
            width={541}
            height={757}
          />
          <Image
            src={
              'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/fotografija/4.jpg'
            }
            alt="photography gallery image"
            width={541}
            height={541}
          />
        </div>
      </div>
      <Image
        src={
          'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/fotografija/5.jpg'
        }
        alt="photography gallery image"
        width={1099}
        height={541}
      />
      <div className="flex gap-2 sm:gap-4">
        <div className="flex flex-col gap-2 sm:gap-4">
          <Image
            src={
              'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/fotografija/6.jpg'
            }
            alt="photography gallery image"
            width={541}
            height={541}
          />
          <Image
            src={
              'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/fotografija/8.jpg'
            }
            alt="photography gallery image"
            width={541}
            height={541}
          />
          <Image
            src={
              'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/fotografija/10.jpg'
            }
            alt="photography gallery image"
            width={541}
            height={757}
          />
        </div>
        <div className="flex flex-col gap-2 sm:gap-4">
          <Image
            src={
              'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/fotografija/7.jpg'
            }
            alt="photography gallery image"
            width={541}
            height={541}
          />
          <Image
            src={
              'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/fotografija/9.jpg'
            }
            alt="photography gallery image"
            width={541}
            height={747}
          />
          <Image
            src={
              'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/fotografija/11.jpg'
            }
            alt="photography gallery image"
            width={541}
            height={541}
          />
        </div>
      </div>
    </div>
  )
}

export default PhotographsGallery
