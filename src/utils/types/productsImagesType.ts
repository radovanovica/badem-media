import { StaticImageData } from 'next/image'

export type IImages = StaticImageData[]

export type IProducts = {
  images: IImages
  videos?: string[]
  pageVideo?: { url: string; name: string }[]
}
