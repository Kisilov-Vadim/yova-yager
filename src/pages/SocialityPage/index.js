import SocialityPage from './SocialityPage';
import { connect } from 'react-redux';

const mapStateToPros = state => ({
  allSocialities: state.allSocialities, 
  categories: state.categories
})

const newSocialityPage = connect(
  mapStateToPros, 
  null
)(SocialityPage)

export { newSocialityPage as SocialityPage };