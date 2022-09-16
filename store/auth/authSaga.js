/* eslint-disable no-console */
import { all, call, put, takeLatest } from "redux-saga/effects";
import * as ACTION from './authActionType.js'


function* logoutSaga(action) {
    try {
        setTimeout(() => {
            
             put({
                type: ACTION.LOGIN_SUCCESS,
                payload: []
            });
        }, 1000);
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