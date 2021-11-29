import {Heading, Text, Link, Box, List, ListItem, UnorderedList, Image , useColorModeValue} from '@chakra-ui/react'
import { InfoOutlineIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Paragraph from './highline'

const Information = () => {
    const color = useColorModeValue('gray.900', 'gray.50')
    return (
        <Box w="full" marginTop="80px" display="flex" flexWrap="wrap"  alignItems="center">
            <Box bg="gray.500" align="center" borderRadius="8px" p={3} mb={14}>
                <Text color="gray.100">Hello, I'm a developer(AI engineer/ Hardware engineer/ Web developer/ IOT developer), and I'm a student of cryptographic engineering academy</Text>
            </Box>
            <Box marginBottom="36px" w="full" display="flex" justifyContent="center">
                <Image src="https://scontent.fhph1-1.fna.fbcdn.net/v/t39.30808-6/257159268_382804413569091_7558770146122545980_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BOEktubfHfYAX-b-Jvp&_nc_ht=scontent.fhph1-1.fna&oh=40d1c6078826d30cf63c7e89d994ccdf&oe=61A782BE"
                borderRadius="50%"
                width={150}
                height={150}
                border="3px solid grey"
                />
            </Box>
            <Box marginBottom="36px">
            <Box display="flex" alignItems="center">
            <Heading fontSize={20}>
                Personal Information
            </Heading>
            </Box>
            <UnorderedList>
                <ListItem>
                    <Heading fontSize={18}>
                        Nguyen Van Phuong
                    </Heading>
                    <Text color="#e576da">AI engineer/ Hardware engineer/ Web developer/ IOT developer</Text>
                </ListItem>
                <ListItem>
                Date of birth:  19/11/2002
                </ListItem>
                <ListItem>
                    Gender: Male
                </ListItem>
                <ListItem>
                    Phone: 0385831352
                </ListItem>
                <ListItem>
                    Email: Nguyenvanphuongxiii@gmail.com
                </ListItem>
                <ListItem>
                    Facebook: <Link href="https://www.facebook.com/profile.php?id=100055186053348" isExternal>
                                Nguyen Phuong <ExternalLinkIcon mx="2px" color="#e576da"/>
                                </Link>
                </ListItem>
                <ListItem>
                    Linkedin: <Link href="https://www.linkedin.com/in/ph%C6%B0%C6%A1ng-nguy%E1%BB%85n-3b591a225/" isExternal>
                                Phuong Nguyen <ExternalLinkIcon mx="2px" color="#e576da"/>
                                </Link>
                </ListItem>
                <ListItem>
                    Address: Hanoi, Vietnam
                </ListItem>
            </UnorderedList>
            </Box>
        </Box>
    )
}

export default Information