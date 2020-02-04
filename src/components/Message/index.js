import {connect} from 'react-redux';
import Message from './Message'; 

const mapStateToPros = state => ({
  featured: state.featured, 
  categories: state.categories,
  works: state.works,
})

const newMessage = connect(
  mapStateToPros, 
  null
)(Message)

export { newMessage as Message };