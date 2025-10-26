import useSSRTheme from '@/hooks/useSSRTheme'
import React from 'react'

import Sun from '/src/assets/icons/sun.svg'
import Moon from '/src/assets/icons/moon.svg'
import clsx from 'clsx'

const ThemeToggle = () => {
  const { theme, setTheme } = useSSRTheme()

  return (
    <div
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="color-mode-switch cursor-pointer grid place-content-center h-9 w-9 lg:hover:text-black"
    >
      <div
        className={clsx('duration-300 absolute pointer-events-none', {
          'opacity-0': theme === 'dark'
        })}
      >
        <Sun />
      </div>
      <div
        className={clsx('duration-300 absolute pointer-events-none', {
          'opacity-0': theme === 'light'
        })}
      >
        <Moon />
      </div>
    </div>
  )
}

export default ThemeToggle
