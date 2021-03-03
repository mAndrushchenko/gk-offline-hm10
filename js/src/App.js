import React from 'react'
import Images from "./components/Images/Images"
import Users from "./components/Users/Users"
import Weather from "./components/Weather/Weather"
import { store } from './store/index'
import { Provider } from 'react-redux'
import './css/index.css'

const App = () => {
  return (
      <Provider store={store}>
          <div className="wrapper">
              <Images />
              <Users />
              <Weather />
          </div>
      </Provider>
  )
}

export default App
