import React, { Dispatch, SetStateAction, memo, useEffect, useRef } from 'react'
import clsx from 'clsx'

import PlayIcon from '@/assets/icons/video-play-btn.svg'
// import MutedIcon from '@/assets/muted-icon.svg'
// import UnmutedIcon from '@/assets/unmuted-icon.svg'

import UseLocoScroll from '@/store/useLocoScroll'

type Props = {
  url: string
  isPlay: boolean
  setPlayingVideo: Dispatch<SetStateAction<string | null>>
  index: number
}

const VideoCard = ({ url, isPlay, setPlayingVideo, index }: Props) => {
  const { locomotiveScroll } = UseLocoScroll()
  // const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (!videoRef) return

    isPlay ? videoRef.current?.play() : videoRef.current?.pause()
  }, [isPlay, videoRef])

  return (
    <div
      className={clsx('h-full w-full relative overflow-hidden', {
        'cursor-pointer': isPlay,
        'cursor-auto': !isPlay
      })}
      onClick={() => setPlayingVideo(state => (state === url ? null : url))}
    >
      <div
        className={clsx(
          'absolute cursor-pointer top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-fit h-fit z-[1] transition-all duration-200 ',
          {
            'scale-0': isPlay,
            'scale-100 hover:scale-105': !isPlay
          }
        )}
        onClick={e => {
          e.stopPropagation()
          setPlayingVideo(state => (state === url ? null : url))
        }}
      >
        <PlayIcon />
      </div>

      {/* <div
        className={clsx(
          'absolute right-10 bottom-10 cursor-pointer sm:hover:scale-110 z-10 duration-300 grid place-items-center ',
          {
            'translate-x-[100px]': !isPlay
          }
        )}
        onClick={e => {
          e.stopPropagation()
          setIsMuted(state => !state)
        }}
      >
        <div
          className={clsx('duration-300 absolute', {
            'translate-x-0': isMuted,
            'translate-x-[200%]': !isMuted
          })}
        >
          <MutedIcon />
        </div>

        <div
          className={clsx('duration-300 absolute', {
            'translate-x-0': !isMuted,
            'translate-x-[200%]': isMuted
          })}
        >
          <UnmutedIcon />
        </div>
      </div> */}

      <video
        ref={videoRef}
        {...(index === 1 && {
          onLoadedData: () => locomotiveScroll.update()
        })}
        loop
        muted
        preload="metadata"
        playsInline
        className="h-full w-full object-cover"
      >
        <source src={`${url}#t=0.001`} type="video/mp4" />
      </video>
    </div>
  )
}

export default memo(VideoCard)
