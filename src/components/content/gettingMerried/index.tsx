import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import WaveSvg from "@/assets/svg/wave";
import LeftArrow from "@/assets/svg/leftArrow";
import RightArrow from "@/assets/svg/rightArrow";

const GettingMarried = (): JSX.Element => {
  return (
    <Box paddingTop="50px" textAlign="center">
      <Heading lineHeight="1.33" fontWeight="600">
        Tiffany & Jared are <br />
        Getting Married!
      </Heading>
      <Box margin="30px auto" position="relative" backgroundImage="/dua.jpg" backgroundSize="cover" backgroundPosition="center center" width={240} height={330}>
        <WaveSvg position="absolute" top="-36px" left="-180px" />
      </Box>

      <Text size="lg" marginBottom="30px" textDecoration="underline">
        WATCH OUR VIDEO
      </Text>

      <Heading fontSize="1.125rem" fontWeight="700" marginBottom="1rem">
        25 MAY 2018
      </Heading>
      <Text padding="0px 80px" fontStyle="normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin malesuada sapien, sit amet sodales ex sagittis quis. Suspendisse facilisis mi volutpat urna pulvinar, quis aliquet
        dui lobortis. Sed egestas consequat risus, eu mollis est tincidunt accumsan.
      </Text>
      <Box display="flex" gap="2" justifyContent="center" alignContent="center" padding="3rem 0 3rem">
        <Button backgroundColor="#f9f7f4" border="1px solid #000" width="70px" fontSize="1.5rem" padding="5px 10px">
          <LeftArrow />
        </Button>
        <Button backgroundColor="#f9f7f4" border="1px solid #000" width="70px" fontSize="1.5rem" padding="5px 10px">
          <RightArrow />
        </Button>
      </Box>
    </Box>
  );
};

export default GettingMarried;
