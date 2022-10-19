module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#15133C',
        'custom-gray': '#73777B',
        'custom-orange': '#EC994B',
        'custom-white': '#F1EEE9',
        'gradient-orange':
          'bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500',
      },
    },
  },
  plugins: [],
};
