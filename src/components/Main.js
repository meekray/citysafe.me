import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import reducers from './reducers'
import {ContentSection, Card, Header} from './common';
import SafeViewScore from './SafeViewScore';
import MapSection from './MapSection';
import LocationButtons from './LocationButtons';
import CrimeStatistics from './CrimeStatistics';
import CitySelection from './CitySelection';


//https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395

class Main extends Component {
  state = {
    latitude: 0,
    longitude: 0
  };

  onLocationSet(position){
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }

  componentWillMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => this.onLocationSet(position),
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
    )
  }

  render () {
    console.log("Router");
      return (
      <Card>
        <StatusBar backgroundColor="#17263C" barStyle="light-content"/>

        <MapSection
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
        <ContentSection>
          <SafeViewScore
            latitude={this.state.latitude}
            longitude={this.state.longitude}/>
          <CrimeStatistics
            latitude={this.state.latitude}
            longitude={this.state.longitude}/>
        </ContentSection>
      </Card>
    );
  }
}

export default Main;
