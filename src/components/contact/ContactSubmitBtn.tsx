import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  text: string
  isLoading: boolean
}

const ContactSubmitBtn = ({ text, isLoading }: Props) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="group w-64 h-16 self-center sm:self-end border-2 border-white rounded-md bg-transparent overflow-hidden relative flex items-center justify-center z-10"
    >
      <motion.div
        initial="hidden"
        animate={isLoading ? 'visible' : 'hidden'}
        variants={{
          hidden: { y: -100, transition: { type: 'tween', duration: 0.5 } },
          visible: { y: 0, transition: { type: 'spring', stiffness: 45 } }
        }}
        className="relative z-[2] pointer-events-none"
      >
        <div className="bg-transparent w-6 h-6 border-2 border-white border-t-main-black animate-spin rounded-full" />
      </motion.div>
      <motion.span
        initial="visible"
        animate={isLoading ? 'hidden' : 'visible'}
        variants={{
          hidden: { y: 100, transition: { type: 'tween', duration: 0.5 } },
          visible: { y: 0, transition: { type: 'spring', stiffness: 40 } }
        }}
        className="block absolute z-[2] pointer-events-none"
      >
        <span className="duration-300 text-white group-hover:text-main-black">
          {text}
        </span>
      </motion.span>

      <div className="pointer-events-none absolute bg-white rounded-full w-[20rem] h-[20rem] duration-700 translate-x-[-50%] left-1/2 bottom-0 translate-y-full group-hover:translate-y-1/2" />
    </motion.button>
  )
}

export default ContactSubmitBtn
