// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react"

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const fonts= {
    body: "Signika , sans-serif",
    heading: "Yellowtail, cursive",
  }

// 3. extend the theme
const theme = extendTheme({ config, fonts })

export default theme