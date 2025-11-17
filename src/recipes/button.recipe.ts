import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
  className: 'button',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'semibold',
    borderRadius: 'md',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
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
      outline: {
        borderWidth: '1px',
        borderColor: 'gray.900',
        color: 'gray.900',
        _hover: { bg: 'gray.100' },
        _active: { bg: 'gray.200' }
      }
    },
    size: {
      sm: {
        fontSize: 'sm',
        px: 3,
        py: 2
      },
      md: {
        fontSize: 'md',
        px: 4,
        py: 2
      },
      lg: {
        fontSize: 'lg',
        px: 6,
        py: 3
      }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})
