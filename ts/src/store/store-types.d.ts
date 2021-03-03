import { store, reducer } from "./index"

/** general types*/
export type TReducer = ReturnType<typeof reducer>

export type TAppDispatch = typeof store.dispatch

/**  types for Image component*/
export type TypeImageState = {
    id: number
    webformatURL: string
}

export type TypeArrayImagesState = TypeImageState[]

export interface IImagesState {
    images: TypeImageState[]
}

/**  types for Users component*/

export type TypeUserState = {
    id: number
    name: string
    email: string
    phone: string
    website: string
    username: string
}

export type TypeArrayUsersState = TypeUserState[]

export interface IUsersState {
    users: TypeArrayUsersState
}

/** for Weather component */
export type TypeWeatherState = {
    name: string
    description: string
    icon: string
    temp: number
    feels_like: number
}

export interface IWeatherState {
    weather: TypeWeatherState
}