import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Sitform from '@/templates/Sitform'

import getImageFiles from '../../../lib/getImages'
import getVideos from '../../../lib/getVideos'

import { IProducts } from '@/utils/types/productsImagesType'

export default function SitformPage({ images, videos }: IProducts) {
  return <Sitform images={images} videos={videos} />
}

export async function getStaticProps() {
  const images = await getImageFiles('sitform/')

  const videos = await getVideos('sitform/')

  return {
    props: {
      ...(await serverSideTranslations('sr', ['common', 'sitform', 'footer'])),
      images,
      videos
    }
  }
}
