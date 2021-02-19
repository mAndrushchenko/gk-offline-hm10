import React from 'react'
import Images from "./components/Images"
import Users from "./components/Users"
import Weather from "./components/Weather"
import './css/index.css'

const App = () => {
  return (
    <div className="wrapper">
      <Images />
      <Users />
      <Weather />
    </div>
  )
}

export default App
