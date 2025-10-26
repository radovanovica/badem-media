import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Props = {
  name: string
  role: string
  title: string
  desc: string
  imgUrlPortrait: ImageProps
  position?: { top: number }
  imgUrl?: ImageProps
  reverse?: boolean
}

const TeamInfoRow = ({
  name,
  role,
  title,
  desc,
  imgUrlPortrait,
  position,
  imgUrl,
  reverse
}: Props) => {
  const nameRef = useRef<HTMLHeadingElement | null>(null)
  const isNameInView = useInView(nameRef, { once: true })

  return (
    <div
      className={clsx(
        'w-full gap-11 lg:gap-20 flex items-center flex-col lg:flex-row ',
        {
          'lg:flex-row-reverse': reverse
        }
      )}
    >
      <motion.div
        initial={{ x: 0, scale: 0 }}
        whileInView={{ x: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 30 }}
        viewport={{ once: true }}
        className="group w-60 h-60 sm:min-w-[22rem] sm:min-h-[22rem] xl:min-w-[27.875rem] xl:min-h-[27.875rem] rounded-[600px] overflow-hidden relative grid place-items-center"
      >
        <Image
          src={imgUrlPortrait.src}
          alt={imgUrlPortrait.alt}
          quality={80}
          style={position && { marginTop: -position.top }}
          className={clsx('duration-[850ms] rounded-full', {
            'opacity-0 group-hover:opacity-100': imgUrl
          })}
        />

        {imgUrl && (
          <Image
            src={imgUrl.src}
            alt={imgUrl.alt}
            quality={80}
            className="absolute opacity-100 group-hover:opacity-0 duration-[850ms] rounded-full"
          />
        )}
      </motion.div>

      <div className="flex flex-col items-center lg:items-start ">
        <div
          className={clsx('mb-14', {
            'lg:ml-auto': reverse
          })}
        >
          <div
            ref={nameRef}
            className={clsx('w-fit overflow-hidden mx-auto lg:mx-0', {
              'lg:ml-auto': reverse
            })}
          >
            <motion.h3
              initial={{ rotate: -15, y: -120 }}
              animate={isNameInView && { rotate: 0, y: 0 }}
              transition={{ duration: 1.2, ease: 'anticipate' }}
              className={clsx(
                'mb-3 font-semibold leading-[1.5625rem] text-[1.5625rem] sm:text-5xl',
                {
                  'text-center lg:text-right': reverse
                }
              )}
            >
              {name}
            </motion.h3>
          </div>
          <p
            className={clsx('font-light text-xl sm:text-5xl text-center', {
              'lg:text-left': !reverse,
              'lg:text-right': reverse
            })}
          >
            {role.split('').map((letter, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 30,
                  delay: 0.04 + i * 0.04
                }}
                viewport={{ once: true }}
                key={i}
                className={clsx('inline-block', {
                  'ml-3': letter === ' '
                })}
              >
                {letter}
              </motion.span>
            ))}
          </p>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'anticipate' }}
          viewport={{ once: true }}
          className={clsx(
            'font-semibold mb-5 text-base sm:text-[1.375rem] leading-6',
            {
              'mr-auto lg:mr-0 text-left': !reverse,
              'text-left lg:text-right mr-auto lg:mr-0 lg:ml-auto': reverse
            }
          )}
        >
          {title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'anticipate' }}
          viewport={{ once: true }}
          className={clsx(
            'about-us-description text-base sm:text-[1.25rem] font-light',
            {
              'lg:text-left': !reverse,
              'lg:text-right': reverse
            }
          )}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    </div>
  )
}

export default TeamInfoRow
