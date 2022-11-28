import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Projects from './components/projects/projects';
import Skills from './components/Skills/skills';


function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
