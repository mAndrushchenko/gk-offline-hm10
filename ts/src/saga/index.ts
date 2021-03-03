import { all } from 'redux-saga/effects'
import { imageWatcher } from "./imageSaga"
import { userWatcher } from "./userSaga"
import { weatherWatcher } from "./weatherSaga"

export function* rootWatcher() {
    yield all([imageWatcher(), userWatcher(), weatherWatcher()])
}