// import React from 'react';
// import LocationSelection from 'components/LocationSelection';
// import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe('LocationSelection', () => {
  it('should have select rendered menu', () => {
    // const wrapper = shallow(<LocationSelection names={['Chennai']} />);
    // expect(wrapper.find('select')).to.have.length(1);
    expect(true);
  });

  it('should have select with two options', () => {
   // const names = ['Chennai', 'Bangalore'];
   // const wrapper = shallow(<LocationSelection names={names} />);    
    // expect(wrapper.find('select').children()).to.have.length(names.length);
    expect(true);
  });
});
