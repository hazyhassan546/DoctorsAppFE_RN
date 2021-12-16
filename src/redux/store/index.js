//  @flow

import {compact} from 'lodash';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';
import {AsyncStorage} from 'react-native';
import rootReducer from '../reducers';
import sagas from '../sagas';

// todo p1: add required reducers to whitelist
export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['namesData'],
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = compact([sagaMiddleware, null]);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  {},
  composeEnhancer(applyMiddleware(...middlewares)),
);

let persistor = persistStore(store);

sagaMiddleware.run(sagas);

export {store, persistor};
