import { useState } from 'react';
import ParticleBackground from './ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import CredentialsAndGrowth from './components/CredentialsAndGrowth';
import GetInTouch from './components/GetInTouch';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Portfolio />
      <Experience />
      <CredentialsAndGrowth />
      <GetInTouch />
    </main>
  )
}

export default App
