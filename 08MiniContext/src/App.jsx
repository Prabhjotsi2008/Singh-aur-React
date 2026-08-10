import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider name="Prabhjot"> 
      <Login /> {/* these two are the children which were specified in the UserContextProvider.jsx // They can acess the data using useContext hook. */}
      <Profile />
    </UserContextProvider>
  )
}

export default App
