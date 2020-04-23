import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, storeFactory } from '../../testUtilits/'; 

import { WorksCard } from './index';

const defaultProps = {
  image: 'String', 
  title: 'String', 
  location: 'string', 
  backgroundPici: true, 
  area: 'string',
  link: 'string'
}

const defaultState = {
  language: 'en',
  screenWidth: 850
}

let setUp = (initialState={}, props={}) => {
  const store = storeFactory({...defaultState,...initialState}); 
  const allProps = {...defaultProps, ...props}; 
  const wrapper = shallow(<WorksCard {...allProps} store={store} />).dive().dive(); 
  return wrapper; 
}

describe('screenWidth more then 850px', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ screenWidth: 1440 }); 
  })

  test('does not throw error with expected props', () => {
    checkProps(wrapper, defaultProps)
  })

  test('render div when screenWidth > 850px', () => {
    let mainDiv = findByTestAttr(wrapper, 'screenWidth-more-850'); 
    expect(mainDiv.length).toBe(1)
  })

  test('render background pici animation when backgroundPici === true', () => {
    wrapper = setUp({screenWidth: 1440}, { backgroundPici: true})
    let backgroundPici = findByTestAttr(wrapper, 'background-pici'); 
    expect(backgroundPici.length).toBe(1);
  })

  test('render background pici animation when backgroundPici === false', () => {
    wrapper = setUp({screenWidth: 1440}, { backgroundPici: false})
    let backgroundPici = findByTestAttr(wrapper, 'background-pici'); 
    expect(backgroundPici.length).toBe(0);
  })

  test('render card title', () => {
    let title = findByTestAttr(wrapper, 'title');
    expect(title.length).toBe(1)
  })

  test('render card location', () => {
    let location = findByTestAttr(wrapper, 'location');
    expect(location.length).toBe(1)
  })
})

describe('screenWidth less then 850px', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ screenWidth: 560 }); 
  })

  test('render div when screenWidth < 850px', () => {
    let mainDiv = findByTestAttr(wrapper, 'screenWidth-less-850'); 
    expect(mainDiv.length).toBe(1)
  })

  test('render background pici animation', () => {
    wrapper = setUp({screenWidth: 560}, { backgroundPici: true })
    let backgroundPici = findByTestAttr(wrapper, 'background-pici'); 
    expect(backgroundPici.length).toBe(0);
  })

  test('render card title', () => {
    let title = findByTestAttr(wrapper, 'title');
    expect(title.length).toBe(1)
  })

  test('render card location', () => {
    let location = findByTestAttr(wrapper, 'location');
    expect(location.length).toBe(1)
  })
})

