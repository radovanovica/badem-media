import { useInView } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import macImg from '/public/images/Usluge/Web/MacBook-Air.png'
import useWindowWidth from '@/hooks/UseWindowWidth'

const ImgBigBall = () => {
  const imgBallContainer = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(imgBallContainer, { once: true })

  const width = useWindowWidth()

  return (
    <div
      ref={imgBallContainer}
      className="flex flex-col lg:flex-row justify-center lg:justify-between items-end lg:items-center lg:py-20 w-full overflow-hidden relative h-[22rem] sm:h-[40rem] lg:h-fit "
    >
      <motion.div
        data-scroll
        initial={{ x: '-100%', y: width > 1024 ? '0%' : '-50%' }}
        animate={
          isInView && {
            x: width > 1024 ? '-15%' : '-50%',
            y: width > 1024 ? '0%' : '-50%'
          }
        }
        transition={{ ease: 'anticipate', duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute w-[85%] lg:w-full lg:relative top-[50%] self-center lg:top-auto left-[50%] lg:left-auto z-[1]"
      >
        <Image src={macImg} alt="macbook" quality={100} />
      </motion.div>

      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '50%' }}
        transition={{ type: 'spring', stiffness: 70, delay: 0.8 }}
        viewport={{ once: true }}
        className=""
      >
        <div className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[30.625rem] lg:h-[30.625rem] rounded-full bg-white" />
      </motion.div>
    </div>
  )
}

export default ImgBigBall
