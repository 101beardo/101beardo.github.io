import { Box } from '@chakra-ui/react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Github from './components/Github';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';



function App() {
  return (
    <Box>
     <Navbar/>
     <Header/>
     <About/>
     <Skills/>
     <Github/>
     <Projects/>
     <Contact/>
     <Footer/>
    </Box>
  );
}

export default App;
