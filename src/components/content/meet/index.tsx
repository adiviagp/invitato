import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import WaveSvg from "@/assets/svg/wave";

const Meet = (): JSX.Element => {
  return (
    <Box paddingTop="50px" paddingBottom="100px" textAlign="center">
      <Text fontFamily="Poppins">MEET THE BRIDE & GROOM</Text>
      <Box margin="40px auto 32px" position="relative" backgroundImage="/meet.webp" backgroundSize="cover" backgroundPosition="center center" width={280} height={280}>
        <WaveSvg />
      </Box>

      <Text fontFamily="Butler" fontSize="28px">
        TIFFANY SMITH
      </Text>
      <Text fontFamily="Butler" fontSize="20px" margin="8px 0px">
        @tiffanyinvitato
      </Text>
      <Text fontFamily="Newsreader" fontSize="18px">
        The Daughter of <br /> Mr. Smith & Mrs. Bellyna
      </Text>

      {/*  */}

      <Text fontFamily="Butler" fontSize="28px" paddingTop="32px">
        ROBIN JARED LUCAS
      </Text>
      <Text fontFamily="Butler" fontSize="20px" margin="8px 0px">
        @jaredinvitato
      </Text>
      <Text fontFamily="Newsreader" fontSize="18px">
        The Son of <br />
        Mr. Lucas & Mrs. Anita
      </Text>
    </Box>
  );
};

export default Meet;
