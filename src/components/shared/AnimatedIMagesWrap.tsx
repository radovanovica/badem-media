import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const AnimatedIMagesWrap = ({ children, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'tween', duration: 0.4 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedIMagesWrap
