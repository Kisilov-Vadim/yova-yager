import Featured from './Featured';
import { connect } from 'react-redux';

const mapStateToPros = state => ({
  featured: state.featured, 
})

const newFeatured = connect(
  mapStateToPros, 
  null
)(Featured)

export { newFeatured as Featured };