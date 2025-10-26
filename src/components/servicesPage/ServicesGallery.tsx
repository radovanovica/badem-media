import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import woodenChair from '/public/images/Usluge/Content/wooden-chair.png'
import humanStatue from '/public/images/Usluge/Content/human-statue.png'
import redChairZoom from '/public/images/Usluge/Content/red-chair.png'
import redChair from '/public/images/Usluge/Content/red-chair-2.png'
import greenChair from '/public/images/Usluge/Content/green-chair.png'
import boldAndChic from '/public/images/Usluge/Content/SitForm_45.jpg'

const ServicesGallery = () => {
  return (
    <>
      <div className="w-full mx-auto relative mt-14 sm:mt-32">
        <div className="grid grid-cols-[30%_70%] sm:grid-cols-[20%_1fr_20%] h-[25rem] lg:h-[40rem] gap-x-6 md:gap-x-8 2xl:gap-x-14 gap-y-5 pr-6 sm:pr-0">
          <div className="relative w-full h-full col-start-1 col-end-2">
            <motion.div
              initial={{ width: '50%' }}
              whileInView={{ width: '0%' }}
              transition={{ type: 'spring', stiffness: 20 }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 h-full dark:bg-main-black bg-badem-brown  z-10"
            />
            <motion.div
              initial={{ width: '50%' }}
              whileInView={{ width: '0%' }}
              transition={{ type: 'spring', stiffness: 20 }}
              viewport={{ once: true }}
              className="absolute right-0 top-0 h-full dark:bg-main-black bg-badem-brown  z-10"
            />

            <Image
              src={redChairZoom}
              alt="crvena stolica"
              quality={100}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="relative w-full h-full col-start-2 col-end-3">
            <motion.div
              initial={{ width: '100%' }}
              whileInView={{ width: '0%' }}
              transition={{ type: 'spring', stiffness: 30 }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 h-full dark:bg-main-black bg-badem-brown z-10"
            />
            <Image
              src={redChair}
              alt="crvena stolica"
              quality={100}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="relative w-full h-full col-start-1 sm:col-start-3 col-end-3 sm:col-end-4 row-start-2 row-end-3 sm:row-start-1 sm:row-end-2">
            <motion.div
              initial={{ height: '100%' }}
              whileInView={{ height: '0%' }}
              transition={{ type: 'spring', stiffness: 30 }}
              viewport={{ once: true }}
              className="absolute right-0 top-0 w-full dark:bg-main-black bg-badem-brown z-10"
            />
            <Image
              src={boldAndChic}
              alt="crvena stolica"
              fill
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'right' }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[65%_35%] sm:grid-cols-[35%_1fr_35%] h-[25rem] lg:h-[40rem] gap-x-6 md:gap-x-8 2xl:gap-x-14 mt-6 md:mt-8 2xl:mt-14 w-full gap-y-5 pr-6 sm:pr-0">
        <div className="relative w-full h-full col-start-1 col-end-2">
          <motion.div
            initial={{ width: '100%' }}
            whileInView={{ width: '0%' }}
            transition={{ type: 'spring', stiffness: 30 }}
            viewport={{ once: true }}
            className="absolute left-0 top-0 h-full dark:bg-main-black bg-badem-brown z-10"
          />

          <Image
            src={woodenChair}
            alt="crvena stolica"
            quality={100}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="relative w-full h-full col-start-2 col-end-3">
          <motion.div
            initial={{ height: '100%' }}
            whileInView={{ height: '0%' }}
            transition={{ type: 'spring', stiffness: 30 }}
            viewport={{ once: true }}
            className="absolute right-0 top-0 w-full dark:bg-main-black bg-badem-brown z-10"
          />

          <Image
            src={humanStatue}
            alt="crvena stolica"
            quality={100}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="relative w-full h-full col-start-1 sm:col-start-3 col-end-3 sm:col-end-4 row-span-2 sm:row-span-1 ">
          <motion.div
            initial={{ width: '100%' }}
            whileInView={{ width: '0%' }}
            transition={{ type: 'spring', stiffness: 30 }}
            viewport={{ once: true }}
            className="absolute right-0 top-0 h-full dark:bg-main-black bg-badem-brown z-10"
          />
          <Image
            src={greenChair}
            alt="crvena stolica"
            quality={100}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </>
  )
}

export default ServicesGallery
