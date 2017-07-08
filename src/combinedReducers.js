import { combineReducers } from 'redux';
import errorsReducer from './utils/errors/errorsReducer';
import requestReducer from './utils/requests/requestReducer';

const combinedReducers = combineReducers({
  errors: errorsReducer,
  request: requestReducer,
});

export default combinedReducers;
