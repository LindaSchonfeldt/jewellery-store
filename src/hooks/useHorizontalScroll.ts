import { useEffect, useRef } from 'react'

export const useHorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Disable vertical scroll initially
    document.body.style.overflowY = 'hidden'
    const el = scrollRef.current
    if (!el) return

    // Enable horizontal scroll with mouse wheel
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        el.scrollLeft += e.deltaY
        e.preventDefault()
      }
    }

    // Enable vertical scroll after horizontal scroll is complete
    const handleScroll = () => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        document.body.style.overflowY = 'auto'
      } else {
        document.body.style.overflowY = 'hidden'
      }
    }

    el.addEventListener('wheel', handleWheel, { passive: false })
    el.addEventListener('scroll', handleScroll)

    return () => {
      document.body.style.overflowY = 'auto'
      el.removeEventListener('wheel', handleWheel)
      el.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollRef
}
