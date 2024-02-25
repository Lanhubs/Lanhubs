import {
  Box,
  Flex,
  HStack,
  Text,
  Heading,
  Image,
  // Modal,
  // ModalContent,
  // ModalBody,
  // ModalProps,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import ccbnaijaImg from "../../assets/ccbnaija.png";
import topupcliqImg from "../../assets/topupcliq.png";
import codesquad from "../../assets/codesquad_llc.png";
import Jekinraa from "../../assets/jlogo.png";
import JekinraaAdmin from "../../assets/jekinraa_admin.png";

interface Props {
  image: any | React.ComponentProps<typeof Image>["src"];
  projName: string;
  link: string;
  companyName: string;
  companyLogo: string;
  companyLink: string;
}

const index = (): React.ReactNode => {
  return (
    <Box
      color="whiteAlpha.700"
      padding={{ base: "15% 7%", md: "7%" }}
      height={{ base: "100%", md: "100%" }}
      width={"100vw"}
    >
      <Heading>Projects</Heading>
      <Text>Projects worked on so far for companies</Text>
      <Flex
        mt="2rem"
        flexWrap="wrap"
        gap="1.5rem"
        flexDir={{ base: "column", md: "row" }}
      >
        {projects.map((item, idx) => {
          return (
            <Project
              key={idx}
              companyLink={item.companyLink}
              companyName={item.companyName}
              projName={item.projName}
              image={item.image}
              link={item.link}
              companyLogo={item.companyLogo}
            />
          );
        })}
      </Flex>
    </Box>
  );
};
const Project = ({
  image,
  link,
  projName,
  companyLogo,
  companyName,
  companyLink,
}: Props) => {
  return (
    <Box
      width={{ base: "100%", md: "30%" }}
      shadow="md"
      background="rgba(0, 0, 0, 0.5)"
      display="flex"
      flexDir="column"
    >
      <Box
        width={"100%"}
        shadow="md"
        background="rgba(0, 0, 0, 0.5)"
        height="23rem"
        display="flex"
        flexDir="column"
      >
        <Image src={image} alt={projName} width="100%" flex={1} height="95%" />
        <Box as={Link} fontWeight={600} my="1rem" to={link} width="fit-content">
          {projName}
        </Box>
      </Box>
      <HStack as={Link} to={companyLink} marginTop={"4"} gap={"4"}>
        <Image
          src={companyLogo}
          width={"35%"}
          height="50px"
          bg="#fff"
          rounded="md"
        />
        <Text fontWeight={700} fontSize={18}>
          {companyName}
        </Text>
      </HStack>
    </Box>
  );
};

export default index;

const projects = [
  {
    projName: "TopupCliq",
    companyName: "Codesquad LLC",
    image: topupcliqImg,
    link: "https://sandbox.dash.topupcliq.com",
    companyLogo: codesquad,
    companyLink: "",
  },
  {
    projName: "CCBNAIJA",
    companyName: "Codesquad LLC",
    image: ccbnaijaImg,
    link: "https://ccbnaija.com",
    companyLogo: codesquad,
    companyLink: "",
  },
  {
    projName: "Jekinraa Admin Panel",
    companyName: "Jekinraa Limited",
    image: JekinraaAdmin,
    link: "https://ccbnaija.com",
    companyLogo: Jekinraa,
    companyLink: "",
  },
];
// type modalProps = {
//   image: any | React.ComponentProps<typeof Image>["src"];
//   children: React.ReactNode;
//   description: String;
//   companyName: String;
//   projName: String;
//   disclosure: ModalProps;
// };
// const ProjectDetailsModal = () => {
//   return (
//     <Modal
    
//       isOpen={props.disclosure.isOpen}
//       onClose={props.disclosure.onClose}
//       closeOnEsc={true}
//     >
//       <ModalContent>
//         <ModalBody>

//         </ModalBody>
//       </ModalContent>
//     </Modal>
//   );
// };
