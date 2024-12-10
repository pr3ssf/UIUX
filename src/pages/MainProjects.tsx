import "../styles/MainProjects.css";

import fd_1 from "../assets/main1-FD/fd_1.png";
import fd_2 from "../assets/main1-FD/fd_2.png";
import fd_3 from "../assets/main1-FD/fd_3.png";
import fd_4 from "../assets/main1-FD/fd_4.png";

import bf_1 from "../assets/main2-BF/bf_1.png";
import bf_2 from "../assets/main2-BF/bf_2.png";
import bf_3 from "../assets/main2-BF/bf_3.png";
import bf_4 from "../assets/main2-BF/bf_4.png";

import rp_1 from "../assets/main3-RP/rp_1.png";
import rp_2 from "../assets/main3-RP/rp_2.png";
import rp_3 from "../assets/main3-RP/rp_3.png";
import rp_4 from "../assets/main3-RP/rp_4.png";

import ah_1 from "../assets/main4-AH/ah_1.png";
import ah_2 from "../assets/main4-AH/ah_2.png";
import ah_3 from "../assets/main4-AH/ah_3.png";

import { 
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ArrowButton from '../components/ArrowButton.tsx';
import Gallery from "../components/Gallery.tsx";

const MainProjects = () => {

  const gallery1 = [
    fd_1, fd_2, fd_3, fd_4
  ];

  const gallery2 = [
    bf_1, bf_2, bf_3, bf_4
  ];
  
  const gallery3 = [
    rp_1, rp_2, rp_3, rp_4
  ];

  const gallery4 = [
    ah_1, ah_2, ah_3
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
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </div>
          </div>
          <Gallery images={gallery1} />
        </div>
      </div>

      <div className="buffer"></div>

      {/* Section 2 */}
      <div id="parallax3" className="parallax-container parallax-container2">
        <div className="container-element">
          <div className="element-text">
            <div className="element-text-title">Project Title</div>
            <div className="element-text-description">
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </div>
          </div>
          <Gallery images={gallery2}/>
        </div>
      </div>

      <div className="buffer"></div>

      {/* Section 3 */}
      <div id="parallax4" className="parallax-container parallax-container2">
        <div className="container-element">
          <div className="element-text">
            <div className="element-text-title">Project Title</div>
            <div className="element-text-description">
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </div>
          </div>
          <Gallery images={gallery3}/>
        </div>
      </div>

      <div className="buffer"></div>

      <div id="parallax5" className="parallax-container parallax-container2">
        <div className="container-element">
          <div className="element-text">
            <div className="element-text-title">Project Title</div>
            <div className="element-text-description">
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </div>
          </div>
          <Gallery images={gallery4}/>
        </div>
      </div>

      <div className="buffer"></div>

    </div>
  );
};

export default MainProjects;
