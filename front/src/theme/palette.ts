// theme/palette.ts
export const palette = {
  primary: {
    main: "#EEE9DD",
    dark: "#CEC4A6" // Hover state for primary
  },
  secondary: {
    main: "#D6D0B3"
  },
  error: {
    main: "#891C1B", // Brand red - moved from grey.900
    dark: '#65181C'
  },
  grey: {
    50: "#23363A",
    900: "#891C1B" // Keep for backwards compatibility
  },
  background: {
    paper: "#FAF5EF",
    default: "#FAF5EF"
  },
  text: {
    primary: "#131313",
    secondary: "#5E4740", // Brown text used in forms
    disabled: "#2c3e50" // Dark blue text
  },
  // Custom brand colors
  brand: {
    red: "#891C1B",
    beige: "#EEE9DD",
    gold: '#B49055',
    lightBeige: "#FAF5EF",
    darkBeige: "#CEC4A6",
    brownText: "#5E4740",
    whiteText: '#FFF',
    greyText: '#666',
    borderGrey: "#E6E6E6",
    placeholderGrey: "#A3A3A3",
    blackButton: "#000",
    overlayBlack: "rgba(0, 0, 0, 0.5)",
    errorText: "#721c24",
    placeholderContact: '#737373'
  }
}