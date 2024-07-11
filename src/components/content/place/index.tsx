import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Quote from "../../../assets/svg/quote";

const Place = (): JSX.Element => {
  return (
    <Box padding="3rem 2rem">
      <Text size="lg" marginTop="1.5rem">
        PLACE & TIME
      </Text>
      <Heading margin="12px 0px">Holy Matrimony</Heading>
      <Text>Date: Monday, 26 February 2024</Text>
      <Text>Time: 10.00 WIB</Text>
    </Box>
  );
};

export default Place;
