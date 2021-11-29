// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}
const styles= {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.300", "gray.800")(props),
      lineHeight: "base",
    },
  }),
}

const fonts= {
    body: "Signika , sans-serif",
    heading: "Fira Sans, sans-serif",
  }

// 3. extend the theme
const theme = extendTheme({ config, fonts ,styles})

export default theme