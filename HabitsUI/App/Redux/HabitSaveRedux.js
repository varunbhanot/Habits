import {SAVING_HABIT,SAVING_HABIT_SUCCESS,SAVING_HABIT_FAILURE} from '../Lib/constants'

const initialState = {
    data: [],
    isFetching: false,
    error: false
  }

  export default function modalReducer (state = initialState, action) {
    switch (action.type) {
        case SAVING_HABIT:
        return{
            ...state,            
            isFetching:true,            
        }
        case SAVING_HABIT_SUCCESS:      
        return{
            ...state,
            data: action.data,
            isFetching:false,
            error:false,            
        }
        case SAVING_HABIT_FAILURE:
        return{
            error:true            
        }
        default:
        return state
    }
  }

  export function saveHabit(habit) { 
    return{
        type:SAVING_HABIT        
    }
}

          