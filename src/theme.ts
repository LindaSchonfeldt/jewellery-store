import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  globalCss: {
    body: {
      fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
      lineHeight: 1.5,
      fontWeight: 400
    }
  },
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'
        },
        body: {
          value: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'
        }
      },
      colors: {
        brand: {
          50: { value: '#e6f7f7' },
          100: { value: '#b3e6e6' },
          200: { value: '#80d5d5' },
          300: { value: '#4dc4c4' },
          400: { value: '#1ab3b3' },
          500: { value: '#009999' },
          600: { value: '#007a7a' },
          700: { value: '#005c5c' },
          800: { value: '#003d3d' },
          900: { value: '#001f1f' }
        }
      }
    }
  }
})

const system = createSystem(defaultConfig, customConfig)

export default system
