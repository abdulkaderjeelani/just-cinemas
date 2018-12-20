import React, { Component, PropTypes } from 'react';

class DateItem extends Component {
  render() {
    //  const { name } = this.props;
    return (
      <div className="col-md-2" >
        <h5>Monday</h5>
      </div>
    );
  }
}

DateItem.defaultProps = {};

DateItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DateItem;
