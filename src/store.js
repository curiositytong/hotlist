import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers';
import api from './middleware/api';

const persistConfig = {
  key: 'HOTLIST',
  storage,
  whitelist: ['sites']
};

const initialState = {};
const enhancers = [];
const middleware = [thunk, api];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  middleware.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(persistedReducer, initialState, composedEnhancers);

export const persistor = persistStore(store);

export default store;
