import { createStore } from 'redux'; 
import { ACTIONS } from './actions'; 

const initialState = {
  menuShow: false, 
}; 

const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.SET_MENU_SHOW: 
      return {
        ...state, 
        menuShow: action.status, 
      }; 
    default: 
      return state; 
  }
}

const store = createStore(
  reducer, 
  initialState
)

export default store; 