"use client";

import Content from "@/components/content";
import CoverLeft from "@/components/coverLeft";
import CoverRight from "@/components/coverRight";
import Sidebar from "@/components/sidebar";
import { Box, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function Home() {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenBtn = () => {
    setShowContent(true);
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

  return (
    <main>
      <Flex direction="row">
        {isDesktop ? (
          <Box width={["0%", "calc(100% - 500px)"]} display={["none", "block"]} position="fixed" overflow="hidden" zIndex="10" height="100vh">
            <CoverLeft />
          </Box>
        ) : null}

        <Box width={["100%", "500px"]} overflowY="auto" margin={isDesktop ? "0px 0px 0px calc(100% - 500px)" : "0 auto"} position="relative">
          {showContent ? (
            <>
              <div style={{ position: "fixed", left: "10px", bottom: "10px", zIndex: 1000 }}>
                <Sidebar />
                <IconButton marginLeft="10px" icon={isMusicPlaying ? <FaVolumeMute /> : <FaVolumeUp />} onClick={toggleMusic} aria-label={isMusicPlaying ? "Pause Music" : "Play Music"} />
              </div>
              <Content />
            </>
          ) : (
            <CoverRight handleOpen={handleOpenBtn} />
          )}
        </Box>
      </Flex>
      <audio ref={audioRef} src="/bg-sound.mp3" />
    </main>
  );
}
