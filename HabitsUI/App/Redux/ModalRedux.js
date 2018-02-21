import {TOGGLING_MODAL,TOGGLE_MODAL_SUCCESS,TOGGLE_MODAL_FAILURE,SAVING_HABIT} from '../Lib/constants'

const initialState = {
    isModalVisible: false,
    isFetching: false,
    error: false
  }

  export default function modalReducer (state = initialState, action) {
    switch (action.type) {
        case TOGGLING_MODAL:
        return{
            ...state,            
            isFetching:true
        }
        case TOGGLE_MODAL_SUCCESS:      
        return{
            ...state,
            isFetching:false,
            error:false,
            isModalVisible:action.data.isModalVisible
        }
        case TOGGLE_MODAL_FAILURE:
        return{
            error:true            
        }
        default:
        return state
    }
  }
  

  export function modalToggle(currentState) { 
      console.log('====================================');
      console.log(currentState);
      console.log('====================================');
      return{
          type:TOGGLING_MODAL,
          currentState:currentState
      }

          
  }