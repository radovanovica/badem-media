import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import bgtImage from '/public/images/pozadina-about.png'

import aleksandarImgPortrait from '/public/images/About Us/Aleksandar/portrait-rounded.png'
import aleksandarImg from '/public/images/About Us/Aleksandar/Aleksandar2.jpg'
import tijanaImgPortrait from '/public/images/About Us/Tijana/pragnet-woman.png'
import ivanKostakijevImgPortrait from '/public/images/About Us/Ivan Kostakijev/portrait-rounded.png'
import ivanKostakijevImg from '/public/images/About Us/Ivan Kostakijev/ivanKostakijev.jpg'
import aleksejImgPortrait from '/public/images/About Us/Aleksej/Aleksej2.jpg'
import aleksejImg from '/public/images/About Us/Aleksej/Aleksej1.jpg'
import matijaImgPortrait from '/public/images/About Us/matija/portrait.jpg'
import matijaImg from '/public/images/About Us/matija/Matija-2.jpg'
import mladenImgPortrait from '/public/images/About Us/Mladen/portrait-rounded.png'
import mladenImg from '/public/images/About Us/Mladen/Mladen2.jpg'
import ivanImgPortrait from '/public/images/About Us/Ivan/portrait-rounded.png'
import ivanImg from '/public/images/About Us/Ivan/Ivan2.jpg'
import artinajImgPortrait from '/public/images/About Us/Artinjan/portrait-rounded.png'
import artinajImg from '/public/images/About Us/Artinjan/Artinjan2.jpg'
import bobanImgPortrait from '/public/images/About Us/boban/portrait.jpg'
import bobanImg from '/public/images/About Us/boban/Boban-2.jpg'

import PageLayout from '@/components/layout/PageLayout'
import TeamInfoRow from '@/components/about/TeamInfoRow'

const About = () => {
  const { t } = useTranslation('about')

  const team = [
    {
      imgUrlPortrait: { src: aleksandarImgPortrait, alt: 'portrait' },
      imgUrl: { src: aleksandarImg, alt: 'slika' },
      name: t('team.aleksandar.name'),
      role: t('team.aleksandar.role'),
      title: t('team.aleksandar.title'),
      desc: t('team.aleksandar.desc')
    },
    {
      imgUrlPortrait: { src: tijanaImgPortrait, alt: 'portrait' },
      name: t('team.tijana.name'),
      role: t('team.tijana.role'),
      title: t('team.tijana.title'),
      desc: t('team.tijana.desc'),
      reverse: true
    },
    {
      imgUrlPortrait: { src: aleksejImgPortrait, alt: 'portrait' },
      imgUrl: { src: aleksejImg, alt: 'slika' },
      position: { top: 50 },
      name: t('team.aleksej.name'),
      role: t('team.aleksej.role'),
      title: t('team.aleksej.title'),
      desc: t('team.aleksej.desc')
    },
    {
      imgUrlPortrait: { src: matijaImgPortrait, alt: 'portrait' },
      imgUrl: { src: matijaImg, alt: 'slika' },
      position: { top: 60 },
      name: t('team.matija.name'),
      role: t('team.matija.role'),
      title: t('team.matija.title'),
      desc: t('team.matija.desc'),
      reverse: true
    },
    {
      imgUrlPortrait: { src: bobanImgPortrait, alt: 'portrait' },
      imgUrl: { src: bobanImg, alt: 'slika' },
      name: t('team.boban.name'),
      role: t('team.boban.role'),
      title: t('team.boban.title'),
      desc: t('team.boban.desc')
    },
    {
      imgUrlPortrait: { src: mladenImgPortrait, alt: 'portrait' },
      imgUrl: { src: mladenImg, alt: 'slika' },
      name: t('team.mladen.name'),
      role: t('team.mladen.role'),
      title: t('team.mladen.title'),
      desc: t('team.mladen.desc'),
      reverse: true
    },
    {
      imgUrlPortrait: { src: ivanImgPortrait, alt: 'portrait' },
      imgUrl: { src: ivanImg, alt: 'slika' },
      name: t('team.ivan.name'),
      role: t('team.ivan.role'),
      title: t('team.ivan.title'),
      desc: t('team.ivan.desc')
    },
    {
      imgUrlPortrait: { src: artinajImgPortrait, alt: 'portrait' },
      imgUrl: { src: artinajImg, alt: 'slika' },
      name: t('team.artinaj.name'),
      role: t('team.artinaj.role'),
      title: t('team.artinaj.title'),
      desc: t('team.artinaj.desc'),
      reverse: true
    },
    {
      imgUrlPortrait: { src: ivanKostakijevImgPortrait, alt: 'portrait' },
      imgUrl: { src: ivanKostakijevImg, alt: 'slika' },
      name: t('team.ivanKostakijev.name'),
      role: t('team.ivanKostakijev.role'),
      title: t('team.ivanKostakijev.title'),
      desc: t('team.ivanKostakijev.desc')
    }
  ]

  return (
    <PageLayout title={t('about:metaTitle')} desc={t('about:metaDesc')}>
      <section
        data-scroll-section
        className="pt-36 sm:pt-44 md:pt-56 lg:pt-72 px-6 sm:px-16 relative pb-24"
      >
        <div className="w-full h-full absolute inset-0 z-[-1]">
          <Image src={bgtImage} alt="pozadina" fill className="grayscale" />
        </div>
        <h1 className="font-semibold text-5xl sm:text-7xl lg:text-[6.875rem] lg:leading-[6rem] mb-16 sm:mb-24  text-center">
          {t('title')}
        </h1>
        <div className="flex flex-col items-center gap-6 max-w-[55rem] text-center mx-auto text-base sm:text-2xl">
          <p>{t('text1')}</p>
          <p>{t('text2')}</p>
        </div>
      </section>

      <section data-scroll-section className="mb-40 px-6 sm:px-20 xl:px-32">
        <h2 className="text-center mb-24 sm:mb-40 lg:leading-[3.375rem] text-3xl sm:text-4xl lg:text-[3.375rem]">
          {t('text3.first')} <br /> {t('text3.second')}
        </h2>
        <div className="flex flex-col gap-24 sm:gap-40 ">
          {team.map((info, i) => (
            <TeamInfoRow
              key={i}
              {...info}
              reverse={info.reverse}
              imgUrl={info.imgUrl}
            />
          ))}
        </div>
      </section>
    </PageLayout>
  )
}

export default About
