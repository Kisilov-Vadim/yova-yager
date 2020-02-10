import {connect} from 'react-redux';
import WorkPage from './WorkPage';
import {setCurrentWorkData, setIsLoaded} from '../../store/actions';

const mapStateToPros = state => ({
  works: state.works,
  allImages: state.allImages, 
  currentWorkData: state.currentWorkData, 
  isLoaded: state.isLoaded
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