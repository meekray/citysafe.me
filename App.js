import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/components/reducers';
import RouterComponent from './src/components/RouterComponent';
//https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395
//https://medium.com/@malithjayaweera/adding-a-heatmap-overlay-over-react-native-map-fed02130f2a9
class App extends Component {
  render(){
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <RouterComponent/>
      </Provider>
    );
  }
}

export default App;
