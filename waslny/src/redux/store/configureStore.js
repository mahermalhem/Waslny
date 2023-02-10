import { createStore,applyMiddleware ,combineReducers } from 'redux';
import languageReducer from '../reducers/languageReducer';
import loaderReducer from '../reducers/loaderReducer';
import bottomActionSheetReducer from '../reducers/bottomActionSheetReducer';
import userReducer from '../reducers/userReducer';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['themeState'],
};

const rootReducer = combineReducers({
    languageReducer,
    loaderReducer,
    bottomActionSheetReducer,
    userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewaresToApply = [thunk];

// eslint-disable-next-line no-undef
if (__DEV__) {
  const createFlipperDebugger = require('redux-flipper').default;
  middlewaresToApply.push(createFlipperDebugger());
}

const configureStore = () => createStore(persistedReducer,applyMiddleware(...middlewaresToApply));

export default configureStore;

//couldn't implement this return --maher
// export default () => {
//     const store = createStore(
//       persistedReducer,
//       applyMiddleware(...middlewaresToApply),
//     );
//     const persistor = persistStore(store);
//     return {store, persistor};
// };
