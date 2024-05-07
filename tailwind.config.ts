import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        lg: '2rem',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          '01': '#FDFFE1',
          '02': '#000000',
          '03': '#FFFFFF',
          '04': '#F9F6F9',
        },
        disabled: '#808080',
        'note-error': '#F44336',
        'note-success': '#2E7D32',
        grey: '#D9D9D9',
        line: '#D9D9D9',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        serif: ['var(--font-galins)'],
        sans: ['var(--font-sofia)'],
      },
      fontSize: {
        xxs: ['0.625rem', 'normal'],
        xs: ['0.75rem', 'normal'],
        sm: ['0.875rem', '1rem'],
        base: ['1rem', '1.25rem'],
        xl: ['1.25rem', '1.5rem'],
        '2xl': ['1.5rem', '1.75rem'],
        '4xl': ['2.125rem', '2.5rem'],
        '5xl': ['3rem', 'normal'],
        '6xl': ['3.75rem', '4.5rem'],
        '8xl': ['6rem', '6.75rem'],
        '9xl': ['7.75rem', 'normal'],
      },
      backgroundImage: {
        'base-footer': 'url("/images/footer.png")',
      },
      transitionDuration: {
        4000: '4000ms',
      },
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addVariant }) {
      addVariant('smu', "@media screen and (max-width: calc(theme('screens.sm') - 1px))")
      addVariant('mdu', "@media screen and (max-width: calc(theme('screens.md') - 1px))")
      addVariant('beter', ['&:before', '&:after'])
    }),
  ],
} satisfies Config

export default config
