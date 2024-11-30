import { Box, Heading, Text, Image, UnorderedList, ListItem, Link, Flex } from "@chakra-ui/react";
import gojoImage from '../assets/gojo.png'; // Импортируем изображение

const AboutMe = () => {
  return (
    <div>
      {/* Параллакс контейнер 1 */}
      <div className="parallax-container">
        <h1>About Me</h1>
        <p>Quickly and efficiently complete tasks, including complex and unconventional cases.</p>
      </div>

      <div className="buffer"></div>

      {/* Параллакс контейнер 2 */}
      <div className="parallax-container parallax-container2">
        <div className="container-element">
          <div style={{ flex: 2, maxWidth: "600px" }}>
            <Image
              src={gojoImage}
              alt="Alexander Saprykin"
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
              ml={4}
            />
          </div>
          <div className='element-text'>
            <p className="element-text-title">Alexander Saprykin</p>
            <p className="element-text-description">
              Generalist / Lead 3D<br />
              Moscow<br />
              Age: 21 years old
            </p>
          </div>
        </div>

        <div className="container-element">
          <div className='element-text'>
            <p className="element-text-title">Skills</p>
            <UnorderedList>
              <ListItem>Unity - Experienced</ListItem>
              <ListItem>Unreal Engine - Skillful</ListItem>
              <ListItem>Blender - Expert</ListItem>
              <ListItem>RizomUV - Experienced</ListItem>
              <ListItem>Marmoset Toolbag - Expert</ListItem>
              <ListItem>Adobe Substance 3D Painter - Experienced</ListItem>
              <ListItem>Adobe Substance Designer - Skillful</ListItem>
              <ListItem>Adobe Photoshop - Experienced</ListItem>
              <ListItem>Git - Experienced</ListItem>
            </UnorderedList>
          </div>
          <div style={{ flex: 2, maxWidth: "600px" }}>
            <Image
              src={gojoImage}
              alt="Alexander Saprykin"
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="buffer"></div>

      {/* Параллакс контейнер 3 */}
      <div className="parallax-container parallax-container3">
        <div className="container-element">
          <div style={{ flex: 2, maxWidth: "600px" }}>
            <Image
              src={gojoImage}
              alt="Alexander Saprykin"
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
            />
          </div>
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
          <div style={{ flex: 2, maxWidth: "600px" }}>
            <Image
              src={gojoImage}
              alt="Alexander Saprykin"
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="buffer"></div>

      {/* Параллакс контейнер 4 */}
      <div className="parallax-container parallax-container4">
        <div className="container-element">
          <div style={{ flex: 2, maxWidth: "600px" }}>
            <Image
              src={gojoImage}
              alt="Alexander Saprykin"
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
            />
          </div>
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
          <div style={{ flex: 2, maxWidth: "600px" }}>
            <Image
              src={gojoImage}
              alt="Alexander Saprykin"
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="buffer"></div>
    </div>
  );
};

export default AboutMe;
