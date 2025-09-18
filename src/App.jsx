import { useState } from "react"
import Register from "./components/Register"
import Home from "./components/Home"

function App() {
  const [isLogin, setIsLogin] = useState(false)

  const handleLogin = () => {
    setIsLogin(prev => !prev)
  }

  return (
    <>
      {
        !isLogin ? <Register handleLogin={handleLogin} /> : <main>
          <Home />
        </main>
      }
    </>
  )
}

export default App
