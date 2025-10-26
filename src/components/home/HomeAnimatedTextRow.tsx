import useWindowWidth from '@/hooks/UseWindowWidth'
import UseLocoScroll from '@/store/useLocoScroll'
import React, { useEffect, useState } from 'react'

type Props = {
  text: string
  id: string
  index: number
}

const HomeAnimatedTextRow = ({ text, id, index }: Props) => {
  const [progress, setProgress] = useState(100)
  const { locomotiveScroll } = UseLocoScroll()
  const width = useWindowWidth()

  useEffect(() => {
    if (Object.keys(locomotiveScroll).length === 0) return

    if (width > 1024) {
      locomotiveScroll.on('scroll', (e: any) => {
        if (typeof e.currentElements[id] === 'object') {
          let progress = e.currentElements[id].progress

          const i = index * 20
          const progressValue = 100 - progress * 250 + i

          setProgress(progressValue < 0 ? 0 : progressValue)
        }
      })
    } else if (width < 1024) {
      locomotiveScroll.on('scroll', (e: any) => {
        if (typeof e.currentElements[index] === 'object') {
          let progress = e.currentElements[index].progress

          const i = index * 20
          const progressValue = 100 - progress * 450 + i
          setProgress(progressValue < 0 ? 0 : progressValue)
        }
      })
    }
  }, [locomotiveScroll, id, index, width])

  return (
    <span data-scroll className="block relative py-[5px]">
      <span className=" block text-white">{text}</span>
      <span
        className="block absolute right-0 top-0 h-full bg-badem-brown dark:bg-main-black transition-colors duration-300 opacity-75 z-10"
        style={{ width: `${progress}%` }}
      ></span>
    </span>
  )
}

export default HomeAnimatedTextRow
