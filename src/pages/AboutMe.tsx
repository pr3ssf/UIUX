import { Box, Heading, Text, Image, UnorderedList, ListItem, Link, Flex } from "@chakra-ui/react";
import gojoImage from '../assets/gojo.png'; // Импортируем изображение

const AboutMe = () => {
  return (
    <Box
    maxWidth='100%'
    // bg='brand.200'
     >
      <Box h="100px" />
      <Box 
        maxWidth="70%" 
        mx="auto" 
        p={4} 
        fontFamily="Arial" 
        color="brand.400"
        //bg='brand.200' 
        >
        <Flex mb={10} justify="space-between" align="center">
          <Box textAlign="left">
            <Heading as="h1" size="xl" mb={1}>
              Alexander Saprykin (pressf)
            </Heading>
            <Text fontSize="lg">3D Construction Designer & 3D Artist</Text>
            <Text fontSize="md" color="gray.600">Work experience: 3 years</Text>
          </Box>
          <Image
            src={gojoImage} // Используем импортированное изображение
            alt="Alexander Saprykin"
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
            ml={4}
          />
        </Flex>

        <Box mb={10} textAlign="left"> {/* Выравнивание по левому краю */}
          <Heading as="h2" size="lg" mb={4}>Current Workplace</Heading>
          <Box mb={6}>
            <Heading as="h3" size="md">MAGNA ELECTRONICS LIMITED LIABILITY COMPANY</Heading>
              <Text><strong>Position:</strong> 3D Construction Designer (Multiplayer VR projects)</Text>
              <Text><strong>Responsibilities:</strong></Text>
            <UnorderedList>
              <ListItem>Level design and locations creation (Blender + Unity)</ListItem>
              <ListItem>Full pipeline model creation</ListItem>
              <ListItem>PBR texturing</ListItem>
              <ListItem>Optimization of models and scenes</ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box mb={10} textAlign="left"> {/* Выравнивание по левому краю */}
          <Heading as="h2" size="lg" mb={4}>Skills</Heading>
          <UnorderedList>
            <ListItem>Blender 3D</ListItem>
            <ListItem>Unity</ListItem>
            <ListItem>Adobe Substance 3D Painter</ListItem>
            <ListItem>UV Mapping, Retopology</ListItem>
            <ListItem>Git, Responsibility, Learnability</ListItem>
          </UnorderedList>
        </Box>

        <Box mb={10} textAlign="left"> {/* Выравнивание по левому краю */}
          <Heading as="h2" size="lg" mb={4}>Portfolio</Heading>
          <Text>
            Behance: <Link href="https://www.behance.net/alex_saprykin" isExternal color="blue.500">alex_saprykin</Link>
          </Text>
        </Box>
        <Box h="100px" />
      </Box>
    </Box>
  );
};

export default AboutMe;
