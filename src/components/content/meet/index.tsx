import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import WaveSvg from "@/assets/svg/wave";
import SlideUp from "@/utils/slideUp";

const Meet = (): JSX.Element => {
  return (
    <Box paddingTop="50px" paddingBottom="100px" textAlign="center">
      <SlideUp>
        <Text fontFamily="Poppins">MEET THE BRIDE & GROOM</Text>
      </SlideUp>
      <Box margin="40px auto 32px" position="relative" backgroundImage="/meet.webp" backgroundSize="cover" backgroundPosition="center center" width={280} height={280}>
        <WaveSvg position="absolute" top="-36px" left="-180px" />
      </Box>
      <SlideUp>
        <Heading>TIFFANY SMITH</Heading>
        <Heading size="sm" margin="6px 0px">
          @tiffanyinvitato
        </Heading>
        <Text>
          The Daughter of <br /> Mr. Smith & Mrs. Bellyna
        </Text>
      </SlideUp>
      {/*  */}

      <SlideUp>
        <Heading paddingTop="32px">ROBIN JARED LUCAS</Heading>
        <Heading size="sm" margin="6px 0px">
          @jaredinvitato
        </Heading>
        <Text>
          The Son of <br />
          Mr. Lucas & Mrs. Anita
        </Text>
      </SlideUp>
    </Box>
  );
};

export default Meet;
