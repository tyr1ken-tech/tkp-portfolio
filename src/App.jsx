import { useState } from 'react';
import ParticleBackground from './ParticleBackground';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="relative w-full min-h-screen">
      <ParticleBackground />
      <Navbar />
    </main>
  )
}

export default App
