import { TOGGLING_MODAL,TOGGLE_MODAL_SUCCESS,TOGGLE_MODAL_FAILURE } from "../Lib/constants";

import {put,takeEvery} from 'redux-saga/effects'


export function* modalToggle(action) {
    const {currentState} = action
    try {
        const data = {
            isModalVisible:!currentState
        }
        yield put({type:TOGGLE_MODAL_SUCCESS,data})         
    } catch (error) {
        yield put({type:TOGGLE_MODAL_FAILURE})
    }
}

export default function* modalsSaga(params) {
    yield takeEvery(TOGGLING_MODAL,modalToggle)
}


