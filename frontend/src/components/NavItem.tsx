import { Box, Flex, FlexProps, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { NavLink as RouteLink } from "react-router-dom";

interface NavItemProps extends FlexProps {
  icon: IconType;
  path: string;
  children: React.ReactNode;
}

const NavItem = ({ icon, path, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as={RouteLink}
      to={path}
      style={{ textDecoration: "none" }}
      _focus={{ bg: "#ffefe5" }}
      _activeLink={{ color: "#dc4c3e", bg: "#ffefe5" }}
    >
      <Flex
        align="center"
        p="2"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{ bg: "#f2efed" }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
      </Flex>
    </Box>
  );
};

export default NavItem;
