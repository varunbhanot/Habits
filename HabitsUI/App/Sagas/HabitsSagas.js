import { FETCHING_DATA,FETCHING_DATA_SUCCESS,FETCHING_DATA_FAILURE } from "../Lib/constants";

import {put,takeEvery,call} from 'redux-saga/effects'

import {getHabits} from '../Lib/api'


export function* fetchData(action) {
    try {
        const data = yield call(getHabits,action.uniqueId);
        yield put({type:FETCHING_DATA_SUCCESS,data});  
    } catch (error) {
        yield put({type:FETCHING_DATA_FAILURE})
    }
}

export default function* habitsSaga(params) {
    yield takeEvery(FETCHING_DATA,fetchData)
}


