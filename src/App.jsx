import { useState } from 'react';
import ParticleBackground from './ParticleBackground';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ pointerEvents: 'none' }}>
        <ParticleBackground />
      </div>
    </>
  )
}

export default App
