import React from 'react'

import LinkWithUnderline from '../LinkWithUnderline'

import InstaIcon from '/src/assets/icons/social/icon _instagram_.svg'

type Props = {
  href: string
  text: string
}

const ProductsReadMoreBtn = ({ text, href }: Props) => {
  return (
    <div className="mx-auto w-fit mt-24 sm:mt-36 md:mt-44 flex items-center justify-center gap-3">
      <InstaIcon className="scale-90 sm:scale-100" />
      <LinkWithUnderline
        type="nextLink"
        text={text}
        href={href}
        blank
        className="text-lg sm:text-2xl"
      />
    </div>
  )
}

export default ProductsReadMoreBtn
