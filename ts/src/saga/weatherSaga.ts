import { put, takeEvery, call } from 'redux-saga/effects'
import { getWeather, setWeather } from "../store/weatherSlice"
import { request } from "../services/api/requests"
import { weatherUrl } from "../services/api/url"
import { TWeatherState } from "../store/store-types"

const fetchWeatherFromApi = () => request(weatherUrl)

function* fetchWeatherWorker() {
    const data: any = yield call(fetchWeatherFromApi)
    const weatherData: TWeatherState = {
        name: data.name,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: data.main.temp,
        feels_like: data.main.feels_like
    }
    yield put(setWeather(weatherData))
}

export function* weatherWatcher() {
    yield takeEvery(getWeather.type, fetchWeatherWorker)
}