import { createSlice } from "@reduxjs/toolkit";


export const weatherSlice = createSlice({
    name: 'image',
    initialState: null,
    reducers: {
        getWeather: () => {},
        setWeather: (state, action) => {
            return action.payload
        },
    }
})


export const {
    getWeather,
    setWeather
} = weatherSlice.actions;