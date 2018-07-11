import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import reducers from './reducers'
import {ContentSection, Card, Header} from './common';
import SafeViewScore from './SafeViewScore';
import MapSection from './MapSection';
import LocationButtons from './LocationButtons';
import CrimeStatistics from './CrimeStatistics';
//https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395

class Router extends Component {
  render () {
    return (
      <Card>
      <StatusBar
  backgroundColor="#17263C"
  barStyle="light-content"
/>
        <LocationButtons/>
        <MapSection/>
        <ContentSection>
          <SafeViewScore/>
          <CrimeStatistics/>
        </ContentSection>
      </Card>
    );
  }
}



export default Router;
