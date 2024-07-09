"use client";

import SlideUp from "@/utils/slideUp";
import { Box, Button, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const images = ["/coverLeft.jpeg", "/coverRight.jpeg"];

const Hero = (): JSX.Element => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImage((currentImage + 1) % images.length);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 500); // half the transition duration
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, []);

  //   const variants = {
  //     initial: {
  //       opacity: 0,
  //       scale: 1,
  //     },
  //     animate: {
  //       opacity: [0, 1, 1, 0],
  //       scale: [1, 1, 1.1],
  //       transition: {
  //         opacity: { times: [0, 0.1, 0.3, 0.4], duration: 2 },
  //         scale: { times: [0, 0.3, 0.4], duration: 2 },
  //       },
  //     },
  //   };

  return (
    // <Box position="relative" width="100%" height="100vh" overflow="hidden">
    //   <AnimatePresence>
    //     <motion.div
    //       key={images[currentImage]}
    //       initial="initial"
    //       animate="animate"
    //       exit="initial"
    //       variants={variants}
    //       style={{
    //         position: "absolute",
    //         width: "100%",
    //         height: "100%",
    //         backgroundImage: `linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(${images[currentImage]})`,
    //         backgroundPosition: "50%",
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     />
    //   </AnimatePresence>
    // </Box>
    <>
      <Box position="relative" width="100%" height="100vh" overflow="hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={images[currentImage]}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(${images[currentImage]})`,
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </AnimatePresence>
        <AnimatePresence initial={false}>
          <motion.div
            key={images[nextImage]}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(${images[currentImage]})`,
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </AnimatePresence>
      </Box>
    </>
  );
};

export default Hero;
