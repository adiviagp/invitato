import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ImgCoverLeft from "@/assets/coverLeft.jpeg";

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
      <Text color="white" fontSize="2xl">
        WEDDING ANNOUNCEMENT
      </Text>
      <Text fontFamily="Butler" fontWeight="light" color="white" fontSize="7xl">
        TIFFANY & JARED
      </Text>
      <Text fontFamily="Butler" fontWeight="light" color="white" fontSize="xl" maxWidth="800px">
        Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat
        disampaikan awan kepada hujan yang menjadikannya tiada. <br /> — Sapardi Djoko Damono
      </Text>
    </Box>
  );
};

export default CoverLeft;
