import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CTA accent: warm amber/fire-orange — used ONLY on buttons and phone links, never decorative
        accent: {
          DEFAULT: '#E8500A',
          hover: '#C94208', // darkened 10% for hover state to maintain AA contrast
        },
        // Neutral palette — full tonal range for text, surfaces, and borders
        neutral: {
          950: '#0F0F0F',  // near-black: primary text on light backgrounds
          900: '#1C1C1E',  // dark gray: card headers, nav bg
          500: '#6B7280',  // mid gray: secondary text, captions
          50:  '#F5F5F0',  // light warm off-white: page backgrounds, section alternates
        },
        // Alias for semantic clarity in components
        brand: {
          dark:  '#0F0F0F',
          card:  '#1C1C1E',
          muted: '#6B7280',
          bg:    '#F5F5F0',
        },
        // Trust/success green — for badges and trust signals (accent is CTA-only, so we need a separate trust color)
        trust: {
          DEFAULT: '#15803D', // green-700, passes AA on white
          light:   '#DCFCE7', // green-100, for badge backgrounds
        },
      },
      fontFamily: {
        // Display font (Sora) — loaded via next/font/google and injected as CSS var
        display: ['var(--font-sora)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Body font (Inter) — loaded via next/font/google and injected as CSS var
        body:    ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Alias sans to body so Tailwind's default prose utilities use Inter
        sans:    ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        // Design system radius tokens — consistent across all components
        sm:  '4px',
        md:  '8px',
        lg:  '12px',
        xl:  '16px',
        '2xl': '24px',
      },
      boxShadow: {
        // Soft shadows only — no hard/dark shadows, keeps design premium and calm
        card:     '0 1px 4px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)',
        elevated: '0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)',
      },
      spacing: {
        // Extended spacing beyond Tailwind defaults (4px base)
        18: '4.5rem',   // 72px — useful for section padding on mobile
        22: '5.5rem',   // 88px — nav height + section gap
        26: '6.5rem',   // 104px
        30: '7.5rem',   // 120px — generous hero padding
      },
      fontSize: {
        // Fluid display size for hero headlines — scales with viewport
        'display-lg': ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      transitionDuration: {
        // Standard hover transition — 150ms is fast enough to feel snappy, slow enough to look intentional
        DEFAULT: '150ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
    },
  },
  plugins: [],
}

export default config
