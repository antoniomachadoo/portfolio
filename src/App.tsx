import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Interests from './components/Interests';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Languages from './components/Languages';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ProjectsGallery from './components/ProjectsGallery';

function App() {
  const [showProjects, setShowProjects] = useState(false);

  if (showProjects) {
    return <ProjectsGallery onBack={() => setShowProjects(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <Header onShowProjects={() => setShowProjects(true)} />
        <Interests />
        <Experience />
        <Skills />
        <Education />
        <Languages />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;