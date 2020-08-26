import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';
import { createStore } from 'redux';
import { name as appName } from './app.json';
import { getStorybookUI, configure } from '@storybook/react-native';

configure(() => {
  require('./src/stories.js'); // we will create this file in the next steps
}, module);

const StorybookUIRoot = getStorybookUI({});

const store = createStore(rootReducer);

const ConnectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ConnectedApp);
