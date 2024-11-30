import { Box, Heading, Text, Image, UnorderedList, ListItem, Link, Flex } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Box maxWidth='100%'>
      <Box h="100px" />
      <Box 
        maxWidth="70%" 
        mx="auto" 
        p={4} 
        fontFamily="Arial" 
        color="brand.400"
      >
        <Flex mb={10} justify="space-between" align="center">
          <Box textAlign="left">
            <Heading as="h1" size="xl" mb={1}>
              Saprykin Alexander
            </Heading>
            <Text fontSize="lg">Generalist/Lead 3D</Text>
            <Text fontSize="md" color="gray.600">Moscow</Text>
            <Text fontSize="md" color="gray.600">Age: 21 years old</Text>
          </Box>
        </Flex>

        <Box mb={10} textAlign="left">
          <Heading as="h2" size="lg" mb={4}>Contacts</Heading>
          <Text>Phone: +7 915 560-80-64</Text>
          <Text>Email: <Link href="mailto:pressf.dev@gmail.com">pressf.dev@gmail.com</Link></Text>
          <Text>Telegram: <Link href="https://t.me/pr3ss_f" isExternal color="blue.500">pr3ss_f</Link></Text>
          <Text>ArtStation: <Link href="https://artstation.com/pressfk" isExternal color="blue.500">artstation.com/pressfk</Link></Text>
          <Text>Behance: <Link href="https://behance.net/pressfk" isExternal color="blue.500">behance.net/pressfk</Link></Text>
        </Box>

        <Box mb={10} textAlign="left">
          <Heading as="h2" size="lg" mb={4}>Languages</Heading>
          <UnorderedList>
            <ListItem>Russian - C2 - Proficiency</ListItem>
            <ListItem>English - C1 - Advanced</ListItem>
          </UnorderedList>
        </Box>

        <Box mb={10} textAlign="left">
          <Heading as="h2" size="lg" mb={4}>Skills</Heading>
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
        </Box>

        <Box mb={10} textAlign="left">
          <Heading as="h2" size="lg" mb={4}>Work Experience</Heading>
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
        </Box>

        <Box mb={10} textAlign="left">
          <Heading as="h2" size="lg" mb={4}>Education</Heading>
          <Text><strong>MTUCI</strong>, Bachelor's degree (2025)</Text>
          <Text>IT, Computer Science and Engineering</Text>
        </Box>

        <Box mb={10} textAlign="left">
          <Heading as="h2" size="lg" mb={4}>Courses</Heading>
          <UnorderedList>
            <ListItem><strong>XYZ School</strong> (2021) - PBR Substance Painter Texture Trip</ListItem>
            <ListItem><strong>Blender Bros</strong> (2022) - Hard Surface</ListItem>
            <ListItem><strong>Udemy</strong> (2024) - Fusion 360 Course</ListItem>
          </UnorderedList>
        </Box>

        <Box mb={10} textAlign="left">
          <Heading as="h2" size="lg" mb={4}>About Me</Heading>
          <Text>
            Quickly and efficiently complete tasks, including complex and unconventional cases. 
            Possess flexible thinking that goes beyond assigned tasks, with a willingness to take on diverse responsibilities, backed by freelance experience. 
            Educated, open to new opportunities, and honest in communication and work. 
            Confidently fluent in conversational and technical English, with experience communicating with native speakers.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;