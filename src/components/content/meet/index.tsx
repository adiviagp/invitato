import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import WaveSvg from "@/assets/svg/wave";

const Meet = (): JSX.Element => {
  return (
    <Box paddingTop="50px" paddingBottom="100px" textAlign="center">
      <Text fontFamily="Poppins">MEET THE BRIDE & GROOM</Text>
      <Box margin="40px auto 32px" position="relative" backgroundImage="/meet.webp" backgroundSize="cover" backgroundPosition="center center" width={280} height={280}>
        <WaveSvg position="absolute" top="-36px" left="-180px" />
      </Box>

      <Heading>TIFFANY SMITH</Heading>
      <Heading size="sm" margin="6px 0px">
        @tiffanyinvitato
      </Heading>
      <Text>
        The Daughter of <br /> Mr. Smith & Mrs. Bellyna
      </Text>

      {/*  */}

      <Heading paddingTop="32px">ROBIN JARED LUCAS</Heading>
      <Heading size="sm" margin="6px 0px">
        @jaredinvitato
      </Heading>
      <Text>
        The Son of <br />
        Mr. Lucas & Mrs. Anita
      </Text>
    </Box>
  );
};

export default Meet;
