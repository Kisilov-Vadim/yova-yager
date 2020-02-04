import React from 'react';
import App from './App'; 
import { connect } from 'react-redux';
import {getAllData} from '../store/actions';

const mapStateToPros = state => ({
  categories: state.categories,
  featured: state.featured, 
  works: state.works, 
  settings: state.settings, 
  isLoaded: state.isLoaded
})

const mapToDispatch = {
   getAllData
}

const newApp = connect(
  mapStateToPros, 
  mapToDispatch
)(App)

export { newApp as App };