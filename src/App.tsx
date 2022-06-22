import { useState } from 'react'
import logo from './logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Dietetica Vida Sana!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            Carrito: {count}
          </button>
        </p>
        <p>
          COMER es una NECESIDAD
        </p>
        <p>
          Comer SANO es un ARTE
        </p>
        <p>
          <a
            className="App-link"
            href="https://www.facebook.com/Diet%C3%A9tica-Vida-Sana-103786834750937"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://instagram.com/vidasanadiet?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
