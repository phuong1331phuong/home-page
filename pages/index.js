import { Text, Box, Container } from "@chakra-ui/react"
import Bio from "../component/bio"
import Information from '../component/infomation'
import Target from "../component/target"
import Achievements from '../component/achievements'
import Skill from '../component/skill'

const HomePage = () => {
  return(
    <Container>
      <Information/>
      {/* <Box borderRadius="lg" bg="red" p={3} mb={6} align='center'>
        <Text >I'm student of KMA</Text>
      </Box> */}
      <Target/>
      <Skill/>
      <Bio/>
      <Achievements/>
    </Container>
  )
}

export default HomePage
