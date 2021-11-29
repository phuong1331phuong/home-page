import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/layout"


const Target = () => {

  return (
    <Box display="flex" marginBottom="36px">
      <Box>
      <Heading as="h3" fontSize="20px" variant="section-title">
        Target
      </Heading>
      <UnorderedList>
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
        <ListItem>
          Short-term:
          <UnorderedList>
            <ListItem>
              Get an internship Iot
            </ListItem>
            <ListItem>
              Build good relationships
            </ListItem>
            <ListItem>
              Learn new skills
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
      </Box>
    </Box>
  )

}

export default Target