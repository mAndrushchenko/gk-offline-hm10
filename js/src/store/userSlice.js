import { createSlice } from "@reduxjs/toolkit"


export const userSlice = createSlice({
    name: 'image',
    initialState: null,
    reducers: {
        getUsers: () => {},
        setUsers: (state, action) => {
            return action.payload
        },
    }
})


export const {
    getUsers,
    setUsers,
} = userSlice.actions