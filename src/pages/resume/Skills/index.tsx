import {
  
  Stack,
  Heading,
  HStack,
  Text,
  RangeSlider,
  RangeSliderThumb,
 
  RangeSliderTrack,
} from "@chakra-ui/react";

import {
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";

import { GrMysql, GrReactjs } from "react-icons/gr";
import { TriangleUpIcon } from "@chakra-ui/icons";

const Skills = () => {
  return (
    <Stack flexDir="column" gap="2rem" color="#f3f3f3">
      <Heading borderBottom="2px solid green" marginTop={{base: "1rem", md: ""}} w="fit-content">
        My Skills
      </Heading>
      <Stack flexDir="column" gap="1">
        {skills.map((item, idx) => (
          <HStack key={idx} alignItems="center" rowGap="1rem" gap="1rem">
            <Text fontSize={30}>{item.icon}</Text>
            <Text width={220}>{item.name}</Text>

            <RangeSlider
              ringColor={"#fff"}
              value={[
                0,
                item.level === "professional"
                  ? 100
                  : item.level === "beginner"
                  ? 0
                  : 50,
              ]}
            >
              <RangeSliderTrack height={"2px"} />
              <RangeSliderThumb
                index={1}
                ringColor="0"
                border="1px solid rgaa(0, 255, 0, 0.2)"
                boxSize={"15px"}
              />
            </RangeSlider>
          </HStack>
        ))}
      </Stack>
      <Heading borderBottom="2px solid green" w="fix-content" width="fit-content">
        Languages
      </Heading>
      <Stack flexDir="column">
        {Languages.map((item, idx) => (
          <HStack key={idx} alignItems="center" rowGap="1rem" gap="1rem">
            <Text textTransform="capitalize" width={220}>
              {item.name}
            </Text>

            <RangeSlider
              ringColor={"#fff"}
              value={[
                0,
                item.level === "professional"
                  ? 100
                  : item.level === "beginner"
                  ? 0
                  : 50,
              ]}
            >
              <RangeSliderTrack height={"2px"} />
              <RangeSliderThumb
                index={1}
                ringColor="0"
                border="1px solid rgaa(0, 255, 0, 0.2)"
                boxSize={"15px"}
              />
            </RangeSlider>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};
export default Skills;
const skills = [
  {
    icon: <FaHtml5 />,
    level: "professional",
    name: "HTML5",
  },
  {
    icon: <FaCss3 />,
    level: "professional",
    name: "CSS3",
  },
  {
    icon: <FaJs />,
    level: "professional",
    name: "JavaScript",
  },
  {
    icon: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 400 400"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style
          dangerouslySetInnerHTML={{
            __html: ".st0{fill:#fff}.st1{fill:#000}",
          }}
        />
        <path className="st0" d="M0 200V0h400v400H0" />
        <path
          className="st1"
          d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
        />
      </svg>
    ),
    name: "TypeScript",
    level: "intermediate",
  },
  {
    icon: <GrReactjs />,
    level: "professional",
    name: "ReactJs",
  },
  {
    icon: <TriangleUpIcon />,
    level: "intermediate",
    name: "Nextjs",
  },
  {
    icon: <FaPhp />,
    level: "beginner",
    name: "Php8",
  },
  {
    icon: <FaNodeJs />,
    level: "intermediate",
    name: "Nodejs",
  },
  {
    icon: <FaDatabase />,
    level: "intermediate",
    name: "MongoDB",
  },
  {
    icon: <GrMysql />,
    level: "intermediate",
    name: "MySQL",
  },
  {
    icon: <GrReactjs />,
    level: "intermediate",
    name: "React Native",
  },
];

const Languages = [
  {
    name: "english",
    level: "professional",
  },
  {
    name: "yoruba",
    level: "professional",
  },
];
