import ReactDOM from "react-dom/client";

import "./index.css";
import "./Home.css";
import "./globals.css"

import { ChakraProvider } from "@chakra-ui/react";
import Router from "./App";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <MantineProvider>
      <Router />
    </MantineProvider>
  </ChakraProvider>
);
