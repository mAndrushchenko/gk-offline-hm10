import { put, call, takeEvery } from 'redux-saga/effects'
import { request } from "../services/api/requests"
import { imagesUrl } from "../services/api/url"
import { getImages, setImages } from "../store/imageSlice"
import { TypeArrayImagesState, TypeImageState } from "../store/store-types"

const fetchImageFromApi = () => request(imagesUrl)

function* fetchImageWorker() {
    try {
        const data: any = yield call(fetchImageFromApi)
        const images: TypeArrayImagesState = data.hits.map((image: any) => {
            return <TypeImageState>{
                id: image.id,
                webformatURL: image.webformatURL
            }
        })
        yield put(setImages(images))
    } catch (error) {
        throw new Error(error.message)
    }
}

export function* imageWatcher() {
    yield takeEvery(getImages.type, fetchImageWorker)
}

