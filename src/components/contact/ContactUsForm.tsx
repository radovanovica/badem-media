import { useFormik } from 'formik'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import * as Yup from 'yup'
import { useTranslation } from 'next-i18next'

import ContactInput from '../shared/input/ContactInput'

import useSendOrder from '@/hooks/useSendOrder'
import ContactSubmitBtn from './ContactSubmitBtn'
import clsx from 'clsx'
import CaptchaComponent from '../shared/CaptchaComponent'

const ContactUsForm = () => {

  const [captchaOk, setCaptchaOk] = useState(false)
  const { t } = useTranslation('contact')

  const { isLoading, isSuccess, error, send } = useSendOrder()

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      companyName: '',
      additionalInfo: ''
    },

    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, t('form.name.errorMessage.min') as string)
        .max(20, t('form.name.errorMessage.max') as string)
        .required(t('required') as string),
      surname: Yup.string()
        .min(2, t('form.name.errorMessage.min') as string)
        .max(30, t('form.name.errorMessage.max') as string)
        .required(t('required') as string),
      phone: Yup.number()
        .min(5, t('form.phone.errorMessage') as string)
        .typeError(t('form.phone.errorMessage') as string)
        .positive(t('form.phone.errorMessage') as string)
        .integer(t('form.phone.errorMessage') as string),
      email: Yup.string()
        .email(t('form.email.errorMessage') as string)
        .required(t('required') as string),
      companyName: Yup.string().min(
        2,
        t('form.companyName.errorMessage') as string
      ),
      additionalInfo: Yup.string()
        .min(2, t('form.companyName.errorMessage') as string)
        .required(t('required') as string)
    }),

    onSubmit: async values => {
      try {
        const res = await send({ ...values })

        if (!res) throw new Error()

        formik.resetForm()
      } catch (err) {
        console.log(err)
      }
    }
  })

  return (
    <div className="relative max-w-[62.5rem] mx-auto h-full">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center gap-8 w-full  text-xl"
      >
        <div className="flex gap-8 w-full flex-col md:flex-row">
          <ContactInput
            name="name"
            type="text"
            placeholder={t('form.name.placeholder') as string}
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
            direction="left"
          />
          <ContactInput
            name="surname"
            type="text"
            placeholder={t('form.surname.placeholder') as string}
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.errors.surname}
            direction="right"
          />
        </div>
        <div className="flex gap-8 w-full flex-col md:flex-row">
          <ContactInput
            name="phone"
            type="tel"
            placeholder={t('form.phone.placeholder') as string}
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.errors.phone}
            direction="left"
          />
          <ContactInput
            name="email"
            type="email"
            placeholder={t('form.email.placeholder') as string}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
            direction="right"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 40 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <ContactInput
            name="companyName"
            type="text"
            placeholder={t('form.companyName.placeholder') as string}
            value={formik.values.companyName}
            onChange={formik.handleChange}
            error={formik.errors.companyName}
          />
        </motion.div>

        <div className="relative w-full">
          <motion.textarea
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 40 }}
            viewport={{ once: true }}
            name="additionalInfo"
            rows={8}
            placeholder={t('form.addInfo.placeholder') as string}
            className={clsx(
              'placeholder:text-xl placeholder:text-white border-2 rounded-md w-full bg-transparent p-5',
              {
                'border-white': !formik.errors.additionalInfo,
                'border-red-600': formik.errors.additionalInfo
              }
            )}
            value={formik.values.additionalInfo}
            onChange={formik.handleChange}
          />

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={formik.errors.additionalInfo && { opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-base text-red-500 absolute"
          >
            {formik.errors.additionalInfo}
          </motion.p>
        </div>
        <CaptchaComponent onSuccess={() => setCaptchaOk(true)} />

        {captchaOk && <ContactSubmitBtn text={t('form.submitBtn')} isLoading={isLoading} />}
      </form>
      {isSuccess && (
        <motion.div className="bg-green-600/75 text-center py-1 px-6 text-base sm:text-lg font-light absolute -bottom-20 left-0 w-full">
          {t('form.successMessage')}
        </motion.div>
      )}
      {error && (
        <motion.div className="bg-red-500 text-center py-1 px-6 text-base sm:text-lg font-light absolute -bottom-20 left-0 w-full">
          {t('form.errorMessage')}
        </motion.div>
      )}
    </div>
  )
}

export default ContactUsForm
