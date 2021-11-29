import {Box, Text, Button, Heading, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

const Work = () => {
    const colorButton = useColorModeValue('gray.500', 'gray.800')
    return (

        <Box marginBottom="36px">
            <Heading fontSize="20px"  as="h3" >Work</Heading>
            <Text>
                I am a student at cryptographic engineering academy. Also, I'm a freelancer (web developer).In order to develop myself and improve my knowledge, I am looking for an IoT developer internship while in my 2nd year of university.
            </Text>
            <Button mt="12px" colorScheme='teal' size='sm'>
                <NextLink href="/portfolio">My portfolio</NextLink>
            </Button>
        </Box>
    )

}
export default Work
