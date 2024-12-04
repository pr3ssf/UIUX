// ArrowButton.tsx
import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

interface ArrowButtonProps extends ButtonProps {
  symbol: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ symbol, ...props }) => {
  return (
    <Button
      width="40px"
      height="100px"
      border="2px solid gray"
      borderRadius="8px"
      background="rgba(255, 255, 255, 0.2)"
      backdropFilter="blur(10px)"
      color="black"
      fontSize="2xl"
      fontWeight="bold"
      _hover={{
        background: "rgba(255, 255, 255, 0.3)",
        borderColor: "rgb(45, 55, 72)",
      }}
      _focus={{
        outline: "none",
        boxShadow: "none",
      }}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
      {...props}
    >
      {symbol}
    </Button>
  );
};

export default ArrowButton;
