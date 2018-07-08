import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import mapStyle from '../styles/mapstyle.json';
import reducers from './reducers'
import {ContentSection, Card, MapSection, Header} from './common';
import SafeViewScore from './SafeViewScore';
import LocationButtons from './LocationButtons';
import CrimeStatistics from './CrimeStatistics';
//https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395

class Router extends Component {
  state = {
    latitude: 43.3,
    longitude: -43.43,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121
  };

  componentWillMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0462,
          longitudeDelta: 0.0261
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  render () {
    const location = {
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      latitudeDelta: this.state.latitudeDelta,
      longitudeDelta: this.state.longitudeDelta
    }
    console.log(location);
    return (
      <Card>
      <StatusBar
        barStyle="light-content"
        hidden
      />
        <LocationButtons/>
        <MapSection>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapStyle}
            region={location}
            >
          </MapView>
        </MapSection>
        <ContentSection>
          <SafeViewScore/>
          <CrimeStatistics/>
        </ContentSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: { ... StyleSheet.absoluteFillObject },
  map: { ...StyleSheet.absoluteFillObject }
});

export default Router;
