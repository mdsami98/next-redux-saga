/* eslint-disable no-console */
import { all, call, takeLatest } from "redux-saga/effects";


function* logoutSaga(action) {
    try {
        console.log('kkkk')
    } catch (error) {
        console.log(error);
    }
}

function* authWatcher() {
    yield takeLatest('LOGIN', logoutSaga);
}

export default function* authSaga() {
    yield all([authWatcher()]);
}