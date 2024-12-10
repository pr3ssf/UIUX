import "../styles/MainProjects.css";

import far_1 from "../assets/side1-far/far_1.png";
import far_2 from "../assets/side1-far/far_2.png";
import far_3 from "../assets/side1-far/far_3.png";
import far_4 from "../assets/side1-far/far_4.png";

import _204_1 from "../assets/side2-204/204_1.png";
import _204_2 from "../assets/side2-204/204_2.png";
import _204_3 from "../assets/side2-204/204_3.png";
import _204_4 from "../assets/side2-204/204_4.png";

import sev_1 from "../assets/side3-sev/sev_1.jpg";
import sev_2 from "../assets/side3-sev/sev_2.jpg";
import sev_3 from "../assets/side3-sev/sev_3.jpg";
import sev_4 from "../assets/side3-sev/sev_4.jpg";
import sev_5 from "../assets/side3-sev/sev_5.jpg";

import Gallery from "../components/Gallery.tsx";
import { 
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ArrowButton from '../components/ArrowButton.tsx';

const SideProjects = () => {

  const gallery1 = [
    far_1, far_2, far_3, far_4
  ];

  const gallery2 = [
    _204_1, _204_2, _204_3, _204_4
  ];
  
  const gallery3 = [
    sev_1, sev_2, sev_3, sev_4, sev_5
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
          direction="up"
          onClick={scrollToPrevious}
          isDisabled={currentIndex === 0}
          mt="7rem"
        />

        {/* Кнопка вниз */}
        <ArrowButton
          direction="down"
          onClick={scrollToNext}
          isDisabled={currentIndex === containerIds.length - 1}
          mb="7rem"
        />
      </Flex>

      {/* Header Section */}
      <div id="parallax1" className="parallax-container">
        <h1>Side Projects</h1>
        <p>Freelance and self-developed cases</p>
      </div>

      <div className="buffer"></div>

      {/* Section 1 */}
      <div id="parallax2" className="parallax-container parallax-container2">
        <div className="container-element">
          <div className="element-text">
            <div className="element-text-title">FAR: Lone Sails</div>
            <div className="element-text-description">
              The creation of the ship model from *FAR: Lone Sails* was inspired by the game's post-apocalyptic and steampunk aesthetics. The design combines rugged, industrial elements with a sense of age and wear. The modeling focused on creating a distinctive silhouette, with weathered metal plating, pipes, and mechanical components. Textures like rust, faded paint, and exposed rivets were added to enhance the ship’s history. Dynamic lighting and shading were used to ensure it fit seamlessly into the game’s environment, highlighting its role as a vehicle for survival.
            </div>
          </div>
          <Gallery images={gallery1} userHeight="50%" userWidth="460px"/>
        </div>
      </div>

      <div className="buffer"></div>

      {/* Section 2 */}
      <div id="parallax3" className="parallax-container parallax-container2">
        <div className="container-element">
          <div className="element-text">
            <div className="element-text-title">Mercedes-Benz C204</div>
            <div className="element-text-description">
              The creation of the Mercedes-Benz C204 model focused on achieving an accurate, high-quality exterior representation. The model was built using reference images to ensure precise proportions and details, such as the distinctive curves, headlights, and grille. Special attention was given to the car’s surface smoothness, ensuring realistic reflections and a polished appearance. The exterior was modeled with a high level of detail, including body panels, wheels, and trims. The absence of the interior allowed for more focus on the car’s exterior features, ensuring it matched the original design while maintaining visual appeal.
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
            <div className="element-text-title">Last Interior Design Project</div>
            <div className="element-text-description">
              The last interior design project focused on creating a modern, functional, and cozy space. The room features neutral tones, with light walls and wooden accents, creating a warm and inviting atmosphere. A minimalist design approach was used, incorporating sleek furniture pieces like a dresser and vanity, accented with soft lighting. The furniture choices blend with the overall aesthetic, offering both style and practicality. The room also includes artistic elements, such as framed paintings and a round mirror, which add character and elegance. This space provides a balanced combination of comfort, functionality, and modern design.
            </div>
          </div>
          <Gallery images={gallery3} userHeight="50%" userWidth="730px"/>
        </div>
      </div>

      <div className="buffer"></div>
    </div>
  );
};

export default SideProjects;
