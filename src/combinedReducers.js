import { combineReducers } from 'redux';
import MainNavigationPopoverReducer from './components/navigation/mainNavigationPopover/MainNavigationPopoverReducer';

const combinedReducers = combineReducers({
  mainNavPopover: MainNavigationPopoverReducer,
});

export default combinedReducers;
