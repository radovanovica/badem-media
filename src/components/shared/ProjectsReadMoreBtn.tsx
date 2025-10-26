import React from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

import LinkWithUnderline from './LinkWithUnderline'

import ArrowIcon from '/src/assets/icons/arrow.svg'

type Props = {
  href: string
  text: string
  className?: string
}

const ProjectsReadMoreBtn = ({ text, href, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={twMerge(
        'mx-auto w-fit flex items-center justify-center gap-3',
        className
      )}
    >
      <LinkWithUnderline
        type="nextLink"
        text={text}
        href={href}
        blank
        className="text-lg sm:text-2xl"
      />
      <ArrowIcon />
    </motion.div>
  )
}

export default ProjectsReadMoreBtn
