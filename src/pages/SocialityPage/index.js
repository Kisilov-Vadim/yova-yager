import SocialityPage from './SocialityPage';
import { connect } from 'react-redux';
import { setAllSocialities, setIsLoaded } from '../../store/actions';

const mapStateToPros = state => ({
  screenWidth: state.screenWidth,
  allSocialities: state.allSocialities,
  language: state.language,
  allText: state.allText,
  isLoaded: state.isLoaded
})

const mapDispatchToProps = {
  setAllSocialities,
  setIsLoaded
}

const newSocialityPage = connect(
  mapStateToPros, 
  mapDispatchToProps
)(SocialityPage)

export { newSocialityPage as SocialityPage };