import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import Skills from "./Skills";
import Experiences from "./Experiences";
import OtherThings from "./OtherThings";

const index = ():React.ReactNode => {
  return (
    
      <Box padding={{ base: "20% 7%", md: "7%" }} w={"100vw"}>
        <Flex
          gap="10%"
          flexDir={{ base: "column-reverse", md: "row" }}
          width="100%"
        >
          <Skills />
          <Experiences />
          <OtherThings />
        </Flex>
      </Box>
    
  );
};

export default index;
