import { useState } from "react"
import Register from "./components/Register"
import Home from "./components/Home"
import { useEffect } from "react"

function App() {
  const [isLogin, setIsLogin] = useState(true)
  const [theme, setTheme] = useState("light")

  const handleLogin = () => {
    setIsLogin(prev => !prev)
  }

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light"
    if (theme) {
      setTheme(theme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <>
      {
        !isLogin ? <Register handleLogin={handleLogin} /> : <main>
          <Home theme={theme} setTheme={setTheme} />
        </main>
      }
    </>
  )
}

export default App
