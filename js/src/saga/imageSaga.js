import {put, call, takeEvery } from 'redux-saga/effects'
import { request } from "../services/api/requests"
import { imagesUrl } from "../services/api/url"
import { getImages, setImages } from "../store/imageSlice"

const fetchImageFromApi= () => request(imagesUrl)

function* fetchImageWorker() {
    try {
        const data = yield call(fetchImageFromApi)
        yield put(setImages(data['hits']))
    } catch (error) {
        throw new Error(error.message)
    }
}

export function* imageWatcher() {
    yield takeEvery(getImages.type, fetchImageWorker)
}

