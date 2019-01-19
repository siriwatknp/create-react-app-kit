import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import createRootReducer from './modules';

export const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable no-underscore-dangle */
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export default () => {
  const store = createStore(rootReducer, initialState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./modules', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};
