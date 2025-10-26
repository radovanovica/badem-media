import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  margin?: number
  delay?: number
  className?: string
}

const AnimatedParagraph = ({
  children,
  className,
  margin = 0,
  delay = 0
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 45, delay }}
      viewport={{ once: true, margin: `0px 0px ${margin}px 0px` }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedParagraph
