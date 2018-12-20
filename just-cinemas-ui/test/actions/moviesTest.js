// import {fetchMovies, fetchMoviesProgress, fetchMoviesSuccess, fetchMoviesFailure} from 'actions/movies';
// import sinon from 'sinon'
// import moxios from 'moxios'

// describe('actions', () => {
//   context('movies', () => {
//     it('should return fetchMovies action', () => {
//         moxios.stubRequest('/api/movies/now-showing', {
//             status: 200,
//             responseText: 'hello'
//         });
//         const dispatchSpy = sinon.spy();
//         fetchMovies(dispatchSpy);
//         expect(dispatchSpy.calledOnce).to.be.eql(true);
//         sinon.assert.calledWith(dispatchSpy.firstCall, dispatchSpy, fetchMoviesProgress);
//         sinon.assert.calledWith(dispatchSpy.secondCall, dispatchSpy, fetchMoviesSuccess(result));
//     });
//   });
// });
