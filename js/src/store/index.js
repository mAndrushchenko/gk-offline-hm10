import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { imageSlice } from "./imageSlice"
import { userSlice } from "./userSlice"
import { weatherSlice } from "./weatherSlice"
import { rootWatcher } from "../saga"
import createSagaMiddleWare from "redux-saga"

const sagaMiddleWare = createSagaMiddleWare()

const reducer = combineReducers({
    images: imageSlice.reducer,
    users: userSlice.reducer,
    weather: weatherSlice.reducer
})

export const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleWare]
})

sagaMiddleWare.run(rootWatcher)
