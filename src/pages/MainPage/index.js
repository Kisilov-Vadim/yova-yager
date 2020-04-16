import MainPage from './MainPage';
import { connect } from 'react-redux';

const mapStateToPros = state => ({
  works: state.works, 
  allText: state.allText
})

const newMainPage = connect(
  mapStateToPros, 
  null
)(MainPage)

export { newMainPage as MainPage };