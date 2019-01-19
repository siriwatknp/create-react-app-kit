import React from 'react';
import ReactDOM from 'react-dom';

// ROUTER
import { ConnectedRouter } from 'connected-react-router';

// REDUX
import { Provider } from 'react-redux';

// THEME
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from 'theme/muiTheme';

import configureStore, { history } from './store';

// App
import App from './pages/App';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={muiTheme}>
          <Component />
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );
};

// Render once
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./pages/App', () => {
    render(App);
  });
}
