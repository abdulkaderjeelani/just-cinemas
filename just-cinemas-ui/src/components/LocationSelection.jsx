import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectLocation from 'actions/SelectLocation';

class LocationSelection extends Component {

  constructor(props) {
    super(props);
    this.onLocationChange = this.onLocationChange.bind(this);
  }
  onLocationChange(evt) {
    this.props.selectLocationfn(evt.target.value);
  }

  renderOptions() {
    return this.props.names.map(name => (
      <option key={name} value={name}>{name}</option>
    ));
  }
  render() {
    return (
      <div className="selectdiv">
        <select onChange={this.onLocationChange}>
          {this.renderOptions()}
        </select>
      </div>
    );
  }
}

LocationSelection.defaultProps = {};

LocationSelection.propTypes = {
  names: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  selectLocationfn: React.PropTypes.func,
};


const mapDispatchToProps = dispatch => ({ selectLocationfn: selLoc => dispatch(selectLocation(selLoc)) });

export default connect(null, mapDispatchToProps)(LocationSelection);
