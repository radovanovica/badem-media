import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Poligin from '@/templates/Poligin'

import getImageFiles from '../../../../lib/getImages'
import getVideos from '../../../../lib/getVideos'

import { IProducts } from '@/utils/types/productsImagesType'

export default function PoliginPage({ images, videos }: IProducts) {
  return <Poligin images={images} videos={videos} />
}

export async function getStaticProps() {
  const images = await getImageFiles('poligin/')

  const videos = await getVideos('poligin/')

  return {
    props: {
      ...(await serverSideTranslations('en', ['common', 'poligin', 'footer'])),
      images,
      videos
    }
  }
}
