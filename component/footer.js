import { Box, Heading, Text, Link, List, ListItem } from "@chakra-ui/layout"
import { Container, Image, Center } from "@chakra-ui/react"
import {ExternalLinkIcon } from "@chakra-ui/icons"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"


const Footer = () => {
  return (
    <Box maxW="full" marginBottom="50px">
      <Container maxW="container.md" pt={8} >
      <Heading fontSize="20px" >
        On the web
      </Heading>
      <Box display="flex" >
      <List ml="14px" > 
        <ListItem display="flex" alignItems="center" > <FaFacebook />
          <Text ml="6px" mr="4px">Facebook:</Text>
             <Link href="https://www.facebook.com/profile.php?id=100055186053348" isExternal>
                        Nguyen Phuong <ExternalLinkIcon mx="2px" color="#e576da"/>
                        </Link>
        </ListItem>
        <ListItem display="flex" alignItems="center" ><FaInstagram/>
          <Text ml="6px" mr="4px">Instagram:</Text> <Link href="https://www.instagram.com/phuongnguyen13g/" isExternal>
                        phuongnguyen13g <ExternalLinkIcon mx="2px" color="#e576da"/>
                        </Link>
        </ListItem>
        <ListItem display="flex" alignItems="center" ><FaGithub/>
            <Text ml="6px" mr="4px">Github:</Text>
             <Link href="https://github.com/phuong1331phuong" isExternal>
                        Phuong1331phuong <ExternalLinkIcon mx="2px" color="#e576da"/>
                        </Link>
        </ListItem>
        <ListItem display="flex" alignItems="center" ><FaLinkedinIn/>
            <Text ml="6px" mr="4px">Linkedin:</Text>
             <Link href="https://www.linkedin.com/in/ph%C6%B0%C6%A1ng-nguy%E1%BB%85n-3b591a225/" isExternal>
                        Nguyen Phuong<ExternalLinkIcon mx="2px" color="#e576da"/>
                        </Link>
        </ListItem>
      </List>
      
      </Box >
      <Text align="center" opacity="0.5" fontSize="14px" mt="14px">designed by me</Text>
      <Text align="center" opacity="0.4" fontSize="12px" >This website is my first product,<br/> improved and used until now</Text>
      </Container>
    </Box>
  )
}

export default Footer
