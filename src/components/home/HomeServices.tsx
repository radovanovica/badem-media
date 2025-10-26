import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import FaqArrow from '/src/assets/icons/faq-arrow.svg'
import UseLocoScroll from '@/store/useLocoScroll'

const qa = [
  {
    answer: 'home:faq.row-1.answer',
    question: 'home:faq.row-1.question'
  },
  {
    answer: 'home:faq.row-2.answer',
    question: 'home:faq.row-2.question',
    reverse: true
  },
  {
    answer: 'home:faq.row-3.answer',
    question: 'home:faq.row-3.question'
  },
  {
    answer: 'home:faq.row-4.answer',
    question: 'home:faq.row-4.question',
    reverse: true
  },
  {
    answer: 'home:faq.row-5.answer',
    question: 'home:faq.row-5.question'
  }
]

const HomeServices = () => {
  const { t } = useTranslation()
  const { locomotiveScroll } = UseLocoScroll()

  const [openedQ, setOpenedQ] = useState<string | null>(null)

  return (
    <div className="">
      {qa.map(({ answer, question, reverse }) => (
        <div key={question} className="overflow-hidden">
          <motion.div
            initial="closed"
            whileHover="hover"
            variants={{ closed: {}, hover: {} }}
            className="py-5 flex justify-between items-center cursor-pointer relative z-[2] dark:bg-main-black bg-badem-brown transition-colors duration-300"
            onClick={() => {
              setOpenedQ(question === openedQ ? '' : question)

              setTimeout(() => {
                locomotiveScroll.update()
              }, 500)
            }}
          >
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              transition={{ type: 'spring', stiffness: 35 }}
              viewport={{ once: true }}
              className="h-1 bg-white/50 absolute left-0 bottom-0"
            />
            <motion.div
              variants={{
                closed: { width: '0%' },
                hover: {
                  width: '100%',
                  transition: { type: 'spring', stiffness: 35 }
                }
              }}
              className="h-1 bg-white absolute left-0 bottom-0"
            />

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {}
              }}
              className="text-3xl sm:text-4xl"
            >
              {t(question)
                .split('')
                .map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          delay: reverse
                            ? (t(question).length - 1 - i) * 0.05
                            : 0.05 + i * 0.05
                        }
                      }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
            </motion.p>

            <div
              className={clsx('duration-300 scale-75 sm:scale-100', {
                'rotate-180': openedQ === question
              })}
            >
              <FaqArrow />
            </div>
          </motion.div>
          <div
            dangerouslySetInnerHTML={{ __html: t(answer) }}
            className={clsx(
              'ml-auto w-full duration-500 relative z-[1] [&>*:first-child]:text-2xl  lg:[&>*:first-child]:text-4xl sm:[&>*:first-child]:text-3xl [&>*:first-child]:mb-3 [&>*:first-child]:block text-base sm:text-xl',
              {
                'py-9 opacity-100 scale-y-100': openedQ === question,
                'py-0 opacity-0': openedQ !== question
              }
            )}
            style={{ maxHeight: openedQ === question ? '40rem' : '0' }}
          />
        </div>
      ))}
    </div>
  )
}

export default HomeServices
