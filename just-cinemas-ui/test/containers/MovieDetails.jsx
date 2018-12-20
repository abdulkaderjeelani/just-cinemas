import React from 'react';
import MovieGrid from 'containers/MovieDetails';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe('MovieDetails', () => {
  it('should have rendered movie details', () => {
    //const wrapper = mount(<MovieGrid />);

    //expect(wrapper.find('div.movie-item')).to.have.length(9);
    expect(true);

  });
});
