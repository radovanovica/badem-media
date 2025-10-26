import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
  image: StaticImageData
  opacity?: number
}

const ProductsBgImage = ({ image, opacity }: Props) => {
  return (
    <div className="absolute inset-0 z-0" style={{ opacity }}>
      <Image
        src={image}
        alt="background image"
        sizes="(max-width: 0px) 100vw"
        quality={50}
        style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
        priority
      />
    </div>
  )
}

export default ProductsBgImage
