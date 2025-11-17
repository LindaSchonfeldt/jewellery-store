import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      primary: {
        bg: 'gray.900',
        color: 'white',
        _hover: { bg: 'gray.700' },
        _active: { bg: 'gray.800' }
      },
      secondary: {
        bg: 'gray.200',
        color: 'gray.900',
        _hover: { bg: 'gray.300' },
        _active: { bg: 'gray.400' }
      },
      ghost: {
        bg: 'transparent',
        color: 'inherit'
      },
      outline: {
        bg: 'transparent',
        color: 'inherit',
        border: '2px solid',
        borderColor: 'currentColor',
        _hover: { bg: 'rgba(0, 0, 0, 0.05)' },
        _active: { bg: 'rgba(0, 0, 0, 0.1)' }
      }
    }
  }
})
