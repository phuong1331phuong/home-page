import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({children, router}) => {
    return(
        <Box as="main" md={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Phuong Nguyen - Homepage</title>
               <style>
                @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@1,500&family=Hind:wght@300;400;500&family=PT+Sans:ital@0;1&family=Signika:wght@500&family=Yellowtail&display=swap');
                </style>
            </Head>
            <Navbar/>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}


export default Main