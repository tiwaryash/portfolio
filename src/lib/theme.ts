// portfolio/src/lib/theme.ts
export const themes = {
  dark: {
    background: '10 10 10',
    text: '255 255 255',
    primary: '59 130 246',
    secondary: '16 185 129',
    accent: '139 92 246',
  },
  light: {
    background: '255 239 204', // Light sandy color
    text: '10 10 10',
    primary: '37 99 235',
    secondary: '5 150 105',
    accent: '124 58 237',
  },
  nature: {
    background: '26 47 26',
    text: '229 231 235',
    primary: '74 222 128',
    secondary: '34 197 94',
    accent: '22 163 74',
  },
  urban: {
    background: '30 41 59',
    text: '248 250 252',
    primary: '99 102 241',
    secondary: '139 92 246',
    accent: '236 72 153',
  },
} as const;