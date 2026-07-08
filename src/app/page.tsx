import React from 'react';
import Header from '../components/Header';
import Stats from '../components/Stats';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Github from '../components/Github';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <Github />
      <Projects />
      <Contact />
    </main>
  );
}
