import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Sincere = () => {
  return (
    <Box textAlign="center">
      <Box padding="0px 18px 4rem">
        <Text size="lg">OUR SINCERE,</Text>

        <Heading marginTop="2rem" marginBottom="0.8rem">
          TIFFANY & JARED
        </Heading>
        <Heading>#TImetoshaRE</Heading>
      </Box>

      <Box display="flex" height="160px">
        <Box backgroundImage="url('/sincere1.webp')" backgroundSize="cover" backgroundPosition="center center" width="100%" />
        <Box backgroundImage="url('/sincere2.webp')" backgroundSize="cover" backgroundPosition="center center" width="100%" />
        <Box backgroundImage="url('/sincere3.webp')" backgroundSize="cover" backgroundPosition="center center" width="100%" />
      </Box>
      <Box padding="24px 0px">
        <Heading>Invitato</Heading>
        <Text fontSize="0.875rem">Created with love by Invitato</Text>
        <Text fontSize="0.875rem">Song by So Far, So Good - Don Williams</Text>
        <Text fontSize="0.875rem">© 2024 Tiffany & Jared. All Rights Reserved</Text>
      </Box>
    </Box>
  );
};

export default Sincere;
