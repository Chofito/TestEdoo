import {createStore, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {taskManager} from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'],
};

const reducers = persistReducer(persistConfig, taskManager);

const configureStore = () => {
  const store = compose<any>(createStore)(reducers);
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

export default configureStore;
