import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Quote from "../../../assets/svg/quote";
import SlideUp from "@/utils/slideUp";

const Place = (): JSX.Element => {
  return (
    <Box padding="3rem 2rem">
      <SlideUp>
        <Text size="lg" marginTop="1.5rem">
          PLACE & TIME
        </Text>
      </SlideUp>
      <SlideUp delay={0.5}>
        <Heading margin="12px 0px">Holy Matrimony</Heading>
        <Text>Date: Monday, 26 February 2024</Text>
        <Text>Time: 10.00 WIB</Text>
      </SlideUp>
    </Box>
  );
};

export default Place;
