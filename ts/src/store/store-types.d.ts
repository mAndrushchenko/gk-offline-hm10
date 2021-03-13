import { store, reducer } from "./index"

/** general types*/
export type TReducer = ReturnType<typeof reducer>

export type TAppDispatch = typeof store.dispatch

/**  types for Image component*/
export type TImageState = {
    id: number
    webformatURL: string
}

export type TArrayImagesState = TImageState[]

export interface IImagesState {
    images: TImageState[]
}

/**  types for Users component*/

export type TUserState = {
    id: number
    name: string
    email: string
    phone: string
    website: string
    username: string
}

export type TArrayUsersState = TUserState[]

export interface IUsersState {
    users: TArrayUsersState
}

/** for Weather component */
export type TWeatherState = {
    name: string
    description: string
    icon: string
    temp: number
    feels_like: number
}

export interface IWeatherState {
    weather: TWeatherState
}