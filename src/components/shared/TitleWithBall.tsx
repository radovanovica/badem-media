import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import clsx from 'clsx'

type Props = {
  title: any
  reverse?: boolean
  servicesPage?: boolean
}

const TitleWithBall = ({ reverse, title, servicesPage }: Props) => {
  const headingRef = useRef<HTMLHeadingElement | null>(null)

  const isHeadingInView = useInView(headingRef, { once: true })

  return (
    <div
      className={clsx('w-full ', {
        'p-[0rem_0rem_2.5rem_0rem]  xl:p-[0rem_0rem_2.5rem_0rem] ':
          !servicesPage,
        'pl-0 pt-0 pr-0 pb-0': servicesPage
      })}
    >
      <div
        ref={headingRef}
        className={clsx(
          `flex items-center sm:gap-10 lg:gap-16 overflow-hidden pb-2 justify-between w-full min-h-[3.5rem] lg:min-h-[6.5rem]`,
          {
            'flex-row-reverse': reverse,
            'flex-row': !reverse,
            'justify-between': servicesPage
          }
        )}
      >
        <motion.h2
          initial={{ y: '120%' }}
          animate={isHeadingInView && { y: '0%' }}
          transition={{ duration: 0.8, ease: 'anticipate' }}
          viewport={{ once: true }}
          className={clsx(
            'capitalize w-fit leading-[1em] text-5xl lg:text-6xl xl:text-7xl  font-semibold',
            {
              'text-right': reverse
            }
          )}
        >
          {`${title}`}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ type: 'spring', stiffness: 40 }}
          viewport={{ once: true }}
          className="h-[2px] bg-white hidden sm:block shrink w-full rounded-full"
        />

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.2 }}
          viewport={{ once: true }}
          className={clsx(
            'grow bg-white rounded-full h-12 lg:h-24 min-w-[3rem] lg:min-w-[6rem] max-w-[3rem] lg:max-w-[6rem]',
            {
              'hidden sm:block': servicesPage
            }
          )}
        />
      </div>
    </div>
  )
}

export default TitleWithBall
