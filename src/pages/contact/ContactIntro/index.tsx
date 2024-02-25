import {
  GridItem,
  Text,
} from "@chakra-ui/react";
const ContactIntro = () => {
  return (
    <GridItem
      padding="1rem"
      display={"flex"}
      flexDir="column"
      alignItems="flex-start"
      justifyContent="center"
      gap="1rem"
      gridRow={1 / 2}
      gridColumn={1 / 3}
      as="div"
      className={"aboutMe"}
      background="rgba(0, 0, 0, 0.5)"
      color={"#f3f3f3"}
    >
      <Text
        textTransform={"capitalize"}
        mx={{ base: "auto", md: "" }}
        fontSize={{ base: 30, md: 40 }}
        as="p"
        className={"aboutMe"}
        fontFamily="sans-serif"
      >
        contact me
      </Text>
      <Text>
        Sending the newsletter above or using any of the below for jobs, as a
        client or consultancy. will surely deliver
      </Text>
    </GridItem>
  );
};

export default ContactIntro;
