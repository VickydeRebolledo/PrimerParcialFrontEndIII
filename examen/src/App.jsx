import { useState } from 'react'
import './App.css'
import Form from './Form'
import Card from './Card'


function App() {
  const [personas, setPersonas] = useState([])
  const addPersona = (persona) => {
    setPersonas([...personas,persona]);
  };

  const borrar = () => {
    setPersonas([]);
  }; 


  return (
    <div className='App'>
    <h1>Primer examen de Front III</h1>
    <Form onAddPersona={addPersona}/>
    <Card personas={personas}/>
    <button onClick={borrar}>Borrar</button>
    </div>
    
  )
}

export default App
