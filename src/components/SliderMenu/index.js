import SliderMenu from './SliderMenu';
import { connect } from 'react-redux';
import {setMenuShow} from '../../store/actions';

const mapStateToPros = state => ({
  menuShow: state.menuShow
})

const mapToDispatch = dispatch => ({
  setMenuShow: (status) => dispatch(setMenuShow(status)), 
})

const newSliderMenu = connect(
  mapStateToPros, 
  mapToDispatch
)(SliderMenu)

export { newSliderMenu as SliderMenu };