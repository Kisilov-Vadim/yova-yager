import {connect} from 'react-redux';
import WorkPage from './WorkPage';
import {setCurrentWorkData} from '../../store/actions';

const mapStateToPros = state => ({
  works: state.works,
  allImages: state.allImages, 
  currentWorkData: state.currentWorkData
})

const mapDispatchToProps = {
  setCurrentWorkData,
}

const newWorkPage = connect(
  mapStateToPros, 
  mapDispatchToProps
)(WorkPage)

export { newWorkPage as WorkPage };