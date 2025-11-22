import { Box, Flex, Link, Portal, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { IoDiamond } from 'react-icons/io5'

import { mobileNavItems } from '../../data/navItems'
import HamburgerIcon from '../ui/HamburgerIcon'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen(!isOpen)
  const handleClose = () => setIsOpen(false)

  return (
    <>
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
          <Link href='/'>
            <IoDiamond />
            [4.jewels]
          </Link>
        </Flex>
        <Box
          zIndex={1000}
          color='black'
          onClick={handleToggle}
          cursor='pointer'
          bg='gray.50'
          p={3}
        >
          <HamburgerIcon isOpen={isOpen} />
        </Box>
      </Flex>

      {isOpen && (
        <Portal>
          <Box
            position='fixed'
            top='0'
            left='0'
            right='0'
            bottom='0'
            zIndex={90}
            onClick={handleClose}
          >
            <Box
              position='absolute'
              top='0'
              left='0'
              right='0'
              bottom='0'
              bg='blackAlpha.600'
            />
            <Box
              position='absolute'
              top='0'
              right='0'
              width='100%'
              maxWidth='500px'
              height='auto'
              maxHeight='100vh'
              bg='white'
              pt='70px'
              px={6}
              overflowY='auto'
              onClick={(e) => e.stopPropagation()}
            >
              <VStack gap={6} align='stretch' pb={8}>
                {mobileNavItems.map((item) => (
                  <Link
                    key={item.to}
                    href={item.to}
                    color='black'
                    _hover={{ color: 'gray.600' }}
                    transition='color 0.2s'
                    fontSize='18px'
                    fontWeight='medium'
                    onClick={handleClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </VStack>
            </Box>
          </Box>
        </Portal>
      )}
    </>
  )
}

export default MobileNav
