import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <div className="App">
                  <Navbar/>
                <div className="content">
                  <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                  </Switch>
                </div>
                </div>
      </Router> 
    </>
  )
}

export default App
