import React from "react";
import { Box, Button, Heading } from "@chakra-ui/react";

const LiveStreaming = (): JSX.Element => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      flexDirection="column"
      textAlign="center"
      width="100%"
      height="280px"
      backgroundImage="url('/liveStreaming.webp')"
      backgroundSize="cover"
      backgroundPosition="center center"
      color="#FEFEFE"
    >
      <Heading>Wedding Gift</Heading>
      <Box width="150px" textAlign="center" margin="0 auto">
        <Button padding="16px 30px">
          <Heading size="sm" fontSize="18px">
            Send Gift
          </Heading>
        </Button>
      </Box>
    </Box>
  );
};

export default LiveStreaming;
