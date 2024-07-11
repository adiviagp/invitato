"use client";

import ArrowDown from "@/assets/svg/arrowDown";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const images = ["/satu.jpg", "/dua.jpg", "/tiga.jpg", "/coverLeft.jpeg", "/coverRight.jpeg"];

const Hero = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden" backgroundColor="#000">
      {images.map((image, index) => (
        <Box key={index} position="absolute" top={0} left={0} width="100%" height="100%" style={{ zIndex: index === currentSlide ? 1 : 0 }}>
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              opacity: index === currentSlide ? 1 : 0,
            }}
            animate={{
              scale: index === currentSlide ? 1.1 : 1,
              opacity: index === currentSlide ? [0, 1, 1, 1] : 0,
            }}
            transition={{
              scale: { duration: 5, ease: "easeIn" },
              opacity: { duration: 5, ease: "easeIn", times: [0, 0.2, 0.8, 1] },
            }}
          />
        </Box>
      ))}
      <Box position="absolute" zIndex="999" height="100vh" width="100%" textAlign="center" padding="2rem">
        <Text size="lg" margin="3.75rem 0 0.5rem" color="#FEFEFE">
          WEDDING ANNOUNCEMENT
        </Text>
        <Box height="calc(90% - 130px)" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Text fontFamily="Butler" fontWeight="light" color="white" fontSize="4xl">
            TIFFANY & JARED
          </Text>
          <Text fontFamily="Butler" fontStyle="italic" fontWeight="300" color="white" fontSize="4xl" textAlign="center">
            #TImetoshaRE
          </Text>
        </Box>
        <Box display="flex" gap="3" justifyContent="flex-end" alignItems="center" marginTop="50px">
          <Text fontFamily="Poppins" fontSize="0.875rem" color="#FAFAFA">
            SCROLL TO BEGIN
          </Text>
          <ArrowDown />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
