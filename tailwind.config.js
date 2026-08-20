/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit_400Regular', 'Outfit_600SemiBold', 'Outfit_700Bold'],
        mono: ['SpaceMono_400Regular', 'SpaceMono_700Bold'],
      },
    },
  },
  plugins: [],
};
