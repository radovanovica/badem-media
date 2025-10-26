import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Props = {
  number: string
  title: string
}

const ProjectsSectionTitle = ({ number, title }: Props) => {
  const nameRef = useRef<HTMLHeadingElement | null>(null)
  const isNameInView = useInView(nameRef, { once: true })

  return (
    <div className="relative h-fit -mt-3">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.4
        }}
        viewport={{ once: true, margin: '0px 0px -150px 0px' }}
        className="z-0 absolute left-0 -bottom-5 text-outline text-[7.5rem] sm:text-[14rem] leading-[1]"
      >
        {number}
      </motion.p>
      <div ref={nameRef} className="w-fit overflow-hidden mx-auto lg:mx-0">
        <motion.h2
          initial={{ rotate: -15, y: -120 }}
          animate={isNameInView && { rotate: 0, y: 0 }}
          transition={{ duration: 1.2, ease: 'anticipate' }}
          className="text-5xl lg:text-7xl font-semibold relative z-[1]"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  )
}

export default ProjectsSectionTitle
