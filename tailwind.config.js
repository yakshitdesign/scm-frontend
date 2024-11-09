/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './employee.html',
    './employee/create.html',
    './employee/view.html',
    './employee/edit.html',
    './projects.html',
    './projects/create.html',
    './projects/edit.html',
    './projects/view.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Schibsted Grotesk"', 'sans-serif'],
      },
      screens: {
        xs: '576px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      extend: {
        colors: {
          neutral: {
            25: '#F9F9FB',
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
            950: '#030712',
          },
          primary: {
            25: '#F9F9FB',
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
            950: '#030712',
          },
        },
      },
    },
  },
  plugins: [],
};

