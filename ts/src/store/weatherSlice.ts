import { createSlice } from "@reduxjs/toolkit"
import { IWeatherState } from "./store-types"

export const weatherSlice = createSlice({
    name: 'image',
    initialState: null,
    reducers: {
        getWeather: () => {},
        setWeather: (state, action) => action.payload
    }
})

export const {
    getWeather,
    setWeather
} = weatherSlice.actions

export const selectWeather = (state: IWeatherState) => state.weather
