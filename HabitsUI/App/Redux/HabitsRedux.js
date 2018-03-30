import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE,SAVING_PROGRESS,SAVING_DATA_SUCCESS,SAVING_DATA_FAILURE} from '../Lib/constants'
import  DeviceInfo  from 'react-native-device-info';
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCHING_DATA_FAILURE:
      return {        
        ...state,
        isFetching: false,
        error: true
      }
    case SAVING_DATA_SUCCESS:
      return{
        ...state,
        isFetching: true,
        data: action.data,
        error:false
      }
    case SAVING_PROGRESS:
    return {
      ...state,
      isFetching: true  
    }
    case SAVING_DATA_FAILURE:
    default:
      return state
  }
}


/**
|--------------------------------------------------
| Actions
|--------------------------------------------------
*/

export function fetchData() {
  const uniqueId = DeviceInfo.getUniqueID();
  return {
    type: FETCHING_DATA,
    uniqueId : uniqueId
  }
}

export function saveProgress(value){
  return {
    type: SAVING_PROGRESS
  }
}