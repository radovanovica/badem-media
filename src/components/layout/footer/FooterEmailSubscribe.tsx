import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import * as Yup from 'yup'

import Arrow from '/src/assets/icons/footer-arrow.svg'
import { useFormik } from 'formik'
import clsx from 'clsx'

const FooterEmailSubscribe = () => {
  const { t } = useTranslation('footer')
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const formik = useFormik({
    initialValues: {
      email: ''
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email(t('form.email.errorMessage') as string)
        .required(t('required') as string)
    }),

    onSubmit: async values => {
      setErrorMessage(null)
      setSuccessMessage(null)
      const res = await fetch(
        `https://a.klaviyo.com/client/subscriptions/?company_id=UtZDLp`,
        {
          method: 'POST',
          headers: {
            revision: '2023-06-15',
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            data: {
              type: 'subscription',
              attributes: {
                custom_source: t('customSource'),
                email: values.email,
                list_id: 'YeHbwv'
              }
            }
          })
        }
      )

      if (res.status === 202 && res.ok) {
        setSuccessMessage(t('form.successMessage'))
      }

      if (res.status !== 202 && !res.ok) {
        setErrorMessage(t('form.errorMessage'))
      }

      formik.resetForm()
    }
  })

  return (
    <>
      <label htmlFor="news" className="font-semibold text-2xl">
        {`${t('newsLabel')}`}
      </label>
      <label htmlFor="news" className="text-base max-w-[25rem]">
        {`${t('newsDesc')}`}
      </label>

      <div className="relative">
        <form
          onSubmit={formik.handleSubmit}
          className="flex gap-3 sm:gap-5 overflow-hidden"
        >
          <motion.input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            initial={{ x: '-100%' }}
            whileInView={{ x: '0%' }}
            transition={{ type: 'spring', stiffness: 40 }}
            viewport={{ once: true }}
            type="text"
            placeholder={`${t('newsPlaceholder')}`}
            className={clsx(
              'rounded-full bg-transparent placeholder:text-lg placeholder:text-white border-2  w-full sm:w-96 py-1 px-6',
              {
                'border-red-500': formik.errors.email,
                'border-white': !formik.errors.email
              }
            )}
          />
          <motion.button
            initial={{ x: '-100%' }}
            whileInView={{ x: '0%' }}
            transition={{ type: 'spring', stiffness: 40 }}
            viewport={{ once: true }}
            className="min-w-[2.75rem] h-11 rounded-full border-2 hover:border-[3px] border-white grid place-content-center pl-1 cursor-pointer group"
            onClick={e => e.stopPropagation()}
          >
            <Arrow className="duration-200 group-hover:scale-110 pointer-events-none" />
          </motion.button>
        </form>

        {successMessage && (
          <div className="bg-green-500 text-center py-1 px-6 text-base sm:text-lg font-light absolute -bottom-10 left-0 w-full rounded-full">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-500 text-center py-1 px-6 text-base sm:text-lg font-light absolute -bottom-10 left-0 w-full rounded-full">
            {errorMessage}
          </div>
        )}
      </div>
    </>
  )
}

export default FooterEmailSubscribe
