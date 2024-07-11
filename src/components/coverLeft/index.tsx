import React from "react";
import { Box, Text } from "@chakra-ui/react";
import SlideUp from "@/utils/slideUp";

const CoverLeft = (): JSX.Element => {
  return (
    <Box
      height="100vh"
      width="100%"
      backgroundImage="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('/coverLeft.jpeg')"
      backgroundSize="cover"
      backgroundPosition="center center"
      borderRight="8px solid rgba(0, 0, 0, 0.24)"
      padding="42px"
    >
      <SlideUp>
        <Text fontFamily="Poppins" fontWeight="700" letterSpacing="2px" color="white" fontSize="medium">
          WEDDING ANNOUNCEMENT
        </Text>
      </SlideUp>
      <Box paddingTop="32px">
        <Text fontFamily="Butler" fontWeight="light" color="white" fontSize="7xl" lineHeight="1" letterSpacing="4px">
          TIFFANY &
        </Text>
        <Text fontFamily="Butler" fontWeight="light" color="white" fontSize="7xl" letterSpacing="4px">
          JARED
        </Text>
      </Box>
      <SlideUp>
        <Text fontFamily="Butler" fontWeight="300" color="white" maxWidth="800px" fontStyle="italic">
          Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat
          disampaikan awan kepada hujan yang menjadikannya tiada. <br /> — Sapardi Djoko Damono
        </Text>
      </SlideUp>
    </Box>
  );
};

export default CoverLeft;
