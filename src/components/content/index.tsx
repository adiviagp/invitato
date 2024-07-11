import SlideUp from "@/utils/slideUp";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import Hero from "@/components/content/hero";
import Welcome from "@/components/content/welcome";
import Meet from "@/components/content/meet";
import Pray from "@/components/content/pray";
import Place from "@/components/content/place";
import Wedding from "@/components/content/wedding";
import LiveStreaming from "@/components/content/liveStreaming";
import GettingMarried from "@/components/content/gettingMerried";
import Wishes from "@/components/content/wishes";
import CountDown from "@/components/content/countDown";
import Sincere from "@/components/content/sincere";

const Content = (): JSX.Element => {
  return (
    <Box height="100%" width="100%" overflowY="auto">
      <Hero />
      <Welcome />
      <Meet />
      <Pray />
      <Place />
      <Wedding />
      <LiveStreaming />
      <GettingMarried />
      <Wishes />
      <CountDown />
      <Sincere />
    </Box>
  );
};

export default Content;
