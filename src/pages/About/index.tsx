import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Link as Anchor,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { contactLinks } from "../../Components/data";
import myImg from "../../assets/me.png";

const index = (): React.ReactNode => {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        padding={{ base: "2rem", md: "3.5rem 5%" }}
        height={{ base: "100%", md: "100vh" }}
        gap={{ base: "1rem", md: 10 }}
      >
        {/* profile image */}
        <VStack
          as="div"
          className={"profilePic"}
          backgroundImage={myImg}
          backgroundSize="cover"
          marginTop={{ base: "10%", md: 0 }}
          width={{ base: "100%", md: "35%" }}
          height={{ base: "400px", md: "100%" }}
        >
          <Flex
            height="20%"
            marginTop="auto"
            marginBottom="0"
            as="div"
            className={"myImg"}
            // py="1rem"
            flexDir="column"
            gap="0.7rem"
            alignItems="center"
            justifyContent="center"
            width="full"
          >
            <Heading fontSize={20} color="whiteAlpha.700">
              Habeeb Muhammed Olanrewaju
            </Heading>
            <Text
              color="green.600"
              textTransform="capitalize"
              letterSpacing={1}
              fontSize={18}
            >
              Software developer
            </Text>
            <HStack gap={1}>
              {contactLinks.map((item, idx) => (
                <Box
                  as={Link}
                  color="whiteAlpha.600"
                  to={item.link}
                  fontSize={30}
                  key={idx}
                >
                  {item.icon}
                </Box>
              ))}
            </HStack>
            <Anchor
              color="#fff"
              fontWeight="500"
              fontSize={18}
              width={{ base: "70%", md: "60%" }}
              // textAlign="center"
              display="flex"
              alignItems="center"
              paddingX="15%"
              justifyContent="space-between"
              letterSpacing={1}
              backgroundColor="green.600"
              marginX="auto"
              paddingY="10px"
              rounded="md"
              to={"https://www.linkedin.com/in/lanre-muh-d-71a721227/"}
              as={Link}
            >
              Hire me
              <FaArrowRight />
            </Anchor>
          </Flex>
        </VStack>
        <Stack
          py="5%"
          flex={1}
          height="100%"
          width={{ base: "100%", md: "" }}
          as="div"
          className={"aboutMe"}
        >
          <Heading
            color={"whiteAlpha.800"}
            fontSize={30}
            textTransform="capitalize"
          >
            About me
          </Heading>

          <Text
            mt="2rem"
            marginTop="2rem"
            color="whiteAlpha.600"
            w={{ base: "100%", md: "90%" }}
            fontSize={18}
            lineHeight="8"
          >
            Prolific Full Stack (MERN Stack) developer with a passion for
            beating my &quot;past-bests&quot;. Improving My Services by building
            challenging web applications using challenging but helpful web
            technogies. Always looking for the best technologies to adopt upon
            beuilding a product with the right designs. Always open to learning
            new technologies whether to solve a problem or to improve my
            proficiency. And always open to working with a team to learn and to
            build great products that best solve the problems.
          </Text>
          <Box
            display="flex"
            justifySelf="flex-end"
            color="#f1f1f1"
            justifyContent="flex-end"
            alignItems="center"
            flexDir="column"
            flex={1}
          >
            <Text my="4" fontWeight={"600"} fontSize={20}>
              Addresses:
            </Text>
            <Text fontSize="larger" fontWeight="bold">
              Gwarzo Road, Kano Nigeria
            </Text>
            <Text
              _before={{
                content: '""',
                width: "50px",
                backgroundColor: "green",
              }}
              _after={{
                content: '""',
                width: "50px",
                backgroundColor: "green",
              }}
              fontSize="larger"
              fontWeight="bold"
            >
              Ga-akanbi Ilorin Nigeria
            </Text>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default index;
