import { Box, Heading, Text, ListItem, UnorderedList } from "@chakra-ui/layout"

const Target = () => {

  return (
    <Box display="flex" marginBottom="36px">
      <Box>
      <Heading as="h3" fontSize="20px" variant="section-title">
        Target
      </Heading>
      <UnorderedList>
        <ListItem>
          Short-term:
          <Text>I am a student at cryptographic engineering academy majoring in electronics and telecommunications. Also, I'm a freelancer (web developer). To develop myself and improve my knowledge, I am looking for an IoT developer internship.</Text>
        </ListItem>
        <ListItem>
          Long-term:
          <UnorderedList>
            <ListItem>
              Firmly on the career path of an AI engineer
            </ListItem>
            <ListItem>
              Well done my studies at the academy
            </ListItem>
            <ListItem>
              Complete myself
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
      </Box>
    </Box>
  )

}

export default Target