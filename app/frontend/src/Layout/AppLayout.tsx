import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export interface IAppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Box as="main" flex="1">
        <Container>{children}</Container>
      </Box>
      <Footer />
    </Flex>
  );
};
