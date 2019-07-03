// import { call, put, takeLatest, fork } from 'redux-saga/effects';
// import { cloneableGenerator } from 'redux-saga/utils';
// import { loadBrandsList, watchBrandsListRequest } from './BrandsListSaga';
// import { LOAD_BRANDS_LIST } from './constants';
// import { brandListLoaded, brandsListError } from './BrandsListActions';
// import getRequest from '../../utils/requests/request';

// describe('loadBrandsList saga', () => {
//   describe('200 response', () => {
//     // const getReq = jest.fn();
//     const requestURL = 'http://composer.dev/brands';
//     const generator = cloneableGenerator(loadBrandsList)();

//     it('sends the request to the correct url', () => {
//       expect(generator.next(getRequest(requestURL)).value).toEqual(call(getRequest, requestURL));
//     });

//     it('passes a successful result to the correct action', () => {
//       const apiResponse = {
//         data: {
//           brands: [
//             { id: 1, name: 'Animal' },
//             { id: 2, name: 'Quiksilver' },
//           ],
//         },
//       };
//       expect(generator.next(apiResponse).value).toEqual(put(brandListLoaded(apiResponse)));
//     });

//     it('completes', () => {
//       expect(generator.next()).toEqual({ done: true, value: undefined });
//     });
//   });

//   describe('error', () => {
//     it('passes the error to the correct action creator', () => {
//       const generator = loadBrandsList();
//       const error = { code: 500, error: 'no such brand' };
//       generator.next();

//       expect(generator.throw(error).value).toEqual(put(brandsListError(error)));
//     });
//   });

//   describe('watchBrandsListRequest saga', () => {
//     it('takes the last request and calls loadBrandsList saga', () => {
//       const generator = watchBrandsListRequest();
//       expect(generator.next().value).toEqual(fork(takeLatest, LOAD_BRANDS_LIST, loadBrandsList));
//     });
//   });
// });
