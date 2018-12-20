import React from 'react';
import Header from 'components/Header';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe('Header', () => {
  it('should render Location Selector', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('LocationSelection')).to.have.length(0);
  });
});
