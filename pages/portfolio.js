import { Box , Heading } from "@chakra-ui/react"
import ImageAchievement from '../component/imageAchievement'
import Layout from '../component/layout/article'
import {motion} from 'framer-motion'



const Portfolio = () => {
  return (
<Layout>
    <Box mt={14} >
      <Heading ml="8px" fontSize="20px">My portfolio</Heading>  
    <Box mt={14} mb={8} display={{base:'', md:"flex"}} flexWrap="wrap" align="center">
      <ImageAchievement src="/ScientificComputing.png" linkButton="https://freecodecamp.org/certification/fcc3b5b4580-f137-491c-821e-6cb24adf4a58/scientific-computing-with-python-v7" title="Scientific Computing with Python">Scientific Computing with Python</ImageAchievement>
      <ImageAchievement src="/kmeansApp.png" title="Use library Pygame, Sklearn to complete an app that simulates kmean algorithm">Use library Pygame, Sklearn to complete an app that simulates kmean algorithm</ImageAchievement>
      <ImageAchievement src="/HomePage.png" linkButton="https://github.com/phuong1331phuong/home-page" title="My Home Page">Home page</ImageAchievement>
    </Box>
    </Box>
    </Layout>
    )
}

export default Portfolio