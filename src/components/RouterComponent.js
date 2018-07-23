import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import CitySelection from './CitySelection'
import Main from './Main';

//https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395

class RouterComponent extends Component {
  render () {
    console.log("Router");
    return (
      <Router>
        <Scene key="root" hideNavBar>
            <Scene key="cityScreen" component={CitySelection} initial/>
            <Scene key="main" component={Main}/>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
