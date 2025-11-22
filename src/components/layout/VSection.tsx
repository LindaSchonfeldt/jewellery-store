import { Box } from '@chakra-ui/react'

interface SectionProps {
  children: React.ReactNode
  fullBleed?: boolean
}

const VSection = ({ children, fullBleed = false }: SectionProps) => {
  return (
    <Box
      as='section'
      py={{ base: 8, md: 16 }}
      px={fullBleed ? 0 : { base: 4, md: 8 }}
      width={fullBleed ? '100vw' : 'auto'}
      position={fullBleed ? 'relative' : undefined}
      left={fullBleed ? '50%' : undefined}
      right={fullBleed ? '50%' : undefined}
      marginLeft={fullBleed ? '-50vw' : undefined}
      marginRight={fullBleed ? '-50vw' : undefined}
    >
      {children}
    </Box>
  )
}

export default VSection
