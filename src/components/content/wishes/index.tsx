import React from "react";
import { Box, Button, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import WaveSvg from "@/assets/svg/wave";
import SlideUp from "@/utils/slideUp";

const Wishes = (): JSX.Element => {
  return (
    <Box backgroundColor="#f9f7f4" padding="3rem 2rem" textAlign="center">
      <SlideUp>
        <Heading fontSize="2rem" marginBottom="1rem">
          Prayers & Wishes
        </Heading>
      </SlideUp>
      <SlideUp delay={0.25}>
        <Text>
          Please leave your sincere prayers and wishes to us and <br /> our family:
        </Text>
      </SlideUp>
      <SlideUp delay={0.5}>
        <Box margin="12px auto 18px" width="280px">
          <Input placeholder="Name" backgroundColor="#fefefe" border="1px solid #000" borderRadius="none" marginBottom="1rem" />
          <Input placeholder="The Relationship" backgroundColor="#fefefe" border="1px solid #000" borderRadius="none" marginBottom="1rem" />
          <Textarea placeholder="Prayers & Wishes" backgroundColor="#fefefe" border="1px solid #000" borderRadius="none" marginBottom="1rem" />
          <Box textAlign="right" marginBottom="50px">
            <Button fontFamily="Newsreader" padding="0.75rem 2rem" height="2.1rem" border="1px solid #000" borderRadius="none" backgroundColor="#cdc1b1" color="#FAFAFA">
              Submit
            </Button>
          </Box>
        </Box>
      </SlideUp>
      <SlideUp delay={0.75}>
        <Text width="300px" margin="0 auto 10px">
          Hi, Tiffany & Jared. We are from Invitato want to congratulate for your wedding! May the years ahead be filled with lasting love and happiness. Tons of love!
        </Text>
        <Text fontFamily="Poppins" fontSize="0.875rem">
          - INVITATO, WEB INVITES
        </Text>
      </SlideUp>
    </Box>
  );
};

export default Wishes;
