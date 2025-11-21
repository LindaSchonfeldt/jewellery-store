import { Box, Flex } from '@chakra-ui/react'
import { IoDiamond } from 'react-icons/io5'

const MobileNav = () => {
  return (
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
      <Flex
        direction='row'
        alignItems='center'
        fontWeight='medium'
        color='black'
        fontSize='18px'
      >
        <IoDiamond />
        [4.jewels]
      </Flex>
      <Box zIndex={1000} p={2} color='black' fontSize='24px'>
        <IoDiamond />
      </Box>
    </Flex>
  )
}

export default MobileNav
