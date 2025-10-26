import React, { InputHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error: string | undefined
  direction?: 'left' | 'right'
}

const ContactInput = ({ error, direction, ...FieldInputProps }: Props) => {
  return (
    <motion.div
      {...(direction && {
        initial: { opacity: 0, x: direction === 'left' ? -200 : 200 },
        whileInView: { opacity: 1, x: 0 },
        transition: { type: 'spring', stiffness: 40 },
        viewport: { once: true }
      })}
      className="relative w-full"
    >
      <input
        {...FieldInputProps}
        className={clsx(
          'placeholder:text-xl placeholder:text-white border-2 rounded-md w-full bg-transparent p-5',
          {
            'border-white': !error,
            'border-red-600': error
          }
        )}
      />
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={error && { opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className="text-base text-red-500 absolute"
      >
        {error}
      </motion.p>
    </motion.div>
  )
}

export default ContactInput
