
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      keyframes: {
        dots: {
          '0%, 20%': { content: '"."' },
          '40%': { content: '".."' },
          '60%': { content: '"..."' },
          '100%': { content: '"."' },
        },
      },
      animation: {
        dots: 'dots 1.5s steps(1, end) infinite',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}