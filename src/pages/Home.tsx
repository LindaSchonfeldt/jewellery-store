import { Box, Flex, Heading } from '@chakra-ui/react'
import { h1 } from 'framer-motion/client'
import { useEffect, useRef } from 'react'

const Home = () => {
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

  return (
    <Box
      ref={scrollRef}
      overflowX='auto'
      whiteSpace='nowrap'
      width='100vw'
      height='100vh'
      p={0}
      m={0}
    >
      <Flex direction='row' width='max-content' height='100vh' p={0} m={0}>
        <Box width='100vw' height='100vh' bg='gray.50' p={0} m={0}>
          <Flex height='100%' align='center' justify='center'>
            <Heading as='h1' fontSize={42}>
              Welcome to us
            </Heading>
          </Flex>
        </Box>
        <Box width='100vw' height='100vh' bg='gray.900' p={0} m={0}>
          Item 2
        </Box>
        <Box width='100vw' height='100vh' bg='gray.300' p={0} m={0}>
          Item 3
        </Box>
        {/* Add more items as needed */}
      </Flex>
    </Box>
  )
}

export default Home
