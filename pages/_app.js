import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../component/layout/main'
import theme from '../component/layout/theme'
import {AnimatePresence } from 'framer-motion'

function App({ Component, pageProps, router }) {
	return (
		<ChakraProvider theme={theme}>
			<Layout router={router}>
				<AnimatePresence>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
		</ChakraProvider>
	);
}

export default App