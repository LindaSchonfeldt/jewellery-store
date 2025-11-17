import { Button, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

type CustomVariant = 'primary' | 'secondary' | 'ghost' | 'outline'

interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: CustomVariant
  children: ReactNode
}

const baseStyles: ButtonProps = {
  fontFamily: 'heading',
  fontSize: '14px',
  fontWeight: 'normal',
  borderRadius: 'none',
  px: 4,
  py: 2,
  transition: 'all 0.2s'
}

const variantStyles: Record<CustomVariant, ButtonProps> = {
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
    color: 'inherit',
    _hover: { bg: 'rgba(0, 0, 0, 0.05)' },
    _active: { bg: 'rgba(0, 0, 0, 0.1)' }
  },
  outline: {
    bg: 'transparent',
    borderWidth: '2px',
    borderColor: 'currentColor',
    color: 'inherit',
    _hover: { bg: 'rgba(0, 0, 0, 0.05)' },
    _active: { bg: 'rgba(0, 0, 0, 0.1)' }
  }
}

const CustomButton = ({
  variant = 'primary',
  children,
  ...props
}: CustomButtonProps) => {
  const styles = variantStyles[variant]

  return (
    <Button {...baseStyles} {...styles} {...props}>
      {children}
    </Button>
  )
}

export default CustomButton
