import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'

import CustomButton from '../components/ui/CustomButton'
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
            <VStack height='100%' align='center' justify='center' gap={4}>
              <Heading as='h1' fontSize={42}>
                This is the new normal
              </Heading>
              <Text>
                Discover unique jewellery pieces crafted with passion and
                precision. Elevate your style with us.
              </Text>
              <CustomButton variant='primary'>Get Started</CustomButton>
            </VStack>
          </Box>
          <Box width='100vw' height='100vh' bg='gray.900' p={0} m={0}>
            <VStack height='100%' justify='center' align='center'>
              <Heading as='h2' color='white' pb={4} textAlign='center'>
                Explore Our Exclusive Collections
              </Heading>
              <HStack justify='center' gap={8}>
                <Box maxW='md' w='350px' p={4} bg='whiteAlpha.900'>
                  <Heading as='h3' mb={2}>
                    Card Title
                  </Heading>
                  <Text mb={4}>This is the card content.</Text>
                  <CustomButton variant='secondary'>Action</CustomButton>
                </Box>
                <Box maxW='sm' w='220px' p={4} bg='whiteAlpha.900'>
                  <Heading as='h3' mb={2}>
                    Card Title
                  </Heading>
                  <Text mb={4}>This is the card content.</Text>
                  <CustomButton variant='secondary'>Action</CustomButton>
                </Box>
              </HStack>
            </VStack>
          </Box>
          <Box width='100vw' height='100vh' bg='gray.300' p={0} m={0}></Box>
        </Flex>
      </Box>
      <Box width='100%' minHeight='100vh' p={0} m={0}>
        <Box width='100%' height='100vh' bg='gray.100'>
          Vertical section 1
        </Box>
        <Box width='100%' height='100vh' bg='gray.200'>
          Vertical section 2
        </Box>
      </Box>
    </>
  )
}

export default Home
