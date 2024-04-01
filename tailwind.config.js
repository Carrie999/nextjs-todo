const colors = require('tailwindcss/colors')
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('/bg6.png')",
        'bg2': "url('/bg4.png')",
        'bg3': "url('/bg5.png')",
      },
    },

    colors: {
      todoPrimary: 'var(--color-todoPrimary)',
      todoSecondary: 'var(--color-todoSecondary)',
      todoSecondary2: 'var(--color-todoSecondary2)',
      header: 'var(--color-header)',
      headerText: 'var(--color-headerText)',
      layout: 'var(--color-layout)',
      content: 'var(--color-content)',
      primaryText: 'var(--color-primaryText)',
      black: 'var(--color-black)',
      title: 'var(--color-title)'
      // bgImg: 'var(--color-img)',

    },
  },
  plugins: [nextui(
    {
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // ... custom themes
      },
    }

  )],
};
