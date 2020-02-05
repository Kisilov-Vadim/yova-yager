import MassonryGallery from './MassonryGallery';
import { connect } from 'react-redux';

const mapStateToPros = state => ({
  works: state.works, 
  screenWidth: state.screenWidth
})

const newMassonryGallery= connect(
  mapStateToPros, 
  null
)(MassonryGallery)

export { newMassonryGallery as MassonryGallery };