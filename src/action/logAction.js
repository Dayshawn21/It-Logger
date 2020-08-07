import {GET_LOGS, SET_LOADING, LOG_ERROR} from './types'

// export  const getLogs =() =>{
//   return async (dispatch) => {
//     setLoading();
//     const res = await fetch('/logs')
//     const data = await res.json()

//     dispatch({
//       type:GET_LOGS,
//       payload: data
//     })
//   }

// }
export  const getLogs =() => async dispatch =>{
  try {
      setLoading();
    const res = await fetch('/logs')
    const data = await res.json()

    dispatch({
      type:GET_LOGS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: LOG_ERROR,
      payload: err.response.data
    })
  }
   
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}