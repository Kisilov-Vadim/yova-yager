import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, render } from 'enzyme';

import Header from '../components/Header/Header'
import WorksCard from '../components/WorksCard/WorksCard'

configure({adapter: new Adapter()});

describe('Header component', () => {
  let component; 
  beforeEach(() => {
    component = shallow(<Header />);
  })

  it('main .header container have header class', () => {
    let headerClass = component.find('.header')
    expect(headerClass.length).toBe(1)
  })

  it("render correctly Header component", () => {
    const TextInputComponent = render(<WorksCard />);
    expect(TextInputComponent).toMatchSnapshot();
  });
})





