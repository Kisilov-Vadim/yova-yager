import WorksPage from './WorksPage';
import { connect } from 'react-redux';

const mapStateToPros = state => ({
  works: state.works, 
})

const newWorksPage = connect(
  mapStateToPros, 
  null
)(WorksPage)

export { newWorksPage as WorksPage };