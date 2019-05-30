import {
  WINDOW_RESIZE, 
  PUSH_DATA
} from './constants'

const initialState = {
  windowWidth:  window.innerWidth,
  windowHeight:  window.innerHeight,
  data: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case WINDOW_RESIZE:
      return { ...state, windowWidth: action.payload.width, windowHeight: action.payload.height }

    case PUSH_DATA:
      return {...state, data: [...state.data, action.payload] }
      
    default:
      return state;
    }
  }
  
  export default rootReducer
  