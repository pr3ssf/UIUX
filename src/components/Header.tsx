import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';

export const Header = () => {
  const navigate = useNavigate();
  const [headerHeight, setHeaderHeight] = useState('70px'); // Начальная высота хедера
  const [marginSize, setMarginSize] = useState(16); // начальный марджин

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Если прокрутили больше чем на 50px
        setHeaderHeight('40px'); // Уменьшаем высоту
        setMarginSize(4);
      } else {
        setHeaderHeight('70px'); // Возвращаем высоту
        setMarginSize(16);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box w="100%" display='flex' justifyContent="center">
      <Box
        bg="brand.350"
        p={4}
        mt={`${marginSize}px`}
        width={`calc(100% - ${marginSize*2}px)`} // вычисление паддинга
        h={headerHeight}
        display="flex"
        justifyContent="flex-end"
        borderRadius="7px"
        transition="height 0.3s ease, padding 0.3s ease, width 0.3s ease, margin-top 0.3s ease" // смус анимации
        position="fixed" // фиксанция
        top={0} // расположение
        zIndex={1000} // выше контента
        fontWeight="normal"
      >
        <Flex direction="row" alignItems="center" gap="10px">
          <Link
            color="brand.200"
            fontSize="lg"
            cursor="pointer"
            _hover={{textDecoration: "underline", color: "brand.100" }}
            onClick={() => navigate('/')}
          >
            Main Projects
          </Link>
          <Link
            color="brand.200"
            fontSize="lg"
            cursor="pointer"
            _hover={{textDecoration: "underline", color: "brand.100" }}
            onClick={() => navigate('/sideprojects')}
          >
            Side Projects
          </Link>
          <Link
            color="brand.200"
            fontSize="lg"
            cursor="pointer"
            _hover={{textDecoration: "underline", color: "brand.100" }}
            onClick={() => navigate('/aboutme')}
          >
            About Me
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};
