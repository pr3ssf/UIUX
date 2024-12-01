import { Box, Heading, Text, Image, UnorderedList, ListItem, Link, Flex } from "@chakra-ui/react";
import gojoImage from '../assets/gojo.png'; // Импортируем изображение
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      {/* Параллакс контейнер 1 */}
      <div className="parallax-container">
        <h1>About Me</h1>
        <p style={{ textAlign: "center"}}>Quickly and efficiently complete tasks, including complex and unconventional cases.</p>
      </div>

      <div className="buffer"></div>

      {/* Параллакс контейнер 2 */}
      <div className="parallax-container parallax-container2">
        <div className="container-element" style={{ width: "100%", margin: "0 auto"}}>
          <div className='element-text' style={{ margin: "0 auto"}}>
            <div className="element-text-title">Alexander Saprykin</div>
            <div className="element-text-description">
              Generalist / Lead 3D<br />
              Moscow<br />
              Age: 21 years old
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>

          <div>
            <div className="element-text" >
              {/* Incomplete Higher Education */}
              <div>
                <div className="title" style={{ textAlign: "center"}}>Incomplete Higher Education</div>
                <div className="description"><strong>2025: Moscow Technical University of Communications and Informatics</strong></div>
                <div className="description">Information technology, Computer science and engineering</div>
              </div>

              {/* Professional Development, Courses */}
              <div style={{ marginTop: '20px' }}>
                <div className="title" style={{ textAlign: "center"}}>Professional Development, Courses</div>
                <UnorderedList className="description" style={{ fontWeight: "normal"}}>
                  <ListItem><strong>2024: Intro To Motion Graphics</strong> — Ducky 3D, Motion design in Blender</ListItem>
                  <ListItem><strong>2024: Fusion 360 Course</strong> — Udemy, CAD modelling in Fusion 360</ListItem>
                  <ListItem><strong>2021: 3D Modeller</strong> — 3D Club, Modelling and visualization in 3ds Max</ListItem>
                  <ListItem><strong>2021: Hard Surface</strong> — Blender Bros, Hard-surface modelling in Blender</ListItem>
                  <ListItem><strong>2021: PBR Texture Trip</strong> — XYZ School, Texturing in Substance Painter/Designer</ListItem>
                </UnorderedList>
              </div>
            </div>

            <div className='element-text'> 
              <p className="element-text-title">Skills</p> 
              <UnorderedList className="element-text-description"> 
                <ListItem><strong>Advanced:</strong> Blender, Marmoset Toolbag, Unity, Adobe Substance 3D Painter</ListItem>
                <ListItem><strong>Skillful:</strong> Adobe Photoshop, Git, Unreal Engine, RizomUV</ListItem> 
                <ListItem><strong>Normal:</strong> Adobe Substance 3D Designer, ZBrush</ListItem> 
              </UnorderedList> 
            </div>
          </div>
        </div>

        <div className="container-element">
          
        </div>
      </div>

      <div className="buffer"></div>

      {/* Параллакс контейнер 3 */}
      <div className="parallax-container parallax-container3">
        <div className="container-element">
          <div className='element-text'>
            <p className="element-text-title">Work Experience</p>
            <Text><strong>MAGNA ELECTRONICS</strong> (10.2023 — Present)</Text>
            <Text><strong>Position:</strong> Lead 3D</Text>
            <Text><strong>Experience:</strong></Text>
            <UnorderedList>
              <ListItem>Level design and level art for multiplayer maps (from concept to whitebox).</ListItem>
              <ListItem>Modeling in a realistic setting using AAA/Atlas pipelines with LOD support and rendering optimization.</ListItem>
              <ListItem>Full model integration in Unity, including retopology and UV mapping.</ListItem>
              <ListItem>Creation and use of single, tile, atlas, and trim textures.</ListItem>
              <ListItem>Development of shaders, VFX, post-processing, and particle systems.</ListItem>
              <ListItem>Optimization of scenes, models, and lighting, including setup and light baking.</ListItem>
              <ListItem>Task management: tracking, reviewing, and assigning tasks for junior 3D modelers.</ListItem>
              <ListItem>Collaboration with the backend team on engine-related questions and player-world interactions.</ListItem>
            </UnorderedList>
            <Text><strong>Achievements:</strong></Text>
            <UnorderedList>
              <ListItem>Developed 6 levels in a realistic setting with full integration of environment and lighting.</ListItem>
              <ListItem>Created over 50 hard-surface models across various pipelines.</ListItem>
              <ListItem>Designed 9 shaders for gameplay effects and network interactions.</ListItem>
              <ListItem>Prepared commercial project for publication on marketplaces.</ListItem>
            </UnorderedList>
          </div>
        </div>
      </div>

      <div className="buffer"></div>

      {/* Параллакс контейнер 4 */}
      <div className="parallax-container parallax-container4">
        <div className="container-element">
          <div className='element-text'>
            <p className="element-text-title">Education</p>
            <Text><strong>MTUCI</strong>, Bachelor's degree (2025)</Text>
            <Text>IT, Computer Science and Engineering</Text>
          </div>
        </div>

        <div className="container-element">
          <div className='element-text'>
            <p className="element-text-title">Courses</p>
            <UnorderedList>
              <ListItem><strong>XYZ School</strong> (2021) - PBR Substance Painter Texture Trip</ListItem>
              <ListItem><strong>Blender Bros</strong> (2022) - Hard Surface</ListItem>
              <ListItem><strong>Udemy</strong> (2024) - Fusion 360 Course</ListItem>
            </UnorderedList>
          </div>
        </div>
      </div>

      <div className="buffer"></div>
    </div>
  );
};

export default AboutMe;
