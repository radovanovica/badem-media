import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Novak from '@/templates/Novak'

import getImageFiles from '../../../../lib/getImages'
import getVideos from '../../../../lib/getVideos'

import { IProducts } from '@/utils/types/productsImagesType'

export default function NovakPage({ images, videos }: IProducts) {
  return <Novak images={images} videos={videos} />
}

export async function getStaticProps() {
  const images = await getImageFiles('novak-trening-centar/')

  const videos = await getVideos('novak-trening-center/')

  return {
    props: {
      ...(await serverSideTranslations('en', ['common', 'novak', 'footer'])),
      images,
      videos
    }
  }
}
