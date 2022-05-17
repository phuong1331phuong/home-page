import {  Container } from "@chakra-ui/react"
import Bio from "../component/bio"
import Information from '../component/infomation'
import Target from "../component/target"
import Achievements from '../component/achievements'
import Skill from '../component/skill'
import Layout from '../component/layout/article'


const HomePage = () => {
  return(
    <Layout>
    <Container maxW="container.md">
      <Information/>
      <Target/>
      <Skill/>
      <Bio/>
      <Achievements/>
    </Container>
    </Layout>
  )
}

export default HomePage
