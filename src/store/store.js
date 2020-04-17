import { ACTIONS } from './actions'; 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  screenWidth: 1440, 
  menuShow: false, 
  isLoaded: false, 
  categories: [],
  featured: [], 
  works: [], 
  allSocialities: [], 
  settings: [], 
  allImages: [], 
  allText: [],
  currentWorkData: false, 
  language: 'en'
}; 

export const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.SET_SCREEN_WIDTH: 
      return {
        ...state, 
        screenWidth: action.width
      }
    case ACTIONS.SET_MENU_SHOW: 
      return {
        ...state, 
        menuShow: action.status, 
      }; 
    case ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories
      }
    case ACTIONS.SET_FEATURED:
      return {
        ...state,
        featured: action.featured
      }
    case ACTIONS.SET_WORKS:
      return {
        ...state,
        works: action.works
      }
    case ACTIONS.SET_ALLSOCIALITIES:
      return {
        ...state,
        allSocialities: action.allSocialities
      }
    case ACTIONS.SET_SETTINGS:
      return {
        ...state,
        settings: action.settings
      }
    case ACTIONS.SET_ISLOADED:
      return {
        ...state,
        isLoaded: action.value
      }
    case ACTIONS.SET_ALLIMAGES: 
      return {
        ...state,
        allImages: action.images
      }
    case ACTIONS.SET_ALLTEXT: 
      return {
        ...state, 
        allText: action.text
      }
    case ACTIONS.SET_CURRENTWORKPAGE: 
      return {
        ...state, 
        currentWorkData: action.work
      }
    case ACTIONS.CHANGE_LANGUAGE: 
      return {
        ...state, 
        language: action.language
      }
    default: 
      return state; 
  }
}

const store = createStore(
  reducer, 
  initialState,
  applyMiddleware(thunk)
)

export default store; 