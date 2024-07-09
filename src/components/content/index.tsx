import SlideUp from "@/utils/slideUp";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import Hero from "@/components/content/hero";

const Content = (): JSX.Element => {
  return (
    <Box bg="blue.500" height="100%" width="100%" overflowY="auto">
      <Hero />
    </Box>
  );
};

export default Content;
