import {put, call, takeEvery} from 'redux-saga/effects'
import { request } from "../services/api/requests"
import { usersUrl } from "../services/api/url"
import { getUsers, setUsers } from "../store/userSlice"

const fetchUserFromApi= () => request(usersUrl)

function* fetchUserWorker() {
    const data = yield call(fetchUserFromApi)
    yield put(setUsers(data))
}

export function* userWatcher() {
    yield takeEvery(getUsers.type, fetchUserWorker)
}