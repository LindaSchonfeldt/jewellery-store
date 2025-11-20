import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'

import earrings1 from '../assets/earrings1.webp'
import home from '../assets/home.webp'
import necklaces1 from '../assets/necklaces1.webp'
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
                  src={home}
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
                <Text fontFamily='heading' fontWeight='bold' fontSize='lg'>
                  Minimal. Conscious. Exquisite.
                </Text>
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
          ></Box>

          {/* Third section */}
          <Box
            as='section'
            width='100vw'
            height='100vh'
            bg='gray.300'
            p={0}
            m={0}
          >
            <Flex
              height='100%'
              justify='center'
              align='center'
              overflowY={{ base: 'auto', md: 'visible' }}
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                justify='center'
                gap={4}
                width='100%'
                px={8}
              >
                <Box flex={1} p={4} bg='whiteAlpha.900'>
                  <Image
                    src={rings}
                    width='100%'
                    height={{ base: '150px', md: '300px' }}
                    objectFit='cover'
                  />
                  <Heading as='h3' mb={2} fontSize={{ base: 'md', md: 'xl' }}>
                    Rings
                  </Heading>
                  <Text mb={4} fontSize={{ base: 'sm', md: 'md' }}>
                    This is the card content.
                  </Text>
                  <CustomButton
                    variant='secondary'
                    size={{ base: 'sm', md: 'md' }}
                  >
                    Action
                  </CustomButton>
                </Box>
                <Box flex={1} p={4} bg='whiteAlpha.900'>
                  <Box
                    position='relative'
                    width='100%'
                    height={{ base: '150px', md: '300px' }}
                  >
                    <Image
                      src={necklaces1}
                      objectFit='cover'
                      width='100%'
                      height='100%'
                      objectPosition='30% 95%'
                    />
                  </Box>

                  <Heading as='h3' mb={2} fontSize={{ base: 'md', md: 'lg' }}>
                    Necklaces
                  </Heading>
                  <Text mb={4} fontSize={{ base: 'sm', md: 'md' }}>
                    This is the card content.
                  </Text>
                  <CustomButton
                    variant='secondary'
                    size={{ base: 'sm', md: 'md' }}
                  >
                    Action
                  </CustomButton>
                </Box>
              </Flex>
            </Flex>
          </Box>

          {/* Fourth section */}
          <Box
            as='section'
            width='100vw'
            height='100vh'
            bg='gray.300'
            p={0}
            m={0}
          >
            <Flex
              height='100%'
              justify='center'
              align='center'
              overflowY={{ base: 'auto', md: 'visible' }}
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                justify='center'
                gap={4}
                width='100%'
                px={8}
              >
                <Box flex={1} p={4} bg='whiteAlpha.900'>
                  <Image
                    src={rings}
                    width='100%'
                    height={{ base: '150px', md: '300px' }}
                    objectFit='cover'
                  />
                  <Heading as='h3' mb={2} fontSize={{ base: 'md', md: 'xl' }}>
                    Rings
                  </Heading>
                  <Text mb={4} fontSize={{ base: 'sm', md: 'md' }}>
                    This is the card content.
                  </Text>
                  <CustomButton
                    variant='secondary'
                    size={{ base: 'sm', md: 'md' }}
                  >
                    Action
                  </CustomButton>
                </Box>
                <Box flex={1} p={4} bg='whiteAlpha.900'>
                  <Box
                    position='relative'
                    width='100%'
                    height={{ base: '150px', md: '300px' }}
                  >
                    <Image
                      src={necklaces1}
                      objectFit='cover'
                      width='100%'
                      height='100%'
                      objectPosition='30% 95%'
                    />
                  </Box>

                  <Heading as='h3' mb={2} fontSize={{ base: 'md', md: 'lg' }}>
                    Necklaces
                  </Heading>
                  <Text mb={4} fontSize={{ base: 'sm', md: 'md' }}>
                    This is the card content.
                  </Text>
                  <CustomButton
                    variant='secondary'
                    size={{ base: 'sm', md: 'md' }}
                  >
                    Action
                  </CustomButton>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Home
