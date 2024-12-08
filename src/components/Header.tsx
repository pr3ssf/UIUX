import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

interface QuoteResponse {
  q: string; // Цитата
}

export const Header = () => {
  const navigate = useNavigate();
  const [headerHeight, setHeaderHeight] = useState('70px');
  const [marginSize, setMarginSize] = useState(16);
  const [quote, setQuote] = useState<string>(''); // Состояние для цитаты

  // Функция для получения случайной цитаты
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random');
      const data: QuoteResponse[] = await response.json();
      if (data && data[0]) {
        setQuote(data[0].q); // Извлекаем цитату
      }
    } catch (error) {
      console.error('Ошибка при загрузке цитаты:', error);
      setQuote('Не удалось загрузить цитату'); // Сообщение об ошибке
    }
  };

  useEffect(() => {
    // Получаем цитату при монтировании компонента
    fetchQuote();
    
    // Обновляем цитату каждые 15 секунд
    const intervalId = setInterval(() => {
      fetchQuote();
    }, 15000); // 15 секунд

    // Убираем интервал при размонтировании компонента
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderHeight('40px');
        setMarginSize(4);
      } else {
        setHeaderHeight('70px');
        setMarginSize(16);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box w="100%" display="flex" justifyContent="center">
      <Box
        bg="brand.350"
        p={4}
        mt={`${marginSize}px`}
        width={`calc(100% - ${marginSize * 2}px)`}
        h={headerHeight}
        display="flex"
        justifyContent="flex-end"
        borderRadius="7px"
        transition="height 0.3s ease, padding 0.3s ease, width 0.3s ease, margin-top 0.3s ease"
        position="fixed"
        top={0}
        zIndex={1000}
      >
        <Flex direction="row" alignItems="center" justifyContent="space-between" w="100%">
          <Box color="white" fontSize="md" padding={4} width="50%">
            <Text fontStyle="italic" minWidth="100%">{quote}</Text> {/* Отображаем цитату */}
          </Box>

          <Flex direction="row" alignItems="center">
            <Link
              padding={4}
              color="brand.200"
              fontSize="md"
              cursor="pointer"
              _hover={{ textDecoration: 'underline', color: 'brand.100' }}
              onClick={() => navigate('/')}
            >
              Main Works
            </Link>
            <Link
              padding={4}
              color="brand.200"
              fontSize="md"
              cursor="pointer"
              _hover={{ textDecoration: 'underline', color: 'brand.100' }}
              onClick={() => navigate('/sideprojects')}
            >
              Side Projects
            </Link>
            <Link
              padding={4}
              color="brand.200"
              fontSize="md"
              cursor="pointer"
              _hover={{ textDecoration: 'underline', color: 'brand.100' }}
              onClick={() => navigate('/aboutme')}
            >
              About Me
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
