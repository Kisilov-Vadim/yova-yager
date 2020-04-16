import React from 'react'; 
import Contact from './Contact'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  language: state.language
})

const newContact = connect(
  mapStateToProps, 
  null
)(Contact)

export { newContact as Contact }; 