import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'

import home1 from '../assets/home1.jpg'
import rings from '../assets/rings.jpg'
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
          <Box
            as='section'
            width='100vw'
            height='100vh'
            bg='gray.50'
            p={0}
            m={0}
          >
            <VStack
              width='100vw'
              height='100%'
              align='center'
              justify='center'
              gap={4}
            >
              <Box position='relative' width='100%'>
                <Image
                  src={home1}
                  alt='Jewellery'
                  width='100%'
                  height={{ base: '100px', md: '200px' }}
                  objectFit='cover'
                  objectPosition='50% 70%'
                />
              </Box>
              <Heading as='h1' fontSize={{ base: '3xl', md: '4xl' }}>
                The future of fine jewellery
              </Heading>
              <VStack textAlign='center' px={8} mb={4}>
                <Text>
                  Responsibly created diamonds with uncompromising beauty.
                </Text>
                <Text fontWeight='bold'>Minimal. Conscious. Exquisite.</Text>
              </VStack>
              <CustomButton variant='primary'>Discover more</CustomButton>
            </VStack>
          </Box>

          {/* Second section */}
          <Box
            as='section'
            width='100vw'
            height='100vh'
            bg='gray.900'
            p={0}
            m={0}
          >
            <VStack height='100%' justify='center' align='center'>
              <Heading as='h2' color='white' pb={4} textAlign='center'>
                Explore Our Exclusive Collections
              </Heading>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                justify='center'
                gap={4}
                width='100%'
                px={8}
              >
                <Box flex={1} p={4} bg='whiteAlpha.900'>
                  <Image src={rings} objectFit='cover' />
                  <Heading as='h3' mb={2}>
                    Rings
                  </Heading>
                  <Text mb={4}>This is the card content.</Text>
                  <CustomButton variant='secondary'>Action</CustomButton>
                </Box>
                <Box flex={1} p={4} bg='whiteAlpha.900'>
                  <Heading as='h3' mb={2}>
                    Necklaces
                  </Heading>
                  <Text mb={4}>This is the card content.</Text>
                  <CustomButton variant='secondary'>Action</CustomButton>
                </Box>
              </Flex>
            </VStack>
          </Box>

          {/* Third section */}
          <Box
            as='section'
            width='100vw'
            height='100vh'
            bg='gray.300'
            p={0}
            m={0}
          ></Box>
        </Flex>
      </Box>

      {/* Vertical sections */}
      <Box as='section' width='100%' minHeight='100vh' p={0} m={0}>
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
