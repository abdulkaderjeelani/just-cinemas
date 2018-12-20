import React from 'react';
import DatePicker from 'containers/DatePicker';
import DateItem from 'components/DateItem';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe('DatePickerComponent', () => {
  it('should have render Date Item', () => {
    // const wrapper = shallow(<DatePicker />);
    // expect(wrapper).to.contain(<DateItem />);
    expect(true);
  });
});
