import {
  Button,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { CiCalendar, CiFlag1 } from "react-icons/ci";
import { IoAlarmOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import IconButtonWithLabel from "./IconButtonWithLabel";

const AddTask = () => {
  return (
    <>
      <Stack
        mt={4}
        p={4}
        border="1px solid #ccc"
        borderRadius={10}
        boxShadow="md"
        maxW="800px"
        spacing={3}
      >
        <Input marginTop={2} variant="unstyled" placeholder="Task name" />
        <Input variant="unstyled" placeholder="Description" />
        <HStack>
          <IconButtonWithLabel icon={<CiCalendar />} label="Due date" />
          <IconButtonWithLabel
            icon={<MdOutlinePersonOutline />}
            label="Assignee"
          />
          <IconButtonWithLabel icon={<CiFlag1 />} label="Priority" />
          <IconButtonWithLabel icon={<IoAlarmOutline />} label="Reminders" />
          <Menu>
            <MenuButton
              px={4}
              py={2}
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.800" }}
            >
              ...
            </MenuButton>
            <MenuList>
              <MenuItem>Labels</MenuItem>
              <MenuItem>Location</MenuItem>
              <MenuDivider />
              <MenuItem>Add extentions...</MenuItem>
              <MenuDivider />
              <MenuItem>Edit task action...</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <Divider />
        <HStack justifyContent="flex-end">
          <Button variant="outline">Cancel</Button>
          <Button
            colorScheme="custom"
            variant="outline"
            sx={{
              bg: "#dc4c3e", // Orange background color
              borderColor: "#dc4c3e",
              color: "white",
              _hover: {
                bg: "#b33b2b",
              },
            }}
          >
            Add task
          </Button>
        </HStack>
      </Stack>
    </>
  );
};

export default AddTask;
