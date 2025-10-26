import React, { memo, useRef } from 'react'
import { motion, LazyMotion, domAnimation, useInView } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

type Props = {
  category: string
  name: string
  image: StaticImageData
  href: string
  logo: StaticImageData
  newProject?: boolean
}

const ProjectCard = ({
  category,
  name,
  image,
  href,
  logo,
  newProject
}: Props) => {
  const { t } = useTranslation('projects')
  const containerRef = useRef<HTMLDivElement | null>(null)

  const isInView = useInView(containerRef, { once: true })

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        ref={containerRef}
        initial="hidden"
        whileInView={isInView ? 'visible' : ''}
        whileHover="hover"
        variants={{
          hidden: {},
          visible: {},
          hover: {}
        }}
        className="h-[30rem] md:h-full"
      >
        <Link
          href={href}
          className="relative block w-full overflow-hidden h-full"
        >
          <div className="z-[1] absolute left-0 top-0 w-full pt-4 sm:pt-8 pl-4 sm:pl-8 sm:pr-8 flex  justify-between -mt-2 sm:mt-0 gap-10 h-full">
            <motion.h3
              variants={{
                hidden: { x: -60, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { type: 'spring', stiffness: 70 }
                },
                hover: {
                  x: -100,
                  opacity: 0,
                  transition: {
                    duration: 0.7,
                    ease: 'anticipate'
                  }
                }
              }}
              className="text-2xl sm:text-[2.2rem] leading-[2.3rem]"
            >
              {category}
            </motion.h3>

            <motion.div
              variants={{
                hidden: {
                  x: 0
                },
                visible: {
                  x: 0,
                  transition: { type: 'spring', stiffness: 70 }
                },
                hover: {
                  x: 120,
                  transition: { duration: 0.7, ease: 'anticipate' }
                }
              }}
            >
              <motion.svg
                width={60}
                height={60}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="scale-50 md:scale-75 lg:scale-100 -mr-2 sm:mr-0 -mt-2 lg:-mt-0"
              >
                <motion.circle
                  variants={{
                    hidden: { pathLength: 0 },
                    visible: {
                      pathLength: 1.2,
                      transition: { duration: 0.8 }
                    }
                  }}
                  width={60}
                  height={60}
                  cx="10"
                  cy="10"
                  r="5"
                  strokeWidth={10}
                  stroke="white"
                  fill="none"
                />
              </motion.svg>
            </motion.div>
          </div>

          <Image
            src={image}
            alt={name}
            quality={100}
            priority
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              width: '100%',
              height: '100%',
              maxHeight: '822px',
              objectFit: 'cover'
            }}
          />

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              hover: {
                opacity: 1,
                transition: {
                  duration: 0.4,
                  delay: 0.3
                }
              }
            }}
            className="absolute inset-0 backdrop-blur-[10px] p-6 overflow-hidden grid place-items-center"
          >
            <div className="w-[40%] sm:w-[50%] lg:max-w-[14rem] grid place-items-center">
              <Image src={logo} alt={name} />
            </div>
          </motion.div>

          <motion.div
            variants={{ hidden: {}, visible: {} }}
            className="absolute bottom-0 left-0 px-4 sm:px-8 pb-4 sm:pb-8"
          >
            <h2 className="font-extrabold text-3xl sm:text-6xl lg:text-7xl">
              {name}
            </h2>

            {newProject && (
              <motion.div
                variants={{ hover: { opacity: 0 } }}
                className="absolute -top-2 sm:top-0 text-black backdrop-blur-sm bg-white/60 rounded-full px-8 sm:px-14 py-2 sm:py-4 font-bold -rotate-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                {t('newProject')}
              </motion.div>
            )}
          </motion.div>
        </Link>
      </motion.div>
    </LazyMotion>
  )
}

export default memo(ProjectCard)
