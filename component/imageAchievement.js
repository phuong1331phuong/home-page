import {Box, Link, Image, Button, Text, useColorModeValue} from '@chakra-ui/react'

const ImageAchievement = ({src, linkButton, title, children, ...props}) => {
  const colorButton = useColorModeValue('gray.600', 'gray.200')
  return (
    <Box display="block" w={{base:"250px", md:"200px"}} m={3} >
      <Image maxW={{base:"250px", md:"200px"}} borderRadius="16px" border="3px solid black" src={src} alt={title} {...props} borderRadius="4px" mt="26px"/>
      <Text alignItems="center">{children}</Text>
      <Link href={linkButton}>
        <Button colorScheme='blue' bg={colorButton} variant='solid'>More</Button>
      </Link>
    </Box>
  )
}

export default ImageAchievement