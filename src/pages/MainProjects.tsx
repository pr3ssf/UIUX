import "../styles/MainProjects.css";
import image1_1 from "../assets/Main Page.png";
import image1_2 from "../assets/bgBubblesBlurred.png";
import image1_3 from "../assets/Main Page.png"

import { 
  UnorderedList, 
  ListItem, 
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ArrowButton from '../components/ArrowButton.tsx';
import Gallery from "../components/Gallery.tsx";

const MainProjects = () => {
  const gallery1 = [
    image1_1,
    image1_2,
    image1_3
    // Добавьте пути к своим изображениям
  ];

  const containerIds = ["parallax1", "parallax2", "parallax3", "parallax4"];
  const [currentIndex, setCurrentIndex] = useState(0);

    // Функция для блокировки прокрутки страницы
    const preventWheelScroll = (event: WheelEvent) => {
      event.preventDefault(); // Отменяет стандартное поведение прокрутки
    };
  
    useEffect(() => {

      // Всегда начинать с 1 элемента
      const firstElement = document.getElementById('parallax1');
      if (firstElement) {
        firstElement.scrollIntoView({ behavior: 'smooth' });
      }

      window.addEventListener('wheel', preventWheelScroll, { passive: false });
  
      // Очищаем обработчик при размонтировании компонента
      return () => {
        window.removeEventListener('wheel', preventWheelScroll);
      };

    }, []);

  // Перемещение по контейнерам
  const scrollToElement = (index: number, callback?: () => void) => {
    const elementId = containerIds[index];
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with id "${elementId}" not found`);
      return;
    }
    element.scrollIntoView({ behavior: "smooth" });

    // Задержка перед деакцивацией кнопки
    setTimeout(() => {
      if (callback) callback();
    }, 707);
  };

  // Прокрутка к следующему элементу
  const scrollToNext = () => {
    if (currentIndex < containerIds.length - 1) {
      const newIndex = currentIndex + 1;
      scrollToElement(newIndex, () => {
        setCurrentIndex(newIndex);
      });
    } else {
      console.log("Already at the last element");
    }
  };

  // Прокрутка к предыдущему элементу
  const scrollToPrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      scrollToElement(newIndex, () => {
        setCurrentIndex(newIndex);
      });
    } else {
      console.log("Already at the first element");
    }
  };

  return (
    <div>

      {/* Кнопки для прокрутки */}
      <Flex
        position="fixed"
        right="20px"
        top="0"
        height="100%"
        direction="column"
        justifyContent="space-between"
        zIndex="10"
      >
        {/* Кнопка вверх */}
        <ArrowButton
          symbol="up"
          onClick={scrollToPrevious}
          isDisabled={currentIndex === 0}
          mt="7rem"
        />

        {/* Кнопка вниз */}
        <ArrowButton
          symbol="down"
          onClick={scrollToNext}
          isDisabled={currentIndex === containerIds.length - 1}
          mb="7rem"
        />
      </Flex>

      {/* Header Section */}
      <div id="parallax1" className="parallax-container">
        <h1>Main Projects</h1>
        <p>Main developed environments and levels.</p>
      </div>

      <div className="buffer"></div>

      {/* Section 1 */}
      <div id="parallax2" className="parallax-container parallax-container2">
        <div className="container-element">
          <div className="element-text">
            <div className="element-text-title">Project Title</div>
            <div className="element-text-description">
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </div>
          </div>
          <Gallery images={gallery1}/>
        </div>
      </div>

      <div className="buffer"></div>

      {/* Section 2 */}
      <div id="parallax3" className="parallax-container parallax-container3">
        <div className="container-element">
          {/* <div style={{ flex: 2, maxWidth: "600px" }}>
            <img src={yourImage} alt="Project Description" className="element-image" />
          </div> */}
          <div className="element-text">
            <p className="element-text-title">Project Title</p>
            <p className="element-text-description">
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </p>
          </div>
        </div>

        <div className="container-element">
          <div className="element-text">
            <p className="element-text-title">Project Title</p>
            <p className="element-text-description">
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </p>
          </div>
          {/* <div style={{ flex: 2, maxWidth: "600px" }}>
            <img src={yourImage} alt="Project Description" className="element-image" />
          </div> */}
        </div>
      </div>

      <div className="buffer"></div>

      {/* Section 3 */}
      <div id="parallax4" className="parallax-container parallax-container4">
        <div className="container-element">
          {/* <div style={{ flex: 2, maxWidth: "600px" }}>
            <img src={yourImage} alt="Project Description" className="element-image" />
          </div> */}
          <div className="element-text">
            <p className="element-text-title">Project Title</p>
            <p className="element-text-description">
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </p>
          </div>
        </div>

        <div className="container-element">
          <div className="element-text">
            <p className="element-text-title">Project Title</p>
            <p className="element-text-description">
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </p>
          </div>
          {/* <div style={{ flex: 2, maxWidth: "600px" }}>
            <img src={yourImage} alt="Project Description" className="element-image" />
          </div> */}
        </div>
      </div>

      <div className="buffer"></div>
    </div>
  );
};

export default MainProjects;
