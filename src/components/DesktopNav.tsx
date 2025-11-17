import { Flex, Box, Button, Spacer } from '@chakra-ui/react'

const DesktopNav = () => (
  <Flex
    as='nav'
    align='center'
    justify='space-between'
    padding={4}
    position='fixed'
    top={0}
    left={0}
    width='100vw'
    zIndex={1000}
  >
    <Box fontWeight='bold'>Logo</Box>
    <Spacer />
    <Box>
      <Button variant='ghost' mr={2}>
        Home
      </Button>
      <Button variant='ghost' mr={2}>
        Shop
      </Button>
      <Button variant='ghost'>Contact</Button>
    </Box>
  </Flex>
)

export default DesktopNav
