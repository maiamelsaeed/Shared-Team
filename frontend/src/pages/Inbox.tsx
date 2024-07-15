import { useState } from "react";
import { Button, Heading } from "@chakra-ui/react";
import AddTask from "../components/AddTask";

const Inbox = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const handleOpen = () => {
    setShowAddTask((prevShowAddTask) => !prevShowAddTask);
  };

  return (
    <>
      <Heading>Inbox</Heading>
      <Button _hover={{ color: "#dc4c3e" }} boxSize={5} onClick={handleOpen}>
        +
      </Button>
      {showAddTask && <AddTask />}
    </>
  );
};

export default Inbox;
