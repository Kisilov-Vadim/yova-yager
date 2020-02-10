import {connect} from 'react-redux';
import WorksPageNav from './WorksPageNav';

const mapStateToPros = state => ({
  categories: state.categories,
})


const newWorksPageNav = connect(
  mapStateToPros, 
  null
)(WorksPageNav)

export { newWorksPageNav as WorksPageNav };