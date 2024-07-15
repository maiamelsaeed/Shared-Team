"use client";

import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import DialogComp from "../shared/AlertDialog";
import MobileNav from "../components/MobileNav";
import SidebarContent from "../components/Sidebarcontent";

const SidebarLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenTask,
    onOpen: onOpenTask,
    onClose: onCloseTask,
  } = useDisclosure();
  const {
    isOpen: isOpenSearch,
    onOpen: onOpenSearch,
    onClose: onCloseSearch,
  } = useDisclosure();

  return (
    <>
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        <SidebarContent
          onClose={onClose}
          display={{ base: "none", md: "block" }}
          onOpenTask={onOpenTask}
          onOpenSearch={onOpenSearch}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent
              onClose={onClose}
              onOpenTask={onOpenTask}
              onOpenSearch={onOpenSearch}
            />
          </DrawerContent>
        </Drawer>
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          <Outlet />
        </Box>
      </Box>

      <DialogComp
        isOpen={isOpenTask}
        onClose={onCloseTask}
        title={"Bla Bla Bla"}
      >
        <h3>Hello New Task</h3>
      </DialogComp>

      <DialogComp
        isOpen={isOpenSearch}
        onClose={onCloseSearch}
        title={"Bla Bla Bla"}
      >
        <h3>Hello Search</h3>
      </DialogComp>
    </>
  );
};

export default SidebarLayout;
