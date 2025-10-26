import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap
} from 'framer-motion'
import React, { ReactNode } from 'react'

type Props = {
  velocity: number
  children: ReactNode
}

const LogosRow = ({ velocity, children }: Props) => {
  const baseX = useMotionValue(0)

  const x = useTransform(baseX, v => `${wrap(-5, -30.3, v)}%`)

  useAnimationFrame((t, delta) => {
    let moveBy = velocity * (delta / 1000)

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <motion.div
      className="flex flex-nowrap items-center gap-12 h-56"
      style={{ x }}
    >
      <div>{children}</div>
      <div>{children}</div>
      <div>{children}</div>
      <div>{children}</div>
    </motion.div>
  )
}

export default LogosRow
