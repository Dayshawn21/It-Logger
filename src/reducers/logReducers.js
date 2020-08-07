import {GET_LOGS, SET_LOADING, LOG_ERROR} from '../action/types'


const initialState = {
  logs: null,
  current: null, 
  loading: false, 
  error: null
}

export default (state = initialState, action ) => {
  switch(action.type) {
    case GET_LOGS:
      return{
        ...state,
        logs:action.payload, 
        loading:false
      }
    case SET_LOADING:
      return{
        ...state, 
        loading:true
      }

    case LOG_ERROR:
      console.error(action.payload)
      return{
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}