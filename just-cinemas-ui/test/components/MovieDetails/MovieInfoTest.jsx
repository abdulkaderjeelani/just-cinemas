import React from 'react';
import MovieInfo from 'components/MovieDetails/MovieInfo';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe('MovieInfo', () => {

  it('should show movie name in movie details', () => {
    const desc = {name: 'movieName'};
    const wrapper = shallow(<MovieInfo desc={desc}/>);

    expect(wrapper.find('#moviename')).to.have.text('movieName');
  });

  it('should show movie image in movie details', () => {
    const desc = {name: 'movieName'};
    const wrapper = shallow(<MovieInfo desc={desc}/>);

    expect(wrapper.find('img')).to.have.attr('alt', 'movieName');
    expect(wrapper.find('img')).to.have.attr('src', 'https://img.spicinemas.in/resources/images/movies/movie-name/1000x320.jpg');
  });

  it('should show synopsis in movie details', () => {
    const desc = {synopsis:'testSynopsis'};
    const wrapper = shallow(<MovieInfo desc={desc}/>);

    expect(wrapper.find('#synopsis')).to.have.text('testSynopsis');
  });

  it('should show Genre in movie details', () => {
    const desc = {genre:'testGenre'};
    const wrapper = shallow(<MovieInfo desc={desc}/>);

    expect(wrapper.find('#genre')).to.have.text('testGenre');
  });

  it('should show Crew in movie details', () => {
    const desc = {crew:'testCrew'};
    const wrapper = shallow(<MovieInfo desc={desc}/>);

    expect(wrapper.find('#crew')).to.have.text('testCrew');
  });

  it('should show Cast in movie details', () => {
    const desc = { cst: 'testCast' };
    const wrapper = shallow(<MovieInfo desc={desc} />);
    expect(wrapper.find('#cast')).to.have.text('testCast');
  });

  it('should show runtime in movie details', () => {
    const desc = {duration:'100'};
    const wrapper = shallow(<MovieInfo desc={desc}/>);

    expect(wrapper.find('#runtime')).to.have.text('100 Minutes');
  });

});
