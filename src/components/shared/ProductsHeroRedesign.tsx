import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import { IProductInfo, IProjectTags } from '@/utils/types/projectTypes'
import Link from 'next/link'

type Props = {
  tags: IProjectTags
  productInfo: IProductInfo
  logo: StaticImageData
  title: string
  instaHref?: string
}

const ProductsHeroRedesign = ({
  tags,
  productInfo,
  title,
  logo,
  instaHref
}: Props) => {
  return (
    <div className="relative z-[1]">
      <div className="flex gap-12 pt-40 sm:pt-48 mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40
          }}
        >
          <Image
            src={logo.src}
            alt="logo"
            width={logo.width}
            height={logo.height}
          />
        </motion.div>

        <div className="flex flex-wrap gap-4 max-w-xs items-center">
          {tags.map((tag, i) => (
            <div
              key={tag}
              className="rounded-full border-1 border-white px-3 py-1 w-fit h-fit text-xs sm:text-sm md:text-base overflow-hidden"
            >
              <motion.span
                initial={{ rotate: -15, y: -100 }}
                animate={{ rotate: 0, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 40,
                  delay: 0.4 + i * 0.1
                }}
                className="block"
              >
                {tag}
              </motion.span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4
          }}
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.5,
            ease: 'backIn',
            delay: 0.3
          }}
          className="h-1 w-full bg-white my-12"
        />

        <ul className="flex justify-between flex-wrap gap-5">
          {productInfo.map(({ key, value }, i) => (
            <motion.li
              key={key}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 40,
                delay: 0.1 + i * 0.1
              }}
              className=" text-base sm:text-xl md:text-2xl flex flex-col gap-2"
            >
              <span className="font-semibold">{key}:</span>
              {value === 'Instagram' && instaHref ? (
                <Link href={instaHref} className="font-thin hover:underline">
                  {value}
                </Link>
              ) : (
                <span className="font-thin">{value}</span>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductsHeroRedesign
