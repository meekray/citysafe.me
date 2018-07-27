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
    console.log("Fetched!");
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }

  componentWillMount() {
    console.log("Fetching position...");
    this.watchId = navigator.geolocation.watchPosition(
      (position) => this.onLocationSet(position),
      (error) => console.log(error),
      {enableHighAccuracy: true, timeout: 2000, maximumAge: 10000}
    )
  }

  render () {
    console.log("-----------Main---------");
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
