import React from 'react'
import {shallow} from 'enzyme'
import Header from './Header'

describe('<Header />', () => {

  it('main .header container render', () => {
    let component = shallow('<Header />')
    let headerClass = component.find('.header')
    expect(headerClass.length).toBe(1)
  })
})