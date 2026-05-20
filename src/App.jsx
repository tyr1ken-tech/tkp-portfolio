import { useState } from 'react';
import ParticleBackground from './ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
