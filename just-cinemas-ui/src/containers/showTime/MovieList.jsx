import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class MovieList extends Component {
  render() {
    const columns = [
      {
        Header: 'Movie',
        accessor: 'movie',
      },
      {
        Header: <button type="button">Cinema</button>,
        accessor: 'cinema',
      },
      {
        Header: 'Experience',
        accessor: 'experience',
      },
      {
        Header: 'Show Time',
        accessor: 'showTime',
      },
    ];
    const data = [
      {
        movie: 'Bahubali',
        cinema: 'PVR Gold',
        experience: '2D',
        showTime: '12:45',
      },
      {
        movie: 'Walk to remember',
        cinema: 'Satyam',
        experience: '4D',
        showTime: '8:45',
      },
    ];
    return (
      <ReactTable
        columns={columns}
        data={data}
        defaultPageSize={10}
        pageSizeOptions={[5, 10, 20, 50]}
        sortable="true"
      />
    );
  }
}

export default MovieList;
