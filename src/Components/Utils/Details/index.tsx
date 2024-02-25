
import { Flex, Box, Heading,  } from "@chakra-ui/react";
import "../../../Home.css"

const Details = () => {
  return (
    <Box
      w={{ base: "90%", md: "80%" }}
      height={{base: "60%", md: "40%"}}
      
      as="div"
      
    >
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Box w={{ base: "90%", md: "50%" }}>
          <Box textTransform="uppercase" w="100%" py={10}>
            <Heading color="whiteAlpha.500" fontSize={40}>
              Habeeb
            </Heading>
            <Heading color="whiteAlpha.500">Muhammed Olanrewaju</Heading>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Details;
