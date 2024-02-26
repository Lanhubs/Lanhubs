import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
// import { Document, Page } from "reaact-pdf";
import resume from "../../assets/resume/Habeeb-Muhammed-Olanrewaju.pdf";
type Props = {
  children: React.ReactNode;
};

const ResumeModal = (props: Props): React.ReactNode => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <span
        onClick={() => {
          onOpen();
        }}
      >
        {props.children}
      </span>

      <Modal isOpen={isOpen} onClose={onClose} closeOnEsc closeOnOverlayClick>
        <ModalContent minWidth={{base:"100%", md:"60%"}} margin="auto" height={"85%"} bg="rgba(0,0,0,0.5)">
          <ModalBody w="100%" height="100%">
            {/* <Document file={resume} >
              <Page pageNumber={2} />
            </Document> */}
            <Box as={"iframe"} width={"100%"} height="100%" src={resume} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ResumeModal;
