import { create } from 'zustand'

type Props = {
  scroll: number
  setScroll: (yScroll: number) => void
  locomotiveScroll: any
  setLocomotiveScroll: (locoScroll: any) => void
}

const UseLocoScroll = create<Props>(set => ({
  scroll: 0,
  locomotiveScroll: {},
  setScroll: yScroll => set(() => ({ scroll: yScroll })),
  setLocomotiveScroll: locoScroll =>
    set(() => ({ locomotiveScroll: locoScroll }))
}))

export default UseLocoScroll
