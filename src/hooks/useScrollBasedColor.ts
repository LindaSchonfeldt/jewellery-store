import { useEffect, useState } from 'react'

interface UseScrollBasedColorOptions {
  lightColor?: string
  darkColor?: string
  threshold?: number
}

export const useScrollBasedColor = (options?: UseScrollBasedColorOptions) => {
  const {
    lightColor = 'black',
    darkColor = 'white',
    threshold = 0.5
  } = options || {}

  const [textColor, setTextColor] = useState(lightColor)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollX || window.pageXOffset
      const breakpoint = window.innerWidth * threshold

      if (scrollPosition > breakpoint) {
        setTextColor(darkColor)
      } else {
        setTextColor(lightColor)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lightColor, darkColor, threshold])

  return textColor
}
