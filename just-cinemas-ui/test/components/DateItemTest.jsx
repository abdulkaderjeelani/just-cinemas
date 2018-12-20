import React from 'react';
import DateItem from 'components/DateItem';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe('DateItem', () => {
  it('should have rendered date and day', () => {
    const wrapper = shallow(<DateItem name="Monday" />);

    expect(wrapper.find('h5')).to.have.text('Monday');
  });
});
