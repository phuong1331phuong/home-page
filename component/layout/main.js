import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({children, router}) => {
    return(
        <Box as="main" md={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Phuong Nguyen - Homepage</title>
                <link rel="icon" href="/icon/target.png" type="image/png"/>
               <style>
                @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@1,500&family=Hind:wght@300;400;500&family=PT+Sans:ital@0;1&family=Signika:wght@500&family=Yellowtail&display=swap');
                </style>
            </Head>
            
            <Navbar/>
            <Container maxW="container.sm" mx="auto" pt={14}>
                {children}
            </Container>
            <Footer />
        </Box>
    )
}


export default Main