import React from 'react';
import MovieCertificate from 'components/MovieDetails/MovieCertificate';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe('MovieCertificate', () => {

  it('should show movie certificate', () => {
    const certificate = 'U';
    const wrapper = shallow(<MovieCertificate certificate={certificate}/>);

    expect(wrapper.find('.certificatebg')).to.have.text(certificate);
  });

});
