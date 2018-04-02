import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, SAVING_PROGRESS, SAVING_DATA_SUCCESS, SAVING_DATA_FAILURE } from "../Lib/constants";

import { put, takeEvery, call } from 'redux-saga/effects'

import { getHabits,saveSchedule } from '../Lib/api'


export function* fetchData(action) {
    try {
        const data = yield call(getHabits, action.uniqueId);
        yield put({ type: FETCHING_DATA_SUCCESS, data });
    } catch (error) {
        yield put({ type: FETCHING_DATA_FAILURE })
    }
}

 export function* saveData(action) {
    
    try {
         const data = yield call(saveSchedule, action); 
         yield put({ type: SAVING_DATA_SUCCESS, data }); 
         const habitsData = yield call(getHabits, action.deviceId);
        yield put({ type: FETCHING_DATA_SUCCESS, data });
    } catch (error) {
        yield put({ type: SAVING_DATA_FAILURE })
    }
}

export default function* habitsSaga(params) {
    yield takeEvery(FETCHING_DATA, fetchData)
    yield takeEvery(SAVING_PROGRESS, saveData)
}


