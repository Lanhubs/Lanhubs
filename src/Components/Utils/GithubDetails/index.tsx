import {
  Box,
  Heading,
  HStack,
  Text,
  Image as Img,
  Stack,
} from "@chakra-ui/react";
import useGithubStats from "react-github-user-stats";
import GitHubCalendar from "react-github-calendar";
import { Loader } from "@mantine/core";

import {Link} from "react-router-dom";
const GithubDetails = () => {
  const { loading, userData } = useGithubStats("Lanhubs");
  
  
  
  return (
    <Box
      display="flex"
      alignItems={loading ? "center" : ""}
      justifyContent={loading ? "center" : ""}
      width="100%"
      flex={1}
      overflowX={"scroll"}
    >
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="inherit"
        >
          <Loader type="spin" />
        </Box>
      ) : (
        <Stack flexDir="column" gap="1rem" overflowX={"scroll"}>
          <Heading>Github Details</Heading>
          <HStack as={Link} to="https://github.com/Lanhubs">
            {/* <Avatar src={userData ? userData?.avatar_url: ""} as={Image} /> */}
            
            
            
            <Img
              rounded="full"
              alt="git profile pic"
              src={userData?.avatar_url || "#"}
              width={70}
            />
            <Text fontSize={18} fontWeight={600}>
              {userData?.username}
            </Text>
          </HStack>
          <Text>Bio: {userData?.bio}</Text>
          {/* <Text>Stars: {userData?.stars}</Text> */}
          {/* github calendar*/}
          <GitHubCalendar username="Lanhubs" />
        </Stack>
      )}
    </Box>
  );
};

export default GithubDetails;
