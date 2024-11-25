//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPojects from './pages/MainProjects';
import SideProjects from './pages/SideProjects';
import AboutMe from './pages/AboutMe';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Box } from '@chakra-ui/react';
import img from './assets/Main Page.png';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Box bgImage={img}>
        <Routes>
          <Route path="/" element={<MainPojects/>} />
          <Route path="/sideprojects" element={<SideProjects/>}/>
          <Route path="/aboutme" element={<AboutMe/>} />
        </Routes>
      </Box>
    <Footer />
    </BrowserRouter>
  );
 }
 export default App
