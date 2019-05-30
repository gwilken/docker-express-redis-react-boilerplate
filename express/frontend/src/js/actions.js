import { 
  WINDOW_RESIZE,
  PUSH_DATA
} from './constants'

export const windowResize = (field) => (
  {
    type: WINDOW_RESIZE,
    payload: field
  }
)
  
export const pushData = (data) => (
  {
    type: PUSH_DATA,
    payload: data
  }
)
