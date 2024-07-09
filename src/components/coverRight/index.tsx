import SlideUp from "@/utils/slideUp";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

interface CoverRightProps {
  handleOpen: any;
}

const CoverRight = ({ handleOpen }: CoverRightProps): JSX.Element => {
  return (
    <Box
      height="100vh"
      width="100%"
      backgroundImage="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('/coverRight.jpeg')"
      backgroundSize="cover"
      backgroundPosition="center center"
      padding="42px"
    >
      <Text color="white" fontSize="2xl">
        WEDDING ANNOUNCEMENT
      </Text>
      <Text fontFamily="Butler" fontWeight="light" color="white" fontSize="7xl">
        TIFFANY & JARED
      </Text>
      <Button colorScheme="blue" onClick={handleOpen}>
        Open
      </Button>
    </Box>
  );
};

export default CoverRight;
