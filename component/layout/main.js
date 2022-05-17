import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({children, router}) => {
    return (
		<Box as='main' md={8}>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<title>Phuong Nguyen - Homepage</title>
				<link rel='icon' href='/icon/target.png' type='image/png' />
				<style>
					@import
					url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@1,500&family=Hind:wght@300;400;500&family=PT+Sans:ital@0;1&family=Signika:wght@500&family=Yellowtail&display=swap');
				</style>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossorigin
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&family=Pacifico&family=Roboto:ital,wght@0,300;0,400;1,100;1,300&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<Navbar />
			<Container maxW='container.md' mx='auto' pt={14}>
				{children}
			</Container>
			<Footer />
		</Box>
	);
}


export default Main