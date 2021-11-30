import {Box, Heading} from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"
import Link from 'next/link'


const Logo = (props) => {
    const color = useColorModeValue('gray.900', 'gray.50')
    return (
        <Box ml="4px" cursor="pointer"  display="flex" alignItems="center" justifyItems="center" {...props}>
            <Link href='/' >
            <Heading as='h1' style={{fontFamily: 'Yellowtail, cursive', color:color, fontSize:46}}>P</Heading>
            </Link>
            <Link href='/' >
            <Heading style={{ color:color, fontSize:22, paddingLeft:18}}>Nguyen Phuong</Heading>
        </Link>
        </Box>
    )
}

export default Logo