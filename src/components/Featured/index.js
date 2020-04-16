import Featured from './Featured';
import { connect } from 'react-redux';

const mapStateToPros = state => ({
  featured: state.featured,
  language: state.language, 
  allText: state.allText
})

const newFeatured = connect(
  mapStateToPros, 
  null
)(Featured)

export { newFeatured as Featured };