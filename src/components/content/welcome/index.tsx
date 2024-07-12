import ButtonArrow from "@/components/ui/ButtonArrow";
import SlideUp from "@/utils/slideUp";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = ["/satu.jpg", "/dua.jpg", "/tiga.jpg", "/coverLeft.jpeg", "/coverRight.jpeg"];

const imageWidth = 280; // Width of each image in pixels
const imageHeight = 390; // Height of each image in pixels

const Welcome = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with index 2 as active

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  return (
    <Box padding="50px 0px 30px" bgColor="#FEFEFE" color="#1A1B1D" textAlign="center">
      <Box fontFamily="Poppins" fontSize="0.75rem" letterSpacing="2px">
        <SlideUp>
          <Text size="lg" fontSize="0.75rem">
            DEAR MR-MRS-MS,
          </Text>
          <Text size="lg" fontSize="0.75rem">
            FAMILY & FRIENDS
          </Text>
        </SlideUp>
      </Box>
      <SlideUp delay={0.5}>
        <Text padding="24px 0px" fontFamily="Butler" fontSize="2rem" fontWeight="bold" lineHeight="1.2">
          Welcome to <br /> Tiffany & Jared’s <br /> Wedding Website
        </Text>
      </SlideUp>
      <SlideUp delay={1}>
        <Text fontFamily="Butler" padding="0px 10% 24px" fontStyle="italic">
          Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.
        </Text>
      </SlideUp>
      <Box position="relative" width="full" overflow="hidden" height={`${imageHeight}px`}>
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            width: `${images.length * imageWidth}px`, // Calculate width based on number of images
            height: "100%",
            left: `calc(50% - ${currentIndex * imageWidth}px - ${imageWidth / 2}px)`, // Center the active image
          }}
        >
          {images.map((image, index) => {
            const isCurrent = index === currentIndex;
            return (
              <motion.img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                style={{
                  width: `${imageWidth}px`,
                  height: `${imageHeight}px`,
                  objectFit: "cover",
                  margin: "0 5px",
                  zIndex: isCurrent ? 1 : 0,
                  position: "relative",
                  scale: isCurrent ? 1.05 : 0.9,
                }}
                animate={{ scale: isCurrent ? 1.05 : 0.9 }}
                transition={{ duration: isCurrent ? 0.8 : 0 }} // Only apply duration for active image
              />
            );
          })}
        </motion.div>
      </Box>
      <Box display="flex" gap={2} justifyContent="flex-end" marginTop="30px" marginRight="50px">
        <ButtonArrow arrow="left" onClick={handlePrev} />
        <ButtonArrow arrow="right" onClick={handleNext} />
      </Box>
    </Box>
  );
};

export default Welcome;
