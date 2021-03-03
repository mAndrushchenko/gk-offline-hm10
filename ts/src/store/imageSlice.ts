import { createSlice } from "@reduxjs/toolkit"
import { IImagesState } from './store-types'

export const imageSlice = createSlice({
    name: 'image',
    initialState: null,
    reducers: {
        getImages: () => {},
        setImages: (state, action) => action.payload
    }
})

export const {
    getImages,
    setImages
} = imageSlice.actions

export const selectImage = (state: IImagesState) => state.images