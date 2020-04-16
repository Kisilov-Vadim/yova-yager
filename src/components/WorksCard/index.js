import {connect} from 'react-redux';
import WorksCard from './WorksCard';


const mapStateToPros = state => ({
  language: state.language
})

const newWorksCard = connect(
  mapStateToPros, 
  null
)(WorksCard)

export { newWorksCard as WorksCard };