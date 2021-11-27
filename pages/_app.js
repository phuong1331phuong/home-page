// 1. Import the extendTheme function
// import { extendTheme } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../component/layout/main'
import theme from '../component/layout/theme'
// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// }

// const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`
function App({ Component, pageProps , router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
      <Component {...pageProps} key={router.route}/>
      </Layout>
    </ChakraProvider>
  )
}

export default App