import Dashboard from "./pages/private/dashboard.page"
import Login from "./pages/public/login/login.page"
import Register from "./pages/public/register/register.page"
import { useState } from "react"

function App() {
  const [ formToShow, setFormToShow ] = useState('login')
  const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false)
  return (
    <>
      {
        !isUserLoggedIn
          ? formToShow === 'login' ? <Login setFormToShow={setFormToShow} setIsUserLoggedIn={setIsUserLoggedIn}/> : <Register setFormToShow={setFormToShow} />
          : <Dashboard />
      }
    </>
  )
}

export default App
