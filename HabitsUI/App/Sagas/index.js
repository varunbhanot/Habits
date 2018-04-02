import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'



/* ------------- Sagas ------------- */


import habitsSaga, { habitsSagas } from './HabitsSagas'
import  watchSaveProgress  from './HabitTrackerSaga'
import modalsSaga from "./ModalSagas";
import saveHabitSaga from './SaveHabitSagas'
import statsSaga from './StatisticsSaga'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([    
    habitsSaga(),
    watchSaveProgress(),
    modalsSaga(),
    saveHabitSaga(),
    statsSaga()
  ])
}
