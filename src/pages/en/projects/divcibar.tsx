import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Divcibar from '@/templates/Divcibar'

import getImageFiles from '../../../../lib/getImages'
import getVideos from '../../../../lib/getVideos'

import { IProducts } from '@/utils/types/productsImagesType'

export default function DivcibarPage({ images, videos }: IProducts) {
  return <Divcibar images={images} videos={videos} />
}

export async function getStaticProps() {
  const images = await getImageFiles('divcibar/')

  const videos = await getVideos('divcibar/')

  return {
    props: {
      ...(await serverSideTranslations('en', ['common', 'divcibar', 'footer'])),
      images,
      videos
    }
  }
}
