import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack
} from '@chakra-ui/react'

import home1 from '../assets/home1.jpg'
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
        {/* First section */}
        <Flex direction='row' width='max-content' height='100vh' p={0} m={0}>
          <Box width='100vw' height='100vh' bg='gray.50' p={0} m={0}>
            <VStack
              as='section'
              height='100%'
              align='center'
              justify='center'
              gap={4}
            >
              <Image
                src={home1}
                alt='Jewellery'
                width='medium'
                height='medium'
              />
              <Heading as='h1' fontSize={42}>
                The future of fine jewellery
              </Heading>
              <Text>
                Responsibly created diamonds with uncompromising beauty.
                Minimal. Conscious. Exquisite.
              </Text>
              <CustomButton variant='primary'>Discover more</CustomButton>
            </VStack>
          </Box>

          {/* Second section */}
          <Box width='100vw' height='100vh' bg='gray.900' p={0} m={0}>
            <VStack height='100%' justify='center' align='center'>
              <Heading as='h2' color='white' pb={4} textAlign='center'>
                Explore Our Exclusive Collections
              </Heading>
              <HStack justify='center' gap={8}>
                <Box maxW='md' w='350px' p={4} bg='whiteAlpha.900'>
                  <Heading as='h3' mb={2}>
                    Rings
                  </Heading>
                  <Text mb={4}>This is the card content.</Text>
                  <CustomButton variant='secondary'>Action</CustomButton>
                </Box>
                <Box maxW='sm' w='220px' p={4} bg='whiteAlpha.900'>
                  <Heading as='h3' mb={2}>
                    Necklaces
                  </Heading>
                  <Text mb={4}>This is the card content.</Text>
                  <CustomButton variant='secondary'>Action</CustomButton>
                </Box>
              </HStack>
            </VStack>
          </Box>
          {/* Third section */}
          <Box width='100vw' height='100vh' bg='gray.300' p={0} m={0}></Box>
        </Flex>
      </Box>
      {/* Vertical sections */}
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
