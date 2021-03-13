import React, { FC } from 'react'
import './css/index.css'
import { Images } from "./components/Images"
import { Users } from "./components/Users"
import { Weather } from "./components/Weather"
import { Provider } from 'react-redux'
import { store } from './store'

export const App: FC = () => {

    return (
        <Provider store={store}>
            <div className="wrapper">
                <Images/>
                <Users/>
                <Weather/>
            </div>
        </Provider>
    )
}

