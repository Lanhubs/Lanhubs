
import { ReactNode } from "react";
import {Link} from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Link as NavLink,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { FaBars } from "react-icons/fa";
import "../../styles/Home.css";
const Links = ["Home", "About Me", "Resume", "Projects"];
type Props = {
  children: ReactNode;
};

export default function Wrapper({ children }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="#111"
        opacity={0.5}
        color="whiteAlpha.700"
        px={{ base: 4, md: 10 }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            bg="none"
            aria-label={"Open Menu"}
            icon={isOpen ? <CloseIcon /> : <FaBars fontSize={25} />}
            display={{ md: "none" }}
            alignItems="center"
            justifyContent="center"
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, idx) => (
                <NavLink
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    // bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  as={Link}
                  to={link.toLowerCase()}
                  key={idx}
                >
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Box color="#f3f3f3">Lanre Portfolio</Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} rounded="1rem">
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, idx) => (
                <NavLink
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    // bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  to={link.toLowerCase()}
                  as={Link}
                  key={idx}
                >
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box
        as="div"
        className={"details_header"}
        p={4}
        bg="#111"
        height="100%"
        width="100%"
      >
        {children}
      </Box>
    </>
  );
}
