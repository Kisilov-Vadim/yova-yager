import SocialityPage from './SocialityPage';
import { connect } from 'react-redux';

const mapStateToPros = state => ({
  allSocialities: state.allSocialities,
  language: state.language,
  allText: state.allText
})

const newSocialityPage = connect(
  mapStateToPros, 
  null
)(SocialityPage)

export { newSocialityPage as SocialityPage };