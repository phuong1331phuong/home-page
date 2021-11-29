import {Box, Image, Center} from '@chakra-ui/react'

const ImageAchievement = ({src, title, ...props}) => {
  return (
    <Box maxW="sm">
    <Image src={src} alt={title} {...props} borderRadius="4px" mt="26px"/>
    <Center >{title}</Center>
    </Box>
  )
}

export default ImageAchievement