
import { Box,  GridItem, HStack, Text } from "@chakra-ui/react";
import {Link} from "react-router-dom";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineAndroid, AiOutlineMail } from "react-icons/ai";

import { contactLinks } from "../../../Components/data";
const Contacts = () => {
  return (
    <GridItem
      display="flex"
      flexDir="column"
      alignItems="flex-start"
      gap="1rem"
      borderTopStartRadius={20}
      borderTopEndRadius={20}


      // clipPath={"polygon(100% 100%, 100% 0%, 100% 0%)"}
      background="rgba(255, 255, 255, 0.5)"
      roundedBottom={20}
      p="2rem 1rem"
      shadow="md"
      boxShadow="md"
      color="#f3f3f3"
    >
      <HStack alignItems={"center"}>
        <AiOutlineAndroid fontSize={25} />
        <Text>+2348108685989</Text>
      </HStack>
      <HStack alignItems={"center"}>
        <AiOutlineMail fontSize={25} />
        <Box as={Link} to="muhammedolanrewaju56@gmail.com">
          muhammedolanrewaju56@gmail.com
        </Box>
      </HStack>
      <HStack alignItems={"center"} textColor="#fff">
       <GrMapLocation size={25} color="white"/>
        <Box>Gwarzo Road Kano Nigeria</Box>
      </HStack>
      <Text>You can also reach me:</Text>
      <HStack gap={1}>
        {contactLinks.map((item, idx) => (
          <Box
            backgroundColor="#f3f3f3"
            borderRadius="50"
            as={Link}
            color="#000"
            to={item.link}
            fontSize={30}
            padding="7px"
            key={idx}
          >
            {item.icon}
          </Box>
        ))}
      </HStack>
    </GridItem>
  );
};

export default Contacts;
