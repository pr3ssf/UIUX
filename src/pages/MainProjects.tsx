import { Box, Text } from '@chakra-ui/react';
import "../styles/MainProjects.css";

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
      <div className="card">
        
      </div>
      <div className="card">
        <div className="card-img"></div>
        <h3>Rock climbing</h3>
        <p>
          The goal is to reach the summit of a formation or the endpoint of a
          usually pre-defined route without falling
        </p>
        <a href="#">Learn more</a>
      </div>
      <div className="card">
        <div className="card-img"></div>
        <h3>Caving</h3>
        <p>
          Exploring underground through networks of tunnels and passageways,
          which can be natural or artificial.
        </p>
        <a href="#">Learn more</a>
      </div>
      <div className="card">
        <div className="card-img"></div>
        <h3>Paragliding</h3>
        <p>
          Get lift off from the mountain and enjoy through the splendor of the
          surrounding landscape by parachute.
        </p>
        <a href="#">Learn more</a>
      </div>
    </div>

    <div className="buffer"></div>

    </div>
    

  //   <Box p={5} height="100%">
  //     <Box h="10000px" />
  //     <Text fontSize="xl" color="brand.800">
  //       Main Projects
  //     </Text>
  //   </Box>
  );
};

export default MainProjects;
