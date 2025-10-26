import React from 'react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

import PageLayout from '@/components/layout/PageLayout'
import ContactUsForm from '@/components/contact/ContactUsForm'
import AnimatedParagraph from '@/components/shared/AnimatedParagraph'
import LinkWithUnderline from '@/components/shared/LinkWithUnderline'

const ContactUs = () => {
  const { t } = useTranslation('contact')

  return (
    <PageLayout title={t('contact:metaTitle')} desc={t('contact:metaDesc')}>
      <section
        data-scroll-section
        className="pt-40 md:pt-60 px-6 sm:px-12 lg:px-16 mb-24 sm:36 md:mb-44"
      >
        <div className="overflow-hidden h-fit mb-14 sm:mb-24">
          <motion.h1
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ type: 'tween', duration: 0.8, delay: 0.6 }}
            className="font-semibold text-4xl sm:text-7xl xl:text-[5.625rem] xl:leading-[6.0625rem] text-center sm:text-left "
          >
            {t('heading')}
          </motion.h1>
        </div>

        <AnimatedParagraph>
          <p
            className="font-light text-2xl sm:text:3xl xl:text-4xl lg:my-32 text-center lg:text-left"
            dangerouslySetInnerHTML={{ __html: t('text1') }}
          />
        </AnimatedParagraph>

        <div className="block lg:hidden mt-24 sm:mt-36 mt:mb-44">
          <ContactUsForm />
        </div>

        <div className="flex items-center justify-center flex-col w-full text-xl sm:text-2xl mb-24 sm:mb-32 mt-24 lg:mt-0">
          {/* <div className="-xenter text-center"> */}
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 40, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-semibold mb-4 sm:mb-5"
          >
            {t('describe.col3.label')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 40, delay: 0.8 }}
            viewport={{ once: true }}
            className="font-light flex flex-col items-center gap-2"
          >
            <LinkWithUnderline
              type="a"
              href="mailto:office@bademmedia.com"
              text="office@bademmedia.com"
            />

            {/* <LinkWithUnderline
              type="a"
              href="tel:+381 62 523235"
              text="+381 62 523235"
            /> */}

            <LinkWithUnderline
              type="a"
              href="tel:+381 64 4727376"
              text="+381 64 4727376"
            />
          </motion.div>
          {/* </div> */}
        </div>

        <div className="hidden lg:block">
          <ContactUsForm />
        </div>
      </section>
    </PageLayout>
  )
}

export default ContactUs
