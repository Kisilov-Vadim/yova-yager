import About from './About';
import { connect } from 'react-redux';

const mapStateToPros = state => ({
  screenWidth: state.screenWidth,
  language: state.language
})

const newAbout = connect(
  mapStateToPros, 
  null
)(About)

export { newAbout as About };