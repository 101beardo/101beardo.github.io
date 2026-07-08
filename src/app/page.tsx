import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Github from '../components/Github';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Experience />
        <Skills />
        <Github />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
