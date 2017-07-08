import {
  GET_REQ_LOADED,
  POST_REQUEST,
  SUCCESSFUL_POST,
  RESET_REDIRECT,
  SUCCESSFUL_PUT,
} from './constants';

const initialState = {
  createdResource: {},
  redirect: false,
  getRequestResponse: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_REQ_LOADED:
      return Object.assign({}, state, {
        getRequestResponse: action.response,
      });
    case POST_REQUEST:
      return Object.assign({}, state, {
        formData: action.formData,
      });
    case SUCCESSFUL_POST:
      return Object.assign({}, state, {
        createdResource: action.createdResource,
        redirect: action.redirect,
      });
    case SUCCESSFUL_PUT:
      return Object.assign({}, state, {
        updatedResource: action.updatedResource,
      });
    case RESET_REDIRECT:
      return Object.assign({}, state, {
        redirect: action.redirect,
      });
    default:
      return state;
  }
}
