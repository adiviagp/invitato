import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Quote from "../../../assets/svg/quote";

const Pray = (): JSX.Element => {
  return (
    <Box backgroundColor="#f9f7f4" padding="3rem 2rem 4rem" display="flex" justifyContent="center" alignContent="center" flexDirection="column" textAlign="center">
      <Quote />
      <Text>
        “And of His signs is that He created for you from yourselves mates that you may find tranquility in them, and He placed between you affection and mercy. Indeed in that are signs for a people
        who give thought.”
      </Text>
      <Heading fontFamily="Poppins" marginTop="1.5rem" letterSpacing="2px" fontSize="1rem" fontWeight="700">
        - Q.S. AR-RUM: 21
      </Heading>
    </Box>
  );
};

export default Pray;
