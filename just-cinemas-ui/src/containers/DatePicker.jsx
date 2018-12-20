import React, { Component } from 'react';
// import DateItem from 'components/DateItem';

class DatePicker extends Component {

  showDates() {
    return (
      <div className="row date-item">
        <h5>Monday</h5>
      </div>
    );
  }

  // renderItems() {
  //   const name = this.props;
  //   const dates = Array(7).fill(name);
  //   return _.map(dates, (name) => <DateItem key={name} name={name}/>);
  // }

  render() {
    return this.showDates();
  }
}

// DatePicker.defaultProps = { name : '22' };

export default DatePicker;
