import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import CitySelection from './CitySelection'
import Main from './Main';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

//https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395

class RouterComponent extends Component {

  componentDidMount(){
      RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10, fastInterval: 0})
    .then(data => {
      console.log(data);
      // The user has accepted to enable the location services
      // data can be :
      //  - "already-enabled" if the location services has been already enabled
      //  - "enabled" if user has clicked on OK button in the popup
    }).catch(err => {
      // The user has not accepted to enable the location services or something went wrong during the process
      // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
      // codes :
      //  - ERR00 : The user has clicked on Cancel button in the popup
      //  - ERR01 : If the Settings change are unavailable
      //  - ERR02 : If the popup has failed to open
    });
  }
  render () {
    console.log("RouterComponent");
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