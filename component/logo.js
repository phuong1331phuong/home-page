import {Box, Text, Heading} from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"


const Logo = () => {
    const color = useColorModeValue('gray.900', 'gray.50')
    return (
        <Box ml="4px"  display="flex" alignItems="center" justifyItems="center" >
            <Heading as='h1' style={{ color:color, fontSize:50}}><a href="/">P</a></Heading>
            <Text style={{ color:color, fontSize:18, marginLeft:12}}><a href="/">Nguyen Phuong - Homepage</a></Text>
        </Box>
    )
}

export default Logo