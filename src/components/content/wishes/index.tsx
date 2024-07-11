import React from "react";
import { Box, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import WaveSvg from "@/assets/svg/wave";

const Wishes = (): JSX.Element => {
  return (
    <Box backgroundColor="#f9f7f4" padding="3rem 2rem" textAlign="center">
      <Heading fontSize="2rem" marginBottom="1rem">
        Prayers & Wishes
      </Heading>
      <Text>
        Please leave your sincere prayers and wishes to us and <br /> our family:
      </Text>
      <Box margin="12px auto 18px" width="280px">
        <Input placeholder="Name" backgroundColor="#fefefe" border="1px solid #000" borderRadius="none" marginBottom="1rem" />
        <Input placeholder="The Relationship" backgroundColor="#fefefe" border="1px solid #000" borderRadius="none" marginBottom="1rem" />
        <Textarea placeholder="Prayers & Wishes" backgroundColor="#fefefe" border="1px solid #000" borderRadius="none" marginBottom="1rem" />
      </Box>

      <Text width="300px" margin="0 auto 10px">
        Hi, Tiffany & Jared. We are from Invitato want to congratulate for your wedding! May the years ahead be filled with lasting love and happiness. Tons of love!
      </Text>
      <Text fontFamily="Poppins" fontSize="0.875rem">
        - INVITATO, WEB INVITES
      </Text>
    </Box>
  );
};

export default Wishes;
