import { Box , Heading } from "@chakra-ui/react"
import ImageAchievement from '../../component/imageAchievement'
import Layout from '../../component/layout/article'



const Portfolio = () => {
  return (
<Layout>
    <Box mt={14} >
      <Heading ml="8px" fontSize="20px">My portfolio</Heading>  
    <Box mt={14} mb={8} display={{base:'', md:"flex"}} flexWrap="wrap" align="center">
      <ImageAchievement src="/ScientificComputing.png" link='https://freecodecamp.org/certification/fcc3b5b4580-f137-491c-821e-6cb24adf4a58/scientific-computing-with-python-v7' linkButton="https://freecodecamp.org/certification/fcc3b5b4580-f137-491c-821e-6cb24adf4a58/scientific-computing-with-python-v7" title="Scientific Computing with Python">Scientific Computing with Python</ImageAchievement>
      <ImageAchievement src="/kmeansApp.png" linkButton='/portfolio/kmean-app' link='' title="Use library Pygame, Sklearn to complete an app that simulates kmean algorithm">Use library Pygame, Sklearn to complete an app that simulates kmean algorithm</ImageAchievement>
      <ImageAchievement src="/HomePage.png" link='https://github.com/phuong1331phuong/home-page' linkButton="/" title="My Home Page">Home page</ImageAchievement>
      <ImageAchievement src="/app-music.jpg" link='https://github.com/Phuongxiii/music_app' linkButton="/portfolio/music-app" title="Use flutter to create a music app like youtube, using youtube api and firebase">Use flutter to create a music app like youtube, using youtube api and firebase</ImageAchievement>
      <ImageAchievement src="/app-phun-khu-khuan.png" link='' linkButton="/portfolio/disinfectant-spray-application" title="Use flutter to create a music app like youtube, using youtube api and firebase">To carry out the project of a remote-controlled disinfecting car using the MQTT protocol, I personally designed and completed an application to control and transmit data for the operation of the device.</ImageAchievement>
      <ImageAchievement src="/xe-phun-khu-khuan.png" link='' linkButton="/portfolio/disinfectant" title="">Together with the scientific research team at the school, we design and perfect the disinfectant spray truck for disease prevention.</ImageAchievement>
    </Box>
    </Box>
    </Layout>
    )
}

export default Portfolio
