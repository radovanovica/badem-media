import Link, { LinkProps } from 'next/link'
import React from 'react'
import LinkUnderline from './LinkUnderline'

type Props = LinkProps & {
  type: 'nextLink' | 'a'
  text: string
  className?: string
  blank?: boolean
}

const LinkWithUnderline = ({
  type,
  text,
  className,
  blank,
  ...LinkProps
}: Props) => {
  return (
    <>
      {type === 'nextLink' ? (
        <Link
          {...LinkProps}
          {...(blank && { target: '_blank' })}
          className={`group block w-fit relative overflow-hidden cursor-pointer ${className}`}
        >
          {text} <LinkUnderline />
        </Link>
      ) : (
        <a
          rel="nofollow"
          href={LinkProps.href as string}
          className={`group block w-fit relative overflow-hidden cursor-pointer ${className}`}
        >
          {text}
          <LinkUnderline />
        </a>
      )}
    </>
  )
}

export default LinkWithUnderline
