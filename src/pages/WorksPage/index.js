import WorksPage from './WorksPage';
import { connect } from 'react-redux';
import {setAllWorks, setIsLoaded} from '../../store/actions';

const mapStateToPros = state => ({
  works: state.works, 
  language: state.language,
  isLoaded: state.isLoaded
})

const mapDispatchToProps = {
  setAllWorks,
  setIsLoaded
}

const newWorksPage = connect(
  mapStateToPros, 
  mapDispatchToProps
)(WorksPage)

export { newWorksPage as WorksPage };