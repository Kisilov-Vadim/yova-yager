export const ACTIONS = {
  SET_MENU_SHOW: 'SET_MENU_SHOW', 
  SET_CATEGORIES: 'SET_CATEGORIES', 
  SET_FEATURED: 'SET_FEATURED',
  SET_WORKS: 'SET_WORKS',  
  SET_SETTINGS: 'SET_SETTINGS', 
  SET_ISLOADED: 'SET_ISLOADED', 
  SET_ALLSOCIALITIES: 'SET_ALLSOCIALITIES',
  SET_ALLIMAGES: 'SET_ALLIMAGES', 
  SET_ALLTEXT: 'SET_ALLTEXT',
  SET_CURRENTWORKPAGE: 'SET_CURRENTWORKPAGE',
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE', 
}

export const setMenuShow = (status) => ({ type: ACTIONS.SET_MENU_SHOW, status });
export const setCurrentWorkData = (work) => ({ type: ACTIONS.SET_CURRENTWORKPAGE, work })
export const setIsLoaded = (value) => ({ type: ACTIONS.SET_ISLOADED, value }); 
export const changeLanguage = (language) => ({ type: ACTIONS.CHANGE_LANGUAGE, language }); 
const setCategories = (categories) => ({ type: ACTIONS.SET_CATEGORIES, categories }); 
const setFeatured = (featured) => ({ type: ACTIONS.SET_FEATURED, featured }); 
const setAllWorks = (works) => ({ type: ACTIONS.SET_WORKS, works }); 
const setAllSocialities = (allSocialities) => ({ type: ACTIONS.SET_ALLSOCIALITIES, allSocialities }); 
const setSettings = (settings) => ({ type: ACTIONS.SET_SETTINGS, settings }); 
const setAllImages = (images) => ({ type: ACTIONS.SET_ALLIMAGES, images }); 
const setAllText = (text) => ({ type: ACTIONS.SET_ALLTEXT, text }); 


export const getToken = async (url) => {
  let response = await fetch(url, {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"
    }, 
    body: JSON.stringify({
      email: "admin@admin.com", 
      password: "admin"
    })
  })
  return response.json(); 
}

export const getData = async (url, token) => {
  let response = await fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"
    }, 
    body: JSON.stringify({
      "api_token": token       
    })
  })
  return response.json(); 
}

export const getAllData = () => {
  return (dispatch) => {
    getToken('http://yova.praid.com.ua/api/login')
      .then(data => data.data['api_token'])
      .then(token =>  {
        Promise.all(
          [
            getData("http://yova.praid.com.ua/api/settings", token),
            getData("http://yova.praid.com.ua/api/category", token), 
            getData("http://yova.praid.com.ua/api/featured", token),
            getData("http://yova.praid.com.ua/api/allworks", token),
            getData("http://yova.praid.com.ua/api/allsocialities", token),
            getData("http://yova.praid.com.ua/api/images", token),
            getData("http://yova.praid.com.ua/api/text", token)
          ])
          .then(data => {
            dispatch(setSettings(data[0]))
            dispatch(setCategories(data[1]))
            dispatch(setFeatured(data[2]))
            dispatch(setAllWorks(data[3]))
            dispatch(setAllSocialities(data[4])) 
            dispatch(setAllImages(data[5]))
            dispatch(setAllText(data[6]))
            dispatch(setIsLoaded(true)); 
          })
          .catch(err => console.log(err)); 
      })
  }
}
