import React, { ReactNode } from 'react'

import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

import Helmet from '../shared/Helmet'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  title: string
  desc: string
  purpleBg?: boolean
  noindex?: boolean
  hideNavbar?: boolean
  hideFooter?: boolean
}

const PageLayout = ({
  children,
  title,
  desc,
  purpleBg,
  noindex,
  hideFooter,
  hideNavbar
}: Props) => {
  return (
    <Helmet title={title} desc={desc} noindex={noindex}>
      <div
        className={clsx('transition-colors duration-300 overflow-hidden ', {
          'bg-badem-brown dark:bg-main-black': !purpleBg,
          'bg-purple': purpleBg
        })}
      >
        {!hideNavbar && <Navbar purpleBg={purpleBg} />}
        <main className="min-h-screen">{children}</main>

        {!hideFooter && <Footer />}
      </div>
    </Helmet>
  )
}

export default PageLayout
