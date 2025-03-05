import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Navbar/>
      </div>
      <div className="content">
        <Home/>
      </div>
    </>
  )
}

export default App
