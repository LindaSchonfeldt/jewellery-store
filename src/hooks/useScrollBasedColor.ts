import { useEffect, useState } from 'react'

interface UseScrollBasedColorOptions {
  lightColor?: string
  darkColor?: string
  hoverLightBg?: string
  hoverDarkBg?: string
  scrollContainerId?: string
}

const isColorDark = (color: string): boolean => {
  // Convert color to RGB
  const div = document.createElement('div')
  div.style.color = color
  document.body.appendChild(div)
  const rgb = window.getComputedStyle(div).color
  document.body.removeChild(div)

  // Extract RGB values
  const match = rgb.match(/\d+/g)
  if (!match) return false

  const [r, g, b] = match.map(Number)

  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  return luminance < 0.5
}

export const useScrollBasedColor = (options?: UseScrollBasedColorOptions) => {
  const {
    lightColor = 'black',
    darkColor = 'white',
    hoverLightBg = '#f0f0f0',
    hoverDarkBg = '#222',
    scrollContainerId = 'horizontal-scroll-container'
  } = options || {}

  const [textColor, setTextColor] = useState<string | null>(null)
  const [hoverBg, setHoverBg] = useState<string | null>(null)

  useEffect(() => {
    const scrollContainer = document.getElementById(scrollContainerId)
    if (!scrollContainer) return

    const handleScroll = () => {
      // Get the element at the center of the viewport
      const centerX = window.innerWidth / 2
      const element = document.elementFromPoint(centerX, 100) // 100px from top (nav area)

      if (!element) return

      // Get computed background color
      const bgColor = window.getComputedStyle(element).backgroundColor

      // Determine if background is dark or light
      if (isColorDark(bgColor)) {
        setTextColor(darkColor)
        setHoverBg(hoverDarkBg)
      } else {
        setTextColor(lightColor)
        setHoverBg(hoverLightBg)
      }
    }

    // Set initial color immediately
    handleScroll()

    scrollContainer.addEventListener('scroll', handleScroll)

    // Also run on window resize to recalculate
    window.addEventListener('resize', handleScroll)

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [lightColor, darkColor, hoverLightBg, hoverDarkBg, scrollContainerId])

  return {
    textColor: textColor || lightColor,
    hoverBg: hoverBg || hoverLightBg
  }
}
