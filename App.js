import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import mapStyle from './src/styles/mapstyle.json';
import {ContentSection, Card, MapSection, Header} from './src/components/common';
import {LocationButtons, CrimeStatistics, SafeViewScore} from './src/components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/components/reducers'
//https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395

class App extends Component {
  render () {
    return (
      <Provider store={createStore(reducers)}>
        <Card>
          <MapSection>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              customMapStyle={mapStyle}
              region={hardCodedLocation}
              >
            </MapView>
          </MapSection>
          <ContentSection>
            <LocationButtons/>
            <SafeViewScore/>
            <CrimeStatistics/>
          </ContentSection>
        </Card>
      </Provider>
    );
  }
}

const hardCodedLocation = {
  latitude: 42.3313937,
  longitude: -83.0462747,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121
};

const styles = StyleSheet.create({
  container: { ... StyleSheet.absoluteFillObject },
  map: { ...StyleSheet.absoluteFillObject }
});

export default App;
