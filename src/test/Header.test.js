import React from 'react'
import {shallow} from 'enzyme'
import Header from '../components/Header/Header'

describe('Header component', () => {

  it('main .header container render', () => {
    let component = shallow(<Header />)
    let headerClass = component.find('.header')
    expect(headerClass.length).toBe(1)
  })
})

