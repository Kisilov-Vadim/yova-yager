import Footer from './Footer';
import { connect } from 'react-redux';

const mapStateToPros = state => ({
  settings: state.settings
})

const newFooter = connect(
  mapStateToPros, 
  null
)(Footer)

export { newFooter as Footer };