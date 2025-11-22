import { Box, Button, Flex, Link, Spacer } from '@chakra-ui/react'
import { PiDiamondsFourLight } from 'react-icons/pi'

import { desktopNavItems } from '../../data/navItems'
import { useScrollBasedColor } from '../../hooks/useScrollBasedColor'

const DesktopNav = () => {
  const { textColor, hoverBg } = useScrollBasedColor({
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
          [4.jewels]
        </Link>
      </Flex>
      <Spacer />

      <Box fontFamily='heading'>
        {desktopNavItems.map((item) => (
          <Link key={item.to} href={item.to}>
            <Button
              variant='ghost'
              mr={2}
              color={textColor}
              _hover={{ bg: hoverBg }}
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </Box>
    </Flex>
  )
}

export default DesktopNav
