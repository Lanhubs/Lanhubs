import {  Heading, Stack, Text } from "@chakra-ui/react";
import { Timeline } from "@mantine/core";

const Experiences = () => {
  return (
    <Stack
      flexDir="column"
      gap="2rem"
      mx={{ base: "", md: "1rem" }}
      color="#f3f3f3"
      h="100%"
    >
      <Heading py="5px" borderBottom="2px solid green" w="fit-content">
        EXPERIENCES
      </Heading>
      {/* <Text>One year working experience</Text> */}
      <Stack flexDir="column" gap="1rem" marginTop="2rem">
        <Timeline mt="1rem" color="cyan" bulletSize={24}>
          {/* If you do not pass bullet prop, default bullet will be rendered */}
          <Timeline.Item title="TrezTech" >
            <Heading color="#f1f1f1" size="sm">
              Treztech
            </Heading>
            <Text color="#f3f3f3">Web development tutor</Text>
            <Text color="#f3f3f3">January - March 2022</Text>
          </Timeline.Item>

          {/* You can use any react node as bullet, e.g. Avatar, ThemeIcon or any svg icon */}
          <Timeline.Item title="Codesquad LLc" >
            <Heading color="#f1f1f1" size="sm">
              Codesquad LLC
            </Heading>
            <Text color="#f3f3f3">
              Muritala beside Olanrewaju Ilorin, Nigeria
            </Text>
            <Text color="#f3f3f3">Frontend Intern</Text>
            <Text color="#f3f3f3">August - December 2022</Text>
          </Timeline.Item>
          <Timeline.Item title="Codesquad LLC" >
            <Heading color="#f1f1f1" size="sm">
              Codesquad LLC
            </Heading>
            <Text color="#f3f3f3">
              Muritala beside Olanrewaju Ilorin, Nigeria
            </Text>
            <Text color="#f3f3f3">Web development tutor</Text>
            <Text color="#f3f3f3">August - December 2022</Text>
          </Timeline.Item>
        </Timeline>
      </Stack>
      <Stack gap="2rem" justifySelf="flex-end">
        <Heading borderBottom="2px solid green" w="fit-content">
          EDUCATION
        </Heading>
        <Stack flexDir="column" mt="2rem" flex={1}>
          <Text fontWeight="bold">LLB in Common and Islamic Law</Text>
          <Text>Bayero University Kano</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Experiences;

// const CusExperiences = () => (
//   <Box as="div" className={"timeline"}>
//     <Box as="div" className={"timeline_item"}>
//       <Box as="div" className={"timeline_item_title"}>
//         Codesquad LLC
//       </Box>
//       <Box
//         as="div"
//         className={"timeline_item_description"}
//         display="flex"
//         flexDir="column"
//       >
//         <Text fontSize={18}>Intern</Text>
//         <Text>August 2022 - December 2022</Text>
//       </Box>
//     </Box>
//   </Box>
// );
