import { Box, Text, Image, Flex } from '@chakra-ui/react';
import "../styles/MainProjects.css";
import yourImage from '../assets/Main Page.png'; // Импортируйте ваше изображение

const MainProjects = () => {
  return (
    <div>
      <div className="parallax-container">
        <h1>Main Projects</h1>
        <p>
          Main developed environments and levels. 
        </p>
      </div>

      <div className="buffer"></div>

      <div className="parallax-container parallax-container2">
        <Flex 
          direction={{ base: "column", md: "row" }} 
          alignItems="center" 
          gap={4} 
          paddingLeft={10} // Отступ слева
          paddingRight={10} // Отступ справа
        >
          <Box flex="2" maxWidth="600px"> {/* Задайте максимальную ширину для изображения */}
            <Image
              src={yourImage} // Используйте ваше изображение
              alt="Project Description"
              boxSize="100%" // Установите ширину изображения на 100% контейнера
              objectFit="cover" // Обеспечьте правильное отображение
              borderRadius="8px" // Добавьте закругление углов, если нужно
            />
          </Box>
          <Box flex="1" textAlign="left"> {/* Описание справа от изображения */}
            <Text fontSize="lg" fontWeight="bold">Project Title</Text>
            <Text mt={2}>
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </Text>
          </Box>
        </Flex>

        <Flex 
          direction={{ base: "column", md: "row" }} 
          alignItems="center" 
          gap={4} 
          paddingLeft={10} // Отступ слева
          paddingRight={10} // Отступ справа
        >
          <Box flex="1" textAlign="left"> {/* Описание справа от изображения */}
            <Text fontSize="lg" fontWeight="bold">Project Title</Text>
            <Text mt={2}>
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </Text>
          </Box>
          <Box flex="2" maxWidth="600px"> {/* Задайте максимальную ширину для изображения */}
            <Image
              src={yourImage} // Используйте ваше изображение
              alt="Project Description"
              boxSize="100%" // Установите ширину изображения на 100% контейнера
              objectFit="cover" // Обеспечьте правильное отображение
              borderRadius="8px" // Добавьте закругление углов, если нужно
            />
          </Box>
        </Flex>
      </div>

      <div className="buffer"></div>
    </div>
  );
};

export default MainProjects;