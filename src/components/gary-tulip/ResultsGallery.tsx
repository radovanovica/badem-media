import Image from 'next/image'
import React from 'react'

const ResultsGallery = () => {
  return (
    <div className="flex flex-col gap-4 mb-16 w-full container">
      <div className="flex gap-4 max-w-full">
        <Image
          src={
            'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/1.png'
          }
          alt="Results gallery image"
          width={206}
          height={366}
        />

        <Image
          src={
            'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/2.png'
          }
          alt="Results gallery image"
          width={206}
          height={366}
        />
        <Image
          src={
            'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/3.png'
          }
          alt="Results gallery image"
          width={739}
          height={360}
        />
      </div>
      <div className="flex gap-4 max-w-full">
        <Image
          src={
            'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/4.png'
          }
          alt="Results gallery image"
          width={360}
          height={360}
        />
        <Image
          src={
            'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/5.png'
          }
          alt="Results gallery image"
          width={361}
          height={360}
        />
        <Image
          src={
            'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/6.png'
          }
          alt="Results gallery image"
          width={171}
          height={360}
        />
        <Image
          src={
            'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/7.png'
          }
          alt="Results gallery image"
          width={171}
          height={360}
        />
      </div>
      <div className="flex gap-4 max-w-full">
        <Image
          src={
            'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/8.png'
          }
          alt="Results gallery image"
          width={739}
          height={360}
        />
        <Image
          src={
            'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/9.png'
          }
          alt="Results gallery image"
          width={360}
          height={360}
        />
      </div>
      <div className="flex gap-4 max-w-full">
        <div>
          <Image
            src={
              'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/10.png'
            }
            alt="Results gallery image"
            width={560}
            height={360}
            className="mb-4"
          />
          <Image
            src={
              'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/11.png'
            }
            alt="Results gallery image"
            width={560}
            height={360}
          />
        </div>
        <Image
          src={
            'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/12.png'
          }
          alt="Results gallery image"
          width={530}
          height={766}
        />
      </div>
      <div className="flex gap-4 max-w-full">
        <Image
          src={
            'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/13.png'
          }
          alt="Results gallery image"
          width={729}
          height={355}
        />
        <Image
          src={
            'https://badem-media-images.s3.eu-central-1.amazonaws.com/gary-tulip/results-gallery/14.png'
          }
          alt="Results gallery image"
          width={355}
          height={355}
        />
      </div>
    </div>
  )
}

export default ResultsGallery
