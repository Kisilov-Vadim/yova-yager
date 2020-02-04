import {connect} from 'react-redux';
import WorkPage from './WorkPage'; 

const mapStateToPros = state => ({
  works: state.works,
})

const newWorkPage = connect(
  mapStateToPros, 
  null
)(WorkPage)

export { newWorkPage as WorkPage };