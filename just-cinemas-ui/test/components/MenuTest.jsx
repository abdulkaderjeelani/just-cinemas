import React from 'react';
import Home from 'components/Home';
import Menu from 'containers/Menu';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe('Menu', () => {
  it('Home should render Languge Menu', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).to.contain(<Menu />);
  });
});

