import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import ArrowUp from "../assets/arrows/map-arrow-up-svgrepo-com.svg";
import ArrowDown from "../assets/arrows/map-arrow-down-svgrepo-com.svg";

interface ArrowButtonProps extends ButtonProps {
  direction: "up" | "down"; // Указывает направление стрелки
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, ...props }) => {
  // Выбираем иконку в зависимости от направления
  const icon = direction === "up" ? <img src={ArrowUp} alt="Arrow Up" /> : <img src={ArrowDown} alt="Arrow Down" />;

  return (
    <Button
      width="40px"
      height="100px"
      border="2px solid gray"
      borderRadius="8px"
      background="rgba(255, 255, 255, 0.2)"
      backdropFilter="blur(10px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={0}
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
      {icon}
    </Button>
  );
};

export default ArrowButton;
