import { put, takeEvery, call } from 'redux-saga/effects'
import { getWeather, setWeather } from "../store/weatherSlice"
import { request } from "../services/api/requests"
import { weatherUrl } from "../services/api/url"

const fetchWeatherFromApi = () => request(weatherUrl)

function* fetchWeatherWorker() {
    const data = yield call(fetchWeatherFromApi)
    yield put(setWeather(data))
}

export function* weatherWatcher() {
    yield takeEvery(getWeather.type, fetchWeatherWorker)
}