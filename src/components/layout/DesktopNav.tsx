import { Box, Button, Flex, Link, Spacer } from '@chakra-ui/react'
import { PiDiamondsFourLight } from 'react-icons/pi'

import { useScrollBasedColor } from '../../hooks/useScrollBasedColor'

const DesktopNav = () => {
  const textColor = useScrollBasedColor({
    lightColor: 'black',
    darkColor: 'white'
  })

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
        color={textColor}
        fontSize='18px'
        fontFamily='heading'
      >
        <Link href='/'>
          <PiDiamondsFourLight />
          [...jewels]
        </Link>
      </Flex>
      <Spacer />
      <Box fontFamily='heading'>
        <Button variant='ghost' mr={2} color={textColor}>
          Shop
        </Button>
        <Button variant='ghost' color={textColor}>
          About
        </Button>
        <Button variant='ghost' color={textColor}>
          Contact
        </Button>
      </Box>
    </Flex>
  )
}

export default DesktopNav
