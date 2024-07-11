import SlideUp from "@/utils/slideUp";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import Hero from "@/components/content/hero";
import Welcome from "@/components/content/welcome";
import Meet from "@/components/content/meet";

const Content = (): JSX.Element => {
  return (
    <Box height="100%" width="100%" overflowY="auto">
      <Hero />
      <Welcome />
      <Meet />
    </Box>
  );
};

export default Content;
