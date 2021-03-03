import { createSlice } from "@reduxjs/toolkit";



export const imageSlice = createSlice({
    name: 'image',
    initialState: null,
    reducers: {
        getImages: () => {},
        setImages: (state, action) => {
            return action.payload
        }
    }
})


export const {
    getImages,
    setImages
} = imageSlice.actions;