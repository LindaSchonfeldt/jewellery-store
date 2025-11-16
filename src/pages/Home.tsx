import { Box, Flex } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box overflowX='auto' whiteSpace='nowrap' p={4}>
      <Flex gap={4}>
        <Box minW='200px' bg='teal.100' p={4} borderRadius='md'>
          Item 1
        </Box>
        <Box minW='200px' bg='teal.200' p={4} borderRadius='md'>
          Item 2
        </Box>
        <Box minW='200px' bg='teal.300' p={4} borderRadius='md'>
          Item 3
        </Box>
        {/* Add more items as needed */}
      </Flex>
    </Box>
  )
}

export default Home
