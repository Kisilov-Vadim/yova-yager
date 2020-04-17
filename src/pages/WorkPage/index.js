import {connect} from 'react-redux';
import WorkPage from './WorkPage';
import {setCurrentWorkData, setIsLoaded, setAllSocialities, setAllWorks} from '../../store/actions';

const mapStateToPros = state => ({
  screenWidth: state.screenWidth,
  works: state.works,
  currentWorkData: state.currentWorkData, 
  language: state.language
})

const mapDispatchToProps = {
  setCurrentWorkData,
  setIsLoaded
}

const newWorkPage = connect(
  mapStateToPros, 
  mapDispatchToProps
)(WorkPage)

export { newWorkPage as WorkPage };