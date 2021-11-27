import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../component/layout/main'
import theme from '../component/layout/theme'

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