import Header from './Header';
import { connect } from 'react-redux';
import {setMenuShow} from '../../store/actions';

const mapStateToPros = state => ({
  menuShow: state.menuShow, 
})

const mapToDispatch = dispatch => ({
  setMenuShow: (status) => dispatch(setMenuShow(status)), 
})

const newHeader = connect(
  mapStateToPros, 
  mapToDispatch
)(Header)

export { newHeader as Header };