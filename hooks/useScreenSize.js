import { useState, useEffect, useCallback } from 'react'


const useScreenSize = () => {
  const isClient = typeof window === 'object'

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : 0,
    }
  }, [isClient])

  const [screenSize, setScreenSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return
    }

    function handleResize () {
      setScreenSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize
}

export default useScreenSize
