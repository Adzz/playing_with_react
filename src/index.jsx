import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import combinedReducers from './combinedReducers';
import surfdomeWinterLightTheme from './themes/surfdomeWinterLightTheme';
import rootSaga from './rootSaga';
// allow on touch tap
// see here: http://www.material-ui.com/#/get-started/installation
injectTapEventPlugin();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

// run the sagas
sagaMiddleware.run(rootSaga);

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
