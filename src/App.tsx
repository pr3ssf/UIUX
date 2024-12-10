import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPojects from './pages/MainProjects';
import SideProjects from './pages/SideProjects';
import AboutMe from './pages/AboutMe';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<MainPojects/>} />
        <Route path="/sideprojects" element={<SideProjects/>}/>
        <Route path="/aboutme" element={<AboutMe/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
 }
 export default App
