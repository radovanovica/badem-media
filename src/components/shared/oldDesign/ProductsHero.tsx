import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

import LinkWithUnderline from '../LinkWithUnderline'
import AnimatedParagraph from '../AnimatedParagraph'

type Props = {
  logo: StaticImageData
  pageDesc: string
  productInfo: { text: string }[]
  logoHeight: number
  logoWidth: number
}

const ProductsHero = ({
  logo,
  pageDesc,
  productInfo,
  logoHeight,
  logoWidth
}: Props) => {
  const { t } = useTranslation('common')

  return (
    <div className="px-6 md:px-16 pt-40 sm:pt-48 flex flex-col items-center gap-14 lg:gap-20 relative z-[1]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="w-[50%] sm:w-[70%] lg:w-auto flex justify-center mx-auto"
      >
        <Image src={logo} alt="logo" width={logoWidth} height={logoHeight} />
      </motion.div>

      <div className="flex flex-col md:flex-row lg:flex-col lg:items-end lg:absolute lg:right-16 lg:max-w-[18.75rem] xl:max-w-[20rem] w-full md:gap-5 lg:gap-0  justify-between">
        {productInfo.map(({ text }, i) => (
          <motion.p
            key={text}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 40,
              delay: 0.15 + i * 0.15
            }}
            viewport={{ once: true }}
            className="font-light text-base xl:text-lg text-center xl:text-right"
          >
            {t(text)}
          </motion.p>
        ))}
      </div>

      <AnimatedParagraph>
        <p
          className="max-w-[53rem] font-semibold text-2xl md:text-3xl text-center"
          dangerouslySetInnerHTML={{ __html: pageDesc }}
        />
      </AnimatedParagraph>

      <div className="w-full md:w-[35.625rem] flex gap-5 items-center">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ type: 'spring', stiffness: 20, delay: 1 }}
          className="h-1 bg-white"
        />
      </div>
    </div>
  )
}

export default ProductsHero
