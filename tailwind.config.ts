import type { Config } from 'tailwindcss';

// Design tokens extraídos do Figma POTUX-003 (nó 2151:15208)
// Mantenha sincronizado com os Variables do Figma.

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Brand/Primary
          yellow: '#ffb800',
          'yellow-01': '#ffcb31',
          brown: '#371b01',
          black: '#111111',
          // Brand/Secondary
          'yellow-light': '#ffd666',
          'yellow-dark': '#e6ac00',
          'beige-light': '#f8f6f0',
          // Neutral
          white: '#ffffff',
          'text-primary': '#121212',
          'text-secondary': '#2e2e2e',
          'text-muted': '#6f6f6f',
          // Sistema (verde "Quem está por trás")
          green: '#0f7b3a',
          'info-blue': '#1f4fd8',
        },
      },
      fontFamily: {
        // Títulos: Kufam (Figma)
        heading: ['var(--font-kufam)', 'system-ui', 'sans-serif'],
        // Corpo + kickers: DM Sans
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        // Botões: Inter Bold
        button: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Tokens tipográficos do Figma
        kicker: ['16px', { lineHeight: '24px', letterSpacing: '0', fontWeight: '500' }],
        content: ['16px', { lineHeight: '24px', letterSpacing: '0', fontWeight: '400' }],
        h4: ['20px', { lineHeight: '24px', letterSpacing: '0.5px', fontWeight: '700' }],
        h2: ['40px', { lineHeight: '48px', letterSpacing: '0.5px', fontWeight: '400' }],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '4xl': '32px',
      },
      boxShadow: {
        // enabled — sombra padrão dos cards (triple drop shadow do Figma)
        card: '0 0 16px 0 rgba(0,0,0,0.08), 0 0 4px 0 rgba(0,0,0,0.08), 0 4px 24px 0 rgba(0,0,0,0.08)',
        soft: '0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      spacing: {
        // Sizing tokens
        'col-3': '270px',
        'col-4': '368px',
      },
    },
  },
  plugins: [],
};

export default config;
