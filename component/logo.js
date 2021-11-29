import {Box, Text, Heading} from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"


const Logo = (props) => {
    const color = useColorModeValue('gray.900', 'gray.50')
    return (
        <Box ml="4px"  display="flex" alignItems="center" justifyItems="center" {...props}>
            <Heading as='h1' style={{fontFamily: 'Yellowtail, cursive', color:color, fontSize:46}}><a href="/">P</a></Heading>
            <Heading style={{ color:color, fontSize:22, paddingLeft:18}}><a href="/">Nguyen Phuong</a></Heading>
        </Box>
    )
}

export default Logo