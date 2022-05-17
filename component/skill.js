import {Box, Heading,Progress, Text, ListItem,List} from "@chakra-ui/react"

const Skill = () => {
  return (
  <Box marginBottom="36px">
    <Heading fontSize="20px">Skill</Heading>
    <List>
      <ListItem>
        Python<Progress value={60} colorScheme="gray" />
      </ListItem>
      <ListItem>
        Javascript<Progress value={58} colorScheme="gray"/>
      </ListItem>
      <ListItem>
        Html, Css<Progress value={57} colorScheme="gray"/>
      </ListItem>
      <ListItem>
        C/C++<Progress value={50} colorScheme="gray"/>
      </ListItem>
      <ListItem>
        Flutter<Progress value={55} colorScheme="gray"/>
      </ListItem>
      <ListItem>
        English(IELTS)<Progress value={30} colorScheme="gray"/>
      </ListItem>
      <ListItem>
        office<Progress value={52} colorScheme="gray"/>
      </ListItem>
      <ListItem>
        communication skill<Progress value={55} colorScheme="gray"/>
      </ListItem>
    </List>
  </Box>
  )
}

export default Skill
