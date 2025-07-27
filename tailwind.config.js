/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure these paths correctly cover all your files using Tailwind classes
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // Crucial: Add this line to ensure your client-side files are scanned
    './client/src/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        // Standard Shadcn/UI colors, mapped to CSS variables (from your :root in index.css)
        // This is crucial for resolving classes like 'border-border'
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
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
        // Your custom JAKOM colors (already present, kept as is)
        'jakom-primary': '#0A1128',
        'jakom-accent': '#C9B072',
        'jakom-success': '#4CAF50',
        'jakom-text-light': '#F8F8F8',
        'jakom-text-secondary': '#CCD2E3',
      },
      // Adding borderRadius, keyframes, and animation for completeness,
      // as these are often used with Shadcn/UI and related CSS variables.
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
    },
  },
  // Ensure tailwindcss-animate is included if you're using animations
  plugins: [require('tailwindcss-animate')],
};