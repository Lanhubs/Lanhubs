import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Link as Anchor,
} from "@chakra-ui/react"

import {Link} from "react-router-dom";
import { contactLinks, skills } from "../data";
import { FaArrowRight } from "react-icons/fa";


const Details = ():React.ReactNode => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      padding={{ base: "2rem", md: "3.5rem 5%" }}
      paddingTop={{ base: "10%", md: "" }}
      height={{ base: "100%", md: "100vh" }}
      gap={10}
    >
      {/* profile image */}
      <VStack
        as="div"
        className={"profilePic"}
        backgroundSize="cover"
        marginTop={{ base: "15%", md: 0 }}
        width={{ base: "100%", md: "35%" }}
        height={{ base: "400px", md: "100%" }}
      >
        <Flex
          height="25%"
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
        as="div"
        className={"aboutMe"}
        py="5%"
        alignItems={{ base: "center", md: "" }}
        flex={1}
        height="100%"
        gap="1rem"
      >
        <Heading color="whiteAlpha.800" textTransform="capitalize">
          about me
        </Heading>
        <Text color="whiteAlpha.600" w="90%">
          Prolific full stack MERN Stack web developer with a passion for
          beating my &quot;past-bests&quot;. Improving My Services by building
          challenging web applications using challenging but helpful web
          technogies. Always looking for the best technologies to adopt upon
          beuilding a product with the right designs. Always open to learning
          new technologies whether to solve a problem or to improve my
          proficiency. And always open to working with a team to learn and to
          build great products that best solve the problems.
        </Text>
        <Heading
          color="whiteAlpha.800"
          alignSelf={{ base: "center", md: "" }}
          justifySelf={{ base: "center", md: "flex-start" }}
          as="h2"
        >
          My Services
        </Heading>
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={10}
          width="90%"
          as="div"
          className={"skillsGrid"}
        >
          {skills.map((item, idx) => (
            <GridItem
              padding="1rem"
              key={idx}
              display="flex"
              alignItems={{ base: "center", md: "" }}
              textAlign={"center"}
              flexDir="column"
              gap={1}
            >
              <Heading color="green.700">{item.icon}</Heading>
              <Heading color="whiteAlpha.800" fontSize={20}>
                {item.skill}
              </Heading>

              <Text color="whiteAlpha.500">{item.about}</Text>
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </Flex>
  );
};
export default Details;
