import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import {
  FaResearchgate,
} from "react-icons/fa";
import {
  HiBookOpen,
  HiCodeBracket,
  
  HiOutlinePuzzlePiece,
} from "react-icons/hi2";
import GithubDetails from "../../../Components/Utils/GithubDetails";

const OtherThings = () => {
  return (
    <Stack gap="2rem" flexDir="column" color="#f3f3f3">
      {/* what i do */}
      <Stack>
        <Heading
          textTransform="uppercase"
          width="fit-content"
          borderBottom="2px solid green"
        >
          What I do
        </Heading>
        <Text
          textTransform="capitalize"
          fontSize={18}
          lineHeight={10}
          width="400px"
        >
          Web Applications - Responsive web application - Frontend - Full Stack
          - Cross platform mobile application - Backend APIs
        </Text>
      </Stack>
      <Stack>
        <Heading
          textTransform="uppercase"
          width="fit-content"
          borderBottom="2px solid green"
        >
          Hobbies
        </Heading>
        <HStack gap="1rem"  alignItems="center" flexWrap={{base: "wrap", md: "wrap"}}>
          {hobbies.map((item:any, idx) => (
            <HStack key={idx} textTransform="capitalize" flexWrap="nowrap" width={{base: "35%", md: ""}}>
              <Box
                color="#fff"
                fontSize={25}
                border="1.5px solid #f3f3f3"
                rounded="full"
                p="6px"
              >
                {item.icon}
              </Box>
              <Text>{item.name}</Text>
            </HStack>
          ))}
        </HStack>
      </Stack>
      <GithubDetails />
    </Stack>
  );
};

export default OtherThings;
const hobbies = [
  {
    name: "Coding",
    icon: <HiCodeBracket />,
  },
  {
    name: "research",
    icon: <FaResearchgate />,
  },
  {
    name: "reading",
    icon: <HiBookOpen />,
  },
  ,
  {
    name: "Solving problems",
    icon: <HiOutlinePuzzlePiece />,
  },
];
