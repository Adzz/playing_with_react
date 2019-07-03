import { ERROR_HANDLER } from './constants';

export default function (state = {}, action) {
  switch (action.type) {
    case ERROR_HANDLER:
      return Object.assign({}, state, {
        errors: action.errors,
      });
    default:
      return state;
  }
}
