import {Heading, Text, Link, Box, List, ListItem, UnorderedList, Image , useColorModeValue} from '@chakra-ui/react'
import {  ExternalLinkIcon } from '@chakra-ui/icons'
import { BsFillPersonFill, BsCalendarDate, BsGenderAmbiguous } from "react-icons/bs";
import { FaPhoneAlt, FaMailBulk,FaMapMarkerAlt } from "react-icons/fa";

const Information = () => {
    const color = useColorModeValue('gray.900', 'gray.50')
    return (
        <Box w="full" marginTop="80px" display="flex" flexWrap="wrap"  alignItems="center">
            <Box bg="gray.500" align="center" borderRadius="8px" p={3} mb={14}>
                <Text color="gray.100">Hello, I'm a student of cryptographic engineering academy majoring in electronics and telecommunications.(AI engineer/ IOT developer/ Web developer).</Text>
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
            <List>
                <ListItem>
                    <Box display="flex" alignItems="center">
                    <BsFillPersonFill />
                    <Heading marginLeft="6px" fontSize={18}>
                        Nguyen Van Phuong
                    </Heading>
                    </Box>
                    <Text color="#e576da">AI engineer/  IOT developer/ Web developer</Text>
                </ListItem>
                <ListItem display="flex" alignItems="center"><BsCalendarDate />
                <Text ml="6px">
                Date of birth:  19/11/2002
                </Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                    <BsGenderAmbiguous/>
                    <Text ml="6px">
                    Gender: Male
                    </Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                    <FaPhoneAlt/><Text marginLeft="6px">Phone: 0385831352</Text>
                </ListItem>
                <ListItem display="flex" alignItems="center"><FaMailBulk/>
                    <Text marginLeft="6px" display="block">Email: Nguyenvanphuongxiii@gmail.com</Text>
                </ListItem>
                
                <ListItem display="flex" alignItems="center"><FaMapMarkerAlt />
                    <Text marginLeft="6px">Address: Hanoi, Vietnam</Text>
                </ListItem>
            </List>
            </Box>
        </Box>
    )
}

export default Information