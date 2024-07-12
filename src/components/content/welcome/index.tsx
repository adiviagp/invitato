import { Box, IconButton, Text } from "@chakra-ui/react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = ["/satu.jpg", "/dua.jpg", "/tiga.jpg", "/coverLeft.jpeg", "/coverRight.jpeg"];

const Welcome = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const scale = useTransform(x, [-300, 0, 300], [0.8, 1, 0.8]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      handleNext();
    } else if (info.offset.x > 100) {
      handlePrev();
    } else {
      // Snap back if not enough drag distance
      x.set(0);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    x.set(0); // Reset drag position
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    x.set(0); // Reset drag position
  };

  const getPrevIndex = () => {
    return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return (currentIndex + 1) % images.length;
  };

  return (
    <Box padding="50px 0px 30px" bgColor="#FEFEFE" color="#1A1B1D" textAlign="center">
      <Box fontFamily="Poppins" fontSize="0.75rem" letterSpacing="2px">
        <Text size="lg" fontSize="0.75rem">
          DEAR MR-MRS-MS,
        </Text>
        <Text size="lg" fontSize="0.75rem">
          FAMILY & FRIENDS
        </Text>
      </Box>

      <Text padding="24px 0px" fontFamily="Butler" fontSize="2rem" fontWeight="bold" lineHeight="1.2">
        Welcome to <br /> Tiffany & Jared’s <br /> Wedding Website
      </Text>
      <Text fontFamily="Butler" padding="0px 10% 24px" fontStyle="italic">
        Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.
      </Text>

      <Box position="relative" width="full" overflow="hidden" height="300px">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.8 }} // Adjust duration here
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1} // Add elasticity to dragging
            onDrag={(_, { offset }) => {
              // Move images forward/backward when dragging past bounds
              const moveBy = offset.x / 3;
              x.set(moveBy);
            }}
            onDragEnd={handleDragEnd}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              width: "100%",
              height: "100%",
              left: "0%",
            }}
          >
            <motion.img src={images[getPrevIndex()]} alt={`Slide ${getPrevIndex()}`} style={{ width: "33.33%", height: "100%", objectFit: "cover", margin: "0 5px" }} />
            <motion.img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              style={{ width: "33.33%", height: "100%", objectFit: "cover", scale, margin: "0 5px" }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.8 }} // Adjust duration here
            />
            <motion.img src={images[getNextIndex()]} alt={`Slide ${getNextIndex()}`} style={{ width: "33.33%", height: "100%", objectFit: "cover", margin: "0 5px" }} />
          </motion.div>
        </AnimatePresence>
      </Box>
      <Box display="flex" gap={2} justifyContent="flex-end" marginRight="8%" marginTop="20px">
        <IconButton padding="5px 10px" aria-label="left" icon={<FaAngleLeft />} onClick={handlePrev} />
        <IconButton padding="5px 10px" aria-label="right" icon={<FaAngleRight />} onClick={handleNext} />
      </Box>
    </Box>
  );
};

export default Welcome;
