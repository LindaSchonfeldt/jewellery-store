import { Box, Flex, Heading } from '@chakra-ui/react'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'

const Home = () => {
  const scrollRef = useHorizontalScroll()

  return (
    <>
      <Box
        id='horizontal-scroll-container'
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
        </Flex>
      </Box>
      <Box width='100%' minHeight='100vh' p={0} m={0}>
        <Box width='100%' height='100vh' bg='blue.100'>
          Vertical section 1
        </Box>
        <Box width='100%' height='100vh' bg='blue.200'>
          Vertical section 2
        </Box>
      </Box>
    </>
  )
}

export default Home
