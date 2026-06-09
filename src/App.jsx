import { useState } from 'react';
import ParticleBackground from './ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
    </main>
  )
}

export default App
