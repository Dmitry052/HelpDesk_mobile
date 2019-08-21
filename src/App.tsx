import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Screens from './screens';
import reducers from './reducers';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

const AppNavigator = createStackNavigator(Screens, {
  // TODO: Create manager
  initialRouteName: 'Chat',
});

const Navigation = createAppContainer(AppNavigator);

const Wraper = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default Wraper;
