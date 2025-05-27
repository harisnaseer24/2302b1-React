import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'

function App() {
  const [count, setCount] = useState(100)

  return (
    <>
  
    <User />
     <h1>Hello World {8*8}</h1>

    </>
     
  )
}

export default App
