import {
  Box,
  Flex,
  HStack,
  Text,
  Heading,
  Image,
  Modal,
  ModalContent,
  ModalBody,
  ModalOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink, Path } from "react-router-dom";

import ccbnaijaImg from "../../assets/ccbnaija.png";
import topupcliqImg from "../../assets/topupcliq.png";
import codesquad from "../../assets/codesquad_llc.png";
import Jekinraa from "../../assets/jlogo.png";
import JekinraaAdmin from "../../assets/jekinraa_admin.png";

interface Props {
  description: string;
  image: any | React.ComponentProps<typeof Image>["src"];
  projName: string;
  link: string;
  companyName: string;
  companyLogo: string;
  companyLink: string;
}
type modalProps = {
  image: any | React.ComponentProps<typeof Image>["src"];
  companyLogo: any | React.ComponentProps<typeof Image>["src"];

  children: React.ReactNode;
  description: String;
  companyName: String;
  projName: String;
  event: Partial<Path> | any;
};

const projects = [
  {
    projName: "TopupCliq",
    companyName: "Codesquad LLC",
    image: topupcliqImg,
    link: "https://sandbox.dash.topupcliq.com",
    companyLogo: codesquad,
    companyLink: "https://www.codesquad.co/",
    description:
      "Got to represent the UI/UX design of the Web App in using the Frontend web technologies React + Chakra-UI and other necessary libraries whcih are being required in realizing the web Application  and also implemented the backend APIs designed for the Solution",
  },
  {
    projName: "CCBNAIJA",
    companyName: "Codesquad LLC",
    image: ccbnaijaImg, 
    link: "https://ccbnaija.com",
    companyLogo: codesquad,
    description: "",
    companyLink: "https://www.codesquad.co/",
  },
  {
    projName: "Jekinraa Admin Panel",
    companyName: "Jekinraa Limited",
    image: JekinraaAdmin,
    link: "https://ccbnaija.com",
    companyLogo: Jekinraa,
    description: "",  
    companyLink: "",
  },
  {
    projName: "Parrot news",
    companyName: "Parrot",
    image: JekinraaAdmin,
    link: "#",
    companyLogo: Jekinraa,
    description: "",
    companyLink: "",
  },
];

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
              description={item.description}
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
  description,
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
      <ProjectDetailsModal
        companyName={companyName}
        description={description}
        event={companyLink}
        image={image}
        projName={projName}
        companyLogo={companyLogo}
      >
        <HStack marginTop={"4"} gap={"4"} cursor={"pointer"}>
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
      </ProjectDetailsModal>
    </Box>
  );
};

export default index;

const ProjectDetailsModal = (props: modalProps): React.ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <span onClick={onOpen}>{props.children}</span>
      <Modal
        closeOnOverlayClick
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={true}
      >
        <ModalOverlay bg="rgba(0,0,0,0.5)" />
        <ModalContent
          bg="rgba(0,0,0,0.5)"
          borderRadius={"4"}
          minWidth={{ base: "85%", md: "40%" }}
          padding={0}
          height="90%"
        >
          <ModalBody height={"100%"} width={"100%"}>
            <Image src={props.image} width={"100%"} height={"50%"} />
            <Text
              color="#f2f2f2"
              fontSize={20}
              fontWeight={"600"}
              textAlign={"right"}
            >
              {props.projName}
            </Text>

            <Text marginY="1rem" fontSize={16} color={"#fff"}>
              {props.description}
            </Text>
            <HStack>
              <Image src={props.companyLogo} height={30} bg="#f1f1f1" />
            </HStack>
            <Button
              bg="green.600"
              w="100%"
              height="50px"
              marginTop={"auto"}
              
              marginY={"1rem"}
              outlineColor={"green.600"}
              borderColor={"green.600"}
              color="white"
              as={NavLink}
              to={props.event}
            >
              Visit Website
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
