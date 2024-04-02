const colors = require('tailwindcss/colors')
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "node_modules/@zach.codes/react-calendar/dist/**/*.js"
  ],
  theme: {
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '5rem',
      40: '10rem',
      44: '11rem',
      48: '8rem',

      // 52: '13rem',
      // 56: '14rem',
      // 60: '15rem',
      // 64: '16rem',
      // 72: '18rem',
      // 80: '20rem',
      // 96: '24rem',
    },
    extend: {
      backgroundImage: {
        'bg1': "url('/bg6.png')",
        'bg2': "url('/bg4.png')",
        'bg3': "url('/bg5.png')",
      },

      borderRadius: {
        '4xl': '2rem',
      }
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
