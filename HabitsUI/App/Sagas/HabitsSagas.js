import { FETCHING_DATA,FETCHING_DATA_SUCCESS,FETCHING_DATA_FAILURE } from "../Lib/constants";

import {put,takeEvery} from 'redux-saga/effects'

import getPeople from '../Lib/api'


export function* fetchData(action) {
    try {
        const data = yield getPeople()
        yield put({type:FETCHING_DATA_SUCCESS,data})         
    } catch (error) {
        yield put({type:FETCHING_DATA_FAILURE})
    }
}

export default function* habitsSaga(params) {
    yield takeEvery(FETCHING_DATA,fetchData)
}


