import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './App';
import combinedReducers from './combinedReducers';
import surfdomeWinterLightTheme from './themes/surfdomeWinterLightTheme';

 /* eslint-disable no-underscore-dangle */
 // see here https://github.com/zalmoxisus/redux-devtools-extension#usage
const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

// we wrap the whole app in the theme to make it work
// see here: http://www.material-ui.com/#/get-started/usage

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(surfdomeWinterLightTheme)} >
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
