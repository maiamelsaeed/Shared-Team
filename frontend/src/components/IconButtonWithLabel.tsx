import { Button, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IconButtonWithLabelProps {
  icon: ReactNode;
  label: string;
}

const IconButtonWithLabel = ({ icon, label }: IconButtonWithLabelProps) => {
  return (
    <Button variant="outline">
      {icon}
      <Box ml={2}>{label}</Box>
    </Button>
  );
};

export default IconButtonWithLabel;
