import React, { Component, PropTypes } from 'react';
import MovieGrid from 'containers/MovieGrid';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import loadMovies from 'actions/movies';
import { connect } from 'react-redux';
import Menu from 'containers/Menu';

class Home extends Component {

  constructor(props) {
    super(props);
    this.tab = 'Tab1';
  }


  render() {
    this.props.load('/api/movies/now-showing');
    return (
      <div>
        <Menu /> <br /> <br />
        <Tabs
          handleSelect={(selectedTab) => {
            if (selectedTab === 'tab1') {
              this.props.load('/api/movies/now-showing');
            } else {
              this.props.load('/api/movies/coming-soon');
            }
          }
          }
          renderActiveTabContentOnly
        >
          <div className={'tab-link'} >
            <TabLink default to="tab1">Now Showing</TabLink >
            <TabLink to="tab2">Coming Soon</TabLink >
          </div>
          <TabContent className={'tab-content'} for="tab1"><MovieGrid /></TabContent>
          <TabContent className={'tab-content'} for="tab2"><MovieGrid /></TabContent>
        </Tabs>
      </div>
    );
  }
}

Home.propTypes = {
  load: PropTypes.func,
  tab: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  load: (url) => {
    dispatch(loadMovies(url));
  },
});

export default connect(null, mapDispatchToProps)(Home);
