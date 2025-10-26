import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Hero from '@/templates/Hero'

import getImageFiles from '../../../../lib/getImages'
import getVideos from '../../../../lib/getVideos'

import { IProducts } from '@/utils/types/productsImagesType'

export default function HeroPage({ images, videos }: IProducts) {
  return <Hero images={images} videos={videos} />
}

export async function getStaticProps() {
  const images = await getImageFiles('hero/')

  const videos = await getVideos('hero/')

  return {
    props: {
      ...(await serverSideTranslations('en', ['common', 'hero', 'footer'])),
      images: images,
      videos
    }
  }
}
