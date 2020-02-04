import SocialityPage from './SocialityPage';
import { connect } from 'react-redux';

const mapStateToPros = state => ({
  allSocialities: state.allSocialities, 
})

const newSocialityPage = connect(
  mapStateToPros, 
  null
)(SocialityPage)

export { newSocialityPage as SocialityPage };