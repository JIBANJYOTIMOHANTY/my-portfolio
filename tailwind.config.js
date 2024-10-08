export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ans-serif'],
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 5s steps(50), blink .7s ",
        typing2: "typing 3s steps(100), blink .7s ",
        typing3: "typing 10s steps(50), blink .1s "
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    
  ],
}