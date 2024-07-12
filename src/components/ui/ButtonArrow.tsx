import React from "react";
import { Button } from "@chakra-ui/react";
import LeftArrow from "@/assets/svg/leftArrow";
import RightArrow from "@/assets/svg/rightArrow";

interface ButtonArrowProps {
  arrow: "left" | "right";
  onClick?: any;
}
const ButtonArrow = ({ arrow, onClick }: ButtonArrowProps): JSX.Element => {
  return (
    <>
      {arrow === "left" ? (
        <Button onClick={onClick} borderRadius="none" backgroundColor="#f9f7f4" border="1px solid #000" width="70px" height="30px" fontSize="1.5rem" padding="0px 10px">
          <LeftArrow />
        </Button>
      ) : (
        <Button onClick={onClick} borderRadius="none" backgroundColor="#f9f7f4" border="1px solid #000" width="70px" height="30px" fontSize="1.5rem" padding="0px 10px">
          <RightArrow />
        </Button>
      )}
    </>
  );
};

export default ButtonArrow;
