import MassonryGallery from './MassonryGallery';
import { connect } from 'react-redux';

const mapStateToPros = state => ({
  works: state.works 
})

const newMassonryGallery= connect(
  mapStateToPros, 
  null
)(MassonryGallery)

export { newMassonryGallery as MassonryGallery };