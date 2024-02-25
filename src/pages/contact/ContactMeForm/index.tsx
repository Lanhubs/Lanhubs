import {
  Box,
  Button,
  createStandaloneToast,
  Flex,
  GridItem,
  Input,
  Textarea,
  
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail,  AiOutlineUser } from "react-icons/ai";

const ContactMeForm = () => {
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [message, setMessage] = React.useState("");
  const { ToastContainer, toast } = createStandaloneToast();

  const sendNewsLetterHandler = async () => {
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({
          sender: `${firstName} ${" "} ${lastName}`,
          email,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
         toast({
        description: data.message,
        duration: 3000,
        position: "top-right",
        status: "success"
      })
      }
    } catch (error: any) {
      console.log(error);
      toast({
        description: error.message,
        duration: 3000,
        position: "top-right",
        status: "error"
      })
    }
  };

  return (
    <GridItem
      //  gridColumn={1}
      gridRowStart={1}
      gridRowEnd={3}
      padding="1rem"
      display="flex"
      flexDir="column"
      background="#fff"
      gap="1.5rem"
      justifyContent="center"
      rounded={{base: "lg", md: "lg"}}
    >
      <ToastContainer />
      <CusInput
        type="text"
        onChange={setFirstName}
        IconRight={<AiOutlineUser />}
        placeholder="First name"
      />
      <CusInput
        type="text"
        onChange={setLastName}
        IconRight={<AiOutlineUser />}
        placeholder="last name"
      />
      {/*       <CusInput
        type="tell"
        onChange={}
        IconRight={<AiOutlinePhone />}
        placeholder="phone"
      /> */}
      <CusInput
        type="email"
        onChange={setEmail}
        IconRight={<AiOutlineMail />}
        placeholder="email"
      />
      <Textarea
        border="2px solid rgba(0, 0, 0, 0.5)"
        outline="0"
        zIndex={0}
        outlineColor={"0"}
        cols={10}
        rows={8}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        backgroundColor="green.700"
        height="50px"
        color="#f3f3f3"
        fontSize={18}
        onClick={() => sendNewsLetterHandler()}
      >
        Send me a message
      </Button>
    </GridItem>
  );
};

export default ContactMeForm;
interface inputProps {
  name?: string;
  type?: string;
  IconRight?: React.ReactNode;
  onChange: Function;
  placeholder?: string;
  iconName?: string;
  rest?: React.Attributes;
}
const CusInput = ({ name, type, onChange, IconRight, ...rest }: inputProps) => {
  return (
    <Flex
      alignItems="center"
      rounded="sm"
      borderRadius="md"
      border="2px solid rgba(0, 0, 0, 0.5)"
      overflow="hidden"
    >
      <Box
        as={"span"}
        padding="10px"
        fontSize={25}
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#000"
      >
        {IconRight}
      </Box>
      <Input
        padding="10px 5px"
        outline="none"
        outlineOffset={0}
        border="0"
        _placeholder={{ textTransform: "capitalize" }}
        type={type}
        name={name}
        outlineColor="none"
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
    </Flex>
  );
};
