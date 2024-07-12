import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

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
      textAlign="center"
    >
      <Text marginTop="60px" letterSpacing="2px" marginBottom="8px" fontWeight="bold" fontFamily="Poppins" color="white" fontSize="medium" textAlign="center">
        WEDDING ANNOUNCEMENT
      </Text>
      <Box height="calc(90% - 130px)" display="flex" justifyContent="center" alignItems="center">
        <div>
          <Text fontFamily="Butler" fontWeight="light" color="white" fontSize="4xl">
            TIFFANY & JARED
          </Text>
          <Text fontFamily="Butler" fontWeight="light" color="white" fontSize="4xl" textAlign="center">
            #TImetoshaRE
          </Text>
        </div>
      </Box>

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Button bgColor="#F9F7F4" onClick={handleOpen} borderRadius="none" minWidth="2rem" height="30px" padding="0 2.4rem">
          <Text fontFamily="Newsreader">Open</Text>
        </Button>
      </motion.div>
    </Box>
  );
};

export default CoverRight;
