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
          value: 'Turret Road, Arial, sans-serif'
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
      },
      fontSizes: {
        xs: { value: '0.75rem' }, // 12px
        sm: { value: '0.875rem' }, // 14px
        md: { value: '1rem' }, // 16px
        lg: { value: '1.125rem' }, // 18px
        xl: { value: '1.25rem' }, // 20px
        '2xl': { value: '1.5rem' }, // 24px
        '3xl': { value: '1.875rem' }, // 30px
        '4xl': { value: '2.25rem' }, // 36px
        '5xl': { value: '3rem' }, // 48px
        '6xl': { value: '3.75rem' }, // 60px
        '7xl': { value: '4.5rem' } // 72px
      },
      fontWeights: {
        thin: { value: 300 },
        normal: { value: 400 },
        medium: { value: 500 },
        semibold: { value: 600 },
        bold: { value: 700 }
      },
      lineHeights: {
        none: { value: 1 },
        tight: { value: 1.25 },
        normal: { value: 1.5 },
        relaxed: { value: 1.75 },
        loose: { value: 2 }
      }
    },
    semanticTokens: {
      fontSizes: {
        h1: { value: '{fontSizes.6xl}' }, // 60px
        h2: { value: '{fontSizes.5xl}' }, // 48px
        h3: { value: '{fontSizes.4xl}' }, // 36px
        h4: { value: '{fontSizes.3xl}' }, // 30px
        h5: { value: '{fontSizes.2xl}' }, // 24px
        h6: { value: '{fontSizes.xl}' } // 20px
      }
    }
  }
})

const system = createSystem(defaultConfig, customConfig)

export default system
