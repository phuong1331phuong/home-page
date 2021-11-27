import { Text, Box, Container } from "@chakra-ui/react"


const HomePage = () => {
  return(
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align='center'>
        <Text>Hello, World!</Text>
      </Box>
    </Container>
  )
}

export default HomePage