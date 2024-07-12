"use client";

import MusicDisabled from "@/assets/svg/musicDisabled";
import MusicEnabled from "@/assets/svg/musicEnabled";
import Content from "@/components/content";
import CoverLeft from "@/components/coverLeft";
import CoverRight from "@/components/coverRight";
import Sidebar from "@/components/sidebar";
import { Box, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);
  const [isDesktopReady, setIsDesktopReady] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenBtn = () => {
    setShowContent(true);
    setIsMusicPlaying(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const isDesktop = useBreakpointValue({ base: false, desktop: true });

  useEffect(() => {
    if (isDesktop !== undefined) {
      setIsDesktopReady(true);
    }
  }, [isDesktop]);

  return (
    <main>
      {isDesktopReady && (
        <Flex direction="row">
          {isDesktop ? (
            <Box width={["0%", "calc(100% - 500px)"]} display={["none", "block"]} position="fixed" overflow="hidden" zIndex="10" height="100vh">
              <CoverLeft />
            </Box>
          ) : null}

          <Box width={["100%", "500px"]} overflowY="auto" margin={isDesktop ? "0px 0px 0px calc(100% - 500px)" : "0 auto"} position="relative">
            {showContent ? (
              <>
                <div
                  style={{
                    position: "fixed",
                    left: "10px",
                    bottom: "10px",
                    zIndex: 1000,
                  }}
                >
                  <Sidebar />
                  <IconButton
                    borderRadius="50%"
                    backgroundColor="#9a7a5e"
                    marginLeft="10px"
                    icon={isMusicPlaying ? <MusicEnabled /> : <MusicDisabled />}
                    onClick={toggleMusic}
                    aria-label={isMusicPlaying ? "Play Music" : "Pause Music"}
                  />
                </div>
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 15,
                    duration: 1.5,
                  }}
                >
                  <Content />
                </motion.div>
              </>
            ) : (
              <motion.div
                key="coverRight"
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  duration: 5.5,
                }}
              >
                <CoverRight handleOpen={handleOpenBtn} />
              </motion.div>
            )}
          </Box>
        </Flex>
      )}
      <audio ref={audioRef} src="/bg-sound.mp3" />
    </main>
  );
}
