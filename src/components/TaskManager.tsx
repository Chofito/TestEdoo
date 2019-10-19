import React from 'react';
import Container from '../navigation/navigator';
import {setNavigator} from '../services/navigationService';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = configureStore();

export const TaskManager: React.FC = props => {
  store.subscribe(() => console.log(JSON.stringify(store.getState())));
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container
          ref={navigationRef => {
            if (navigationRef) setNavigator(navigationRef);
          }}
        />
      </PersistGate>
    </Provider>
  );
};
