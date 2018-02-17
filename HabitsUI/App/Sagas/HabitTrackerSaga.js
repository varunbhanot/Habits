import { SAVING_DATA_SUCCESS,SAVING_DATA_FAILURE,SAVING_PROGRESS } from "../Lib/constants";
import {put,takeEvery} from 'redux-saga/effects'

import {getPeople2} from '../Lib/api'


export function* saveProgress(action) {
    try {
        const data = yield getPeople2()
        yield put({type:SAVING_DATA_SUCCESS,data})         
    } catch (error) {
        yield put({type:SAVING_DATA_FAILURE})
    }
}

export default function* watchSaveProgress(params) {
    yield takeEvery(SAVING_PROGRESS,saveProgress)
}