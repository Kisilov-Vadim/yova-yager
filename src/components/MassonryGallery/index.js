import MassonryGallery from './MassonryGallery';
import { connect } from 'react-redux';

const mapStateToPros = state => ({
  language: state.language,
  allText: state.allText
})

const newMassonryGallery= connect(
  mapStateToPros, 
  null
)(MassonryGallery)

export { newMassonryGallery as MassonryGallery };