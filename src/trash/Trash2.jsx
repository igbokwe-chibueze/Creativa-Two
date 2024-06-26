/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
    return ({ opacityValue }) => {
      if (opacityValue !== undefined) {
        return `rgba(var(${variableName}), ${opacityValue})`
      }
      return `rgb(var(${variableName}))`
    }
  }
  
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  
    darkMode: 'class',
  
    theme: {
      extend: {
        fontFamily: {
          baseFont: ["Merriweather", 'serif'],
        },
        textColor: {
          skin: {
            base: withOpacity('--color-text-base'),
            muted: withOpacity('--color-text-muted'),
            muted2: withOpacity('--color-text-muted2'),
            inverted: withOpacity('--color-text-inverted'),
            inverted2: withOpacity('--color-text-inverted2'),
            icon: withOpacity('--color-text-icon'),
            'icon-hover': withOpacity('--color-text-icon-hover'),
          },
        },
        backgroundColor: {
          skin: {
            fill: withOpacity('--color-fill'),
            'fill-muted': withOpacity('--color-fill-muted'),
            'fill-muted2': withOpacity('--color-fill-muted2'),
            'fill-muted-hover': withOpacity('--color-fill-muted-hover'),
            'button-accent': withOpacity('--color-button-accent'),
            'button-accent-hover': withOpacity('--color-button-accent-hover'),
            'button-muted-hover': withOpacity('--color-button-muted-hover'),
          },
        },
        ringColor: {
          skin: {
            focus: withOpacity('--color-focus'),
            focus2: withOpacity('--color-focus2'),
          },
        },
        borderColor: {
          skin: {
            border: withOpacity('--color-border'),
            border2: withOpacity('--color-border2'),
          },
        },
        gradientColorStops: {
          skin: {
            hue: withOpacity('--color-fill'),
          },
        },
      },
    },
    plugins: [],
  }