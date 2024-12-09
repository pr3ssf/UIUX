import { 
  UnorderedList, 
  ListItem, 
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ArrowButton from '../components/ArrowButton.tsx';
import "../styles/AboutMe.css";
import mePhoto from '../assets/mePhoto.jpg';

const AboutMe = () => {
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

      {/* Параллакс контейнер 1 - Intro */}
      <div id="parallax1" className="parallax-container">
        <h1>About Me</h1>
        <p style={{ textAlign: "center" }}>
          Quickly and efficiently complete tasks, including complex and unconventional cases.
        </p>
      </div>

      <div className="buffer"></div>

      {/* Параллакс контейнер 2 - Self */}
      <div id="parallax2" className="parallax-container parallax-container2">
      <div className="container-element" style={{ flexDirection: "row", width: "100%", margin: "0 auto", minHeight: "100%"}}>
          <div className="element-text" style={{ margin: "0 auto", width: "35%", }}>
            <div className="element-text-title">Alexander Saprykin</div>
            <div className="element-text-description">
              Generalist / Lead 3D, Moscow, 21 y.o.
            </div>
            <img className="element-image" src={mePhoto} alt="My Photo" style={{minWidth: "56%", }}/>
          </div>

          <div style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 auto",
              width: "65%",
              gap: "8px",
              
            }}
            >
            <div className="element-text">
              {/* Incomplete Higher Education */}
              <div>
                <div className="title" style={{ textAlign: "center" }}>
                  Incomplete Higher Education
                </div>
                <div className="description">
                  <strong>2025: Moscow Technical University of Communications and Informatics</strong>
                </div>
                <div className="description">
                  Information technology, Computer science and engineering
                </div>
              </div>

              {/* Professional Development, Courses */}
              <div style={{ marginTop: "20px" }}>
                <div className="title" style={{ textAlign: "center" }}>
                  Professional Development, Courses
                </div>
                <UnorderedList className="description" style={{ fontWeight: "normal" }}>
                  <ListItem>
                    <strong>2024: Intro To Motion Graphics</strong> — Ducky 3D, Motion design in Blender
                  </ListItem>
                  <ListItem>
                    <strong>2024: Fusion 360 Course</strong> — Udemy, CAD modelling in Fusion 360
                  </ListItem>
                  <ListItem>
                    <strong>2021: 3D Modeller</strong> — 3D Club, Modelling and visualization in 3ds Max
                  </ListItem>
                  <ListItem>
                    <strong>2021: Hard Surface</strong> — Blender Bros, Hard-surface modelling in Blender
                  </ListItem>
                  <ListItem>
                    <strong>2021: PBR Texture Trip</strong> — XYZ School, Texturing in Substance Painter/Designer
                  </ListItem>
                </UnorderedList>
              </div>
            </div>

            <div className="element-text">
              <div className="element-text-title">Skills</div>
              <UnorderedList className="element-text-description">
                <ListItem>
                  <strong>Advanced:</strong> Blender, Marmoset Toolbag, Unity, Adobe Substance 3D Painter
                </ListItem>
                <ListItem>
                  <strong>Skillful:</strong> Adobe Photoshop, Git, Unreal Engine, RizomUV
                </ListItem>
                <ListItem>
                  <strong>Normal:</strong> Adobe Substance 3D Designer, ZBrush
                </ListItem>
              </UnorderedList>
            </div>
          </div>
        </div>
      </div>

      <div className="buffer"></div>

      {/* Параллакс контейнер 3 - Work Experience */}
      <div id="parallax3" className="parallax-container parallax-container3">
        <div
          className="container-element"
          style={{ display: "flex", flex: "1", flexDirection: "column", width: "100%" }}
        >
          <div className="element-text" style={{ width: "100%", textAlign: "center" }}>
            <div className="title">Work Experience</div>
          </div>

          <div className="element-text" style={{ width: "100%" }}>
            <div className="title">MAGNA ELECTRONICS (10.2023 — Present)</div>
            <div>
              <strong>Position:</strong> Lead 3D
            </div>
            <div>
              <strong>Experience:</strong>
            </div>
            <UnorderedList>
              <ListItem>Level design and level art for multiplayer maps (from concept to whitebox).</ListItem>
              <ListItem>
                Modeling in a realistic setting using AAA/Atlas pipelines with LOD support and rendering optimization.
              </ListItem>
              <ListItem>Full model integration in Unity, including retopology and UV mapping.</ListItem>
              <ListItem>Creation and use of single, tile, atlas, and trim textures.</ListItem>
              <ListItem>Development of shaders, VFX, post-processing, and particle systems.</ListItem>
              <ListItem>Optimization of scenes, models, and lighting, including setup and light baking.</ListItem>
              <ListItem>
                Task management: tracking, reviewing, and assigning tasks for junior 3D modelers.
              </ListItem>
              <ListItem>
                Collaboration with the backend team on engine-related questions and player-world interactions.
              </ListItem>
            </UnorderedList>
            <div>
              <strong>Achievements:</strong>
            </div>
            <UnorderedList>
              <ListItem>
                Developed 6 levels in a realistic setting with full integration of environment and lighting.
              </ListItem>
              <ListItem>Created over 50 hard-surface models across various pipelines.</ListItem>
              <ListItem>Designed 9 shaders for gameplay effects and network interactions.</ListItem>
              <ListItem>Prepared commercial project for publication on marketplaces.</ListItem>
            </UnorderedList>
          </div>
        </div>
      </div>

      <div className="buffer"></div>

      {/* Параллакс контейнер 4 - Freelace & Contacts */}
      <div id="parallax4" className="parallax-container parallax-container4">
        <div
          className="container-element"
          style={{ display: "flex", flex: "1", flexDirection: "column", width: "100%" }}
        >
          <div className="element-text" style={{ width: "100%" }}>
            <div className="title">Freelance</div>
            <div>
              <strong>Generalist 3D</strong>
            </div>
            <UnorderedList>
              <ListItem>
                Full cycle of 3D model and level development for VR and multiplayer projects, including concept
                creation, modeling, setup, and optimization.
              </ListItem>
              <ListItem>
                Participation in projects: VR shooter in a closed location, drone assembly and testing training, drone
                racing for Yandex Games.
              </ListItem>
              <ListItem>
                Collaboration with development teams, integration of models and assets into game engines (Unreal Engine
                5, Unity).
              </ListItem>
              <ListItem>
                Industrial and interior design, creation of models for visualization and compositing.
              </ListItem>
              <ListItem>
                Support for game projects, including level design, graphics optimization, and custom model development.
              </ListItem>
            </UnorderedList>
          </div>

          <div className="element-text" style={{ width: "100%" }}>
            <div className="title">Contacts</div>
            <div>
              Телефон: <strong >+7 915 560-80-64</strong>
            </div>
            <div>
              Email: <strong>pressf.dev@gmail.com</strong>
            </div>
            <div>
              Telegram:{" "}
              <a href="https://t.me/pr3ss_f" target="_blank" rel="noopener noreferrer">
                <strong>https://t.me/pr3ss_f</strong>
              </a>
            </div>
            <div>
              ArtStation:{" "}
              <a href="https://artstation.com/pressfk" target="_blank" rel="noopener noreferrer">
                <strong>artstation.com/pressfk</strong>
              </a>
            </div>
            <div>
              Behance:{" "}
              <a href="https://behance.net/pressfk" target="_blank" rel="noopener noreferrer">
                <strong>behance.net/pressfk</strong>
              </a>
            </div>
          </div>
          
        </div>
      </div>

      <div className="buffer"></div>

    </div>
  );
};

export default AboutMe;
