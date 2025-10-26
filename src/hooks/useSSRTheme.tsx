import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function useSSRTheme() {
  const theme = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return {
    ...theme,
    theme: mounted
      ? theme.theme === 'system'
        ? theme.systemTheme
        : theme.theme
      : 'dark',
    setTheme: (mode: string) => mounted && theme.setTheme(mode),
    isMounted: mounted
  }
}
