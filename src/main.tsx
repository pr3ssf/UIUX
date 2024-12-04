// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Определяем тему с новым шрифтом
const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  colors: {
    brand: {
      10: '#63b3ed', // ссылки
      20: '#9eb8ff', // ссылки - активный
      50: '#FEB4F4',  // Светло-розовый
      100: '#9CDEFF', // Светло-голубой
      200: '#F4EEE5', // Светло-бежевый
      300: '#3b4252', // Темный серо-синий
      350: '#2D3748', // Светлый серо-голубой
      400: '#2E3440', // Очень темный серо-синий
      // 50: '#f5f7ff',
      // 100: '#e6ecff',
      // 200: '#ccd3ff',
      // 300: '#b2baff',
      // 400: '#99a2ff',
      // 500: '#7f89ff',
      // 600: '#5f66cc',
      // 700: '#4a5199',
      // 800: '#343b66',
      // 900: '#1f2633',
    },
  },
});

// Рендерим приложение
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
