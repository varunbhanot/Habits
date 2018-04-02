import { FETCHING_STATS,FETCHING_STATS_SUCCESS,FETCHING_STATS_FAILURE } from "../Lib/constants";

import {put,takeEvery,call} from 'redux-saga/effects'

import {getStats} from '../Lib/api'


export function* fetchStats(action) {
    try {
        const data = yield call(getStats,action.habitId);
        yield put({type:FETCHING_STATS_SUCCESS,data});  
    } catch (error) {
        yield put({type:FETCHING_STATS_FAILURE})
    }
}

export default function* statsSaga(params) {
    yield takeEvery(FETCHING_STATS,fetchStats)
}


