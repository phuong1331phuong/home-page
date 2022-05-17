import {
  Heading,
  Text,
  Box,
  List,
  ListItem,
  Image,
} from "@chakra-ui/react";
import {
  BsFillPersonFill,
  BsCalendarDate,
  BsGenderAmbiguous,
} from "react-icons/bs";
import { FaPhoneAlt, FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";

const Information = () => {
  return (
    <Box
      w="full"
      marginTop="80px"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
    >
      <Box bg="gray.500" align="center" borderRadius="8px" p={3} mb={14}>
        <Text color="gray.100">
          Hello, I&apos;m a student of cryptographic engineering academy
          majoring in electronics and telecommunications.(AI engineer/ IoT
          developer/ Web developer).
        </Text>
      </Box>
      <Box marginBottom="36px" w="full" display="flex" justifyContent="center">
        <Image
          src="/avatar.jpg"
          borderRadius="50%"
          alt="avatar"
          objectFit="cover"
          width={200}
          height={200}
        border="3px solid grey"
        />
      </Box>
      <Box marginBottom="36px">
        <Box display="flex" alignItems="center">
          <Heading fontSize={20}>Personal Information</Heading>
        </Box>
        <List>
          <ListItem>
            <Box display="flex" alignItems="center">
              <BsFillPersonFill />
              <Heading marginLeft="6px" fontSize={18}>
                Nguyen Van Phuong
              </Heading>
            </Box>
            <Text color="#e576da">
              AI engineer/ IoT developer/ Web developer
            </Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <BsCalendarDate />
            <Text ml="6px">Date of birth: 19/11/2002</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <BsGenderAmbiguous />
            <Text ml="6px">Gender: Male</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <FaPhoneAlt />
            <Text marginLeft="6px">Phone: 038583****</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <FaMailBulk />
            <Text marginLeft="6px" display="block">
              Email: Nguyenvanphuong****@gmail.com
            </Text>
          </ListItem>

          <ListItem display="flex" alignItems="center">
            <FaMapMarkerAlt />
            <Text marginLeft="6px">Address: Hanoi, Vietnam</Text>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Information;
