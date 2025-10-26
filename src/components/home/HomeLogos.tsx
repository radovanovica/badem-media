import React from 'react'

import HomeAnimatedLogo from './HomeAnimatedLogo'
import { logos } from '@/data/homeLogosList'

const HomeLogos = () => {
  return (
    <div className="w-full">
      <div
        className="grid grid-cols-2 lg:grid-cols-4 justify-items-start w-full sm:gap-x-12 
                    xl:gap-x-0 gap-y-0 sm:gap-y-10"
      >
        {logos.map((props, i) => (
          <div
            key={i}
            className="relative flex items-center justify-center w-full h-44 overflow-hidden"
          >
            <HomeAnimatedLogo {...props} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeLogos
