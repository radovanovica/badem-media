import React, { useEffect, useState } from 'react'

const useWindowHeight = () => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(window.innerHeight)

    window.onresize = () => {
      setHeight(window.innerHeight)
    }
  }, [])

  return height
}

export default useWindowHeight
