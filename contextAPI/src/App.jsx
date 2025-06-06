import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Login/Login'
import Profile from './Login/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>React video for context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
