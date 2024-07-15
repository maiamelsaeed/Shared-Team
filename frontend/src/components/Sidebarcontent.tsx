import {
  Text,
  Box,
  useColorModeValue,
  Flex,
  CloseButton,
  BoxProps,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsMenuButtonWide } from "react-icons/bs";
import { GoInbox } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoTodayOutline, IoCalendarOutline } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import NavItem from "./NavItem";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}
interface SidebarProps extends BoxProps {
  onClose: () => void;
  onOpenTask: () => void;
  onOpenSearch: () => void;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Inbox", icon: GoInbox, path: "/inbox" },
  { name: "Today", icon: IoTodayOutline, path: "/" },
  { name: "Upcoming", icon: IoCalendarOutline, path: "/upcoming" },
  { name: "Filters & Labels", icon: BsMenuButtonWide, path: "/filters-labels" },
];

const SidebarContent = ({
  onClose,
  onOpenTask,
  onOpenSearch,
  ...rest
}: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "40%", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <Box
        style={{ textDecoration: "none" }}
        _focus={{ bg: "#ffefe5" }}
        _activeLink={{ bg: "#ffefe5" }}
        onClick={onOpenTask}
      >
        <Flex
          align="center"
          p="2"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          color="#dc4c3e"
          fontWeight={"600"}
          _hover={{ bg: "#f2efed" }}
        >
          <TiPlus
            style={{
              background: "#dc4c3e",
              color: "#fff",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              marginRight: " .8rem",
            }}
            fontSize="16px"
          />
          Add Task
        </Flex>
      </Box>
      <Box
        style={{ textDecoration: "none" }}
        _focus={{ bg: "#ffefe5" }}
        _activeLink={{ color: "#dc4c3e", bg: "#ffefe5" }}
        onClick={onOpenSearch}
      >
        <Flex
          align="center"
          p="2"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{ bg: "#f2efed" }}
        >
          <IoIosSearch style={{ marginRight: " 1rem" }} fontSize="16" />
          Search
        </Flex>
      </Box>
      {LinkItems.map((link) => (
        <NavItem key={link.name} path={link.path} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
export default SidebarContent;
