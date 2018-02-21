import { SAVING_HABIT, SAVING_HABIT_SUCCESS, SAVING_HABIT_FAILURE, TOGGLING_MODAL } from "../Lib/constants";

import { put, takeEvery } from 'redux-saga/effects'

import { getPeople3 } from '../Lib/api'

import { modalToggle } from '../Redux/ModalRedux'
import { fetchData } from '../Redux/HabitsRedux'


export function* saveHabit(action) {
    const { habit } = action
    try {
        const data = yield getPeople3()
        const currentModalState = true
        yield put({ type: SAVING_HABIT_SUCCESS, data })
        yield put(modalToggle(currentModalState))
        yield put(fetchData())

    } catch (error) {
        yield put({ type: SAVING_HABIT_FAILURE })
    }
}

export default function* saveHabitSaga(params) {
    yield takeEvery(SAVING_HABIT, saveHabit)
}


