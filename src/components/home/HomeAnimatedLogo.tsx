import Image, { StaticImageData } from 'next/image'
import React, { memo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
  time: number
  logos: { alt: string; logo: StaticImageData }[]
}

const HomeAnimatedLogo = ({ logos, time }: Props) => {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (logos.length === 1) return
    if (!time) return

    let intervalInitialized = false

    if (intervalInitialized) return

    const imagesNum = logos.length - 1

    const interval = setInterval(() => {
      const nextImg = activeImage + 1

      setActiveImage(nextImg > imagesNum ? 0 : nextImg)
    }, time * 1000)

    if (interval) intervalInitialized = true

    return () => clearInterval(interval)
  }, [time, logos.length, activeImage])

  const imgVariants = {
    visible: {
      y: '0%',
      transition: {
        delay: 0.3,
        type: 'spring',
        stiffness: 40
      }
    },
    hidden: {
      y: 300,
      transition: {
        type: 'spring',
        stiffness: 40
      }
    }
  }

  return (
    <div className="relative hover:scale-110 w-[60%] duration-500 flex items-center justify-center">
      {logos.map(({ alt, logo }) => (
        <motion.div
          key={logo.src}
          initial="hidden"
          animate={
            logos[activeImage].logo.src === logo.src ? 'visible' : 'hidden'
          }
          variants={imgVariants}
          className="max-w-[80%] sm:max-w-[60%] absolute flex items-center justify-center"
        >
          <Image src={logo} alt={alt} />
        </motion.div>
      ))}
    </div>
  )
}

export default memo(HomeAnimatedLogo)
