import {Box, Text, Button, Heading, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

const Work = () => {
    const colorButton = useColorModeValue('gray.600', 'gray.200')
    return (

        <Box marginBottom="36px">
            <Heading fontSize="20px"  as="h3" >Achievements</Heading>
            <Text>
                over the years I have had certain achievements that I can add to my portfolio.<br/> See them here:
            </Text>
            <Text></Text>
            <Button mt="12px" colorScheme='teal' bg={colorButton} size='sm'>
                <NextLink href="/portfolio">My portfolio</NextLink>
            </Button>
        </Box>
    )

}
export default Work
