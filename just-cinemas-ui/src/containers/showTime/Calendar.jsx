import React, { Component } from 'react';
import VirtualList from 'react-tiny-virtual-list';

class Calendar extends Component {

  render() {
    const data = ['18', '19', '20', '21', '22', '23'];
    return (
      <VirtualList
        itemCount={data.length}
        itemSize={50}
        renderItem={({ index }) =>
          <div key={index} >
            {data[index]}
          </div>
        }
        width={600}
      />
    );
  }
}

export default Calendar;
