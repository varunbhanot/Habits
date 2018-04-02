import { FETCHING_STATS,FETCHING_STATS_SUCCESS,FETCHING_STATS_FAILURE } from '../Lib/constants'

const initialState = {
    data: [],
    isFetching: false,
    error: false
}

export default function statiscReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_STATS:
            return {
                ...state,
                isFetching: true,
            }
        case FETCHING_STATS_SUCCESS:
            return {
                ...state,
                data: action.data,
                isFetching: false,
                error: false,
            }
        case FETCHING_STATS_FAILURE:
            return {
                error: true
            }
        default:
            return state
    }
}

export function fetchStatistics(habitId) {
    return {
        type: FETCHING_STATS,
        habitId: habitId        
    }
}

