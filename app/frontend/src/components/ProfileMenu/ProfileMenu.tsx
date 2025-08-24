import { Avatar, Box, Flex, Menu, Stack, Switch, Text } from "@chakra-ui/react";
import { IconLogout2 } from "@tabler/icons-react";
import { useColorMode } from "../ui/color-mode";

interface ProfileMenuProps {}

export const ProfileMenu: React.FC<ProfileMenuProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const avatar: string = `https://avatar.iran.liara.run/public/${
    Math.floor(Math.random() * 100) + 1
  }`;
  return (
    <Menu.Root>
      <Menu.Trigger rounded="full" focusRing="outside" cursor="pointer">
        <Avatar.Root>
          <Avatar.Fallback name="Jane Doe" />
          <Avatar.Image src={avatar} />
        </Avatar.Root>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content minW="240px">
          <Menu.Item value="profile">
            <Stack direction="row" alignItems="center">
              <Avatar.Root size="xs">
                <Avatar.Image src={avatar} />
              </Avatar.Root>
              <Box flex="1">
                <Text fontWeight="semibold">Jane Doe</Text>
              </Box>
            </Stack>
          </Menu.Item>
          <Menu.Separator mx={2} />
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel color="fg.muted" fontSize="xs">
              Account
            </Menu.ItemGroupLabel>
            <Menu.Item value="personalInfo">Personal Information</Menu.Item>
            <Menu.Item value="orders">Orders</Menu.Item>
          </Menu.ItemGroup>
          <Menu.Separator mx={2} />
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel color="fg.muted" fontSize="xs">
              General
            </Menu.ItemGroupLabel>
            <Menu.Item value="help">Help Center</Menu.Item>
            <Menu.Item value="termsAndCondition">
              Terms and Conditions
            </Menu.Item>
            <Menu.Item
              value="enableDarkMode"
              pointerEvents="none"
              _hover={{ bg: "transparent" }}
              cursor="default"
            >
              <Flex align="center" justify="space-between" w="full">
                <Text>Dark Mode</Text>
                <Switch.Root
                  pointerEvents="auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleColorMode();
                  }}
                  checked={isDarkMode}
                >
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                </Switch.Root>
              </Flex>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.Separator mx={2} />
          <Menu.Item
            value="logout"
            color="fg.error"
            _hover={{ bg: "bg.error", color: "fg.error" }}
          >
            <IconLogout2 />
            <Box flex="1">
              <Text>Sign Out</Text>
            </Box>
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
