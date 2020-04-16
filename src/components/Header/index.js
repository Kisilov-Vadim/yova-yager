import Header from './Header';
import { connect } from 'react-redux';
import {setMenuShow, changeLanguage} from '../../store/actions';

const mapStateToPros = state => ({
  menuShow: state.menuShow,
  language: state.language 
})

const mapToDispatch = dispatch => ({
  setMenuShow: (status) => dispatch(setMenuShow(status)), 
  changeLanguage: (language) => dispatch(changeLanguage(language))
})

const newHeader = connect(
  mapStateToPros, 
  mapToDispatch
)(Header)

export { newHeader as Header };