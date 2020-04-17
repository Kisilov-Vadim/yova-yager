import MainPage from './MainPage';
import { connect } from 'react-redux';
// import {setAllSocialities, setAllWorks, setIsLoaded} from '../../store/actions';

const mapStateToPros = state => ({
  works: state.works, 
  allText: state.allText,
  language: state.language
})

// const mapDispatchToProps = {
//   setAllSocialities,
//   setAllWorks,
//   setIsLoaded
// }

const newMainPage = connect(
  mapStateToPros, 
  null
)(MainPage)

export { newMainPage as MainPage };