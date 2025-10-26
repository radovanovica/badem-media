import React from 'react'
import { StaticImageData } from 'next/image'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import GaryTulip, { IGaryTulip } from '@/templates/GaryTulip'

import getImageFiles from '../../../lib/getImages'
import getVideos from '../../../lib/getVideos'

export default function GaryTulipPage({
  instagramPostsImages,
  instagramStoriesImages,
  reels
}: IGaryTulip) {
  return (
    <GaryTulip
      instagramPostsImages={instagramPostsImages}
      instagramStoriesImages={instagramStoriesImages}
      reels={reels}
    />
  )
}

export async function getStaticProps() {
  const instagramPostsImages = await getImageFiles(
    'gary-tulip/instagram-posts/'
  )
  const instagramStoriesImages = await getImageFiles(
    'gary-tulip/instagram-stories/'
  )

  const reels = await getVideos('gary-tulip/')

  return {
    props: {
      ...(await serverSideTranslations('sr', [
        'common',
        'garyTulip',
        'footer'
      ])),
      instagramPostsImages,
      instagramStoriesImages,
      reels
    }
  }
}
