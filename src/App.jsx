import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Modal } from './modal'

function App() {
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)

  return (
    <div className="App">
      <div>

      </div>
      <h1>Calcule o menor caminho</h1>
      <button onClick={() => setModal(!modal)}>mostrar aeroportos</button>
      {modal? 
      <Modal />: <div></div>
    }

      <div className="card">
        <button style={{backgroundColor:'black'}} onClick={() => setCount((count) => count + 1)}>
          Voce está a {count} km de distância seguindo a rota:
        </button>
        <p>{'rota'}</p>
      </div>

    </div>
  )
}

export default App
