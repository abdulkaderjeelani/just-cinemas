import React from 'react';
import Home from 'components/Home';
import MovieGrid from 'containers/MovieGrid';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe('HomeComponent', () => {
  it('should have render MovieGrid', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).to.contain(<MovieGrid />);
  });
});
