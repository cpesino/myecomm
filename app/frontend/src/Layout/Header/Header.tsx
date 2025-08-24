import { Box, Flex } from "@chakra-ui/react";
import { NavBar, ProfileMenu } from "../../components";

export const Header = () => {
  return (
    <Flex px={4} h={16} alignItems="center" justifyContent="space-between">
      <Box>
        <h1>My Ecomm</h1>
      </Box>
      <NavBar />
      <ProfileMenu />
    </Flex>
  );
};
