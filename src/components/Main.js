import React, { Component } from 'react';
import { PermissionsAndroid, StatusBar, Platform  } from 'react-native';
import reducers from './reducers'
import {ContentSection, Card, Header} from './common';
import SafeViewScore from './SafeViewScore';
import MapSection from './MapSection';
import LocationButtons from './LocationButtons';
import CrimeStatistics from './CrimeStatistics';
import CitySelection from './CitySelection';

//https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395

const requestPermission = () => {
  return PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      'title': 'Access Location',
      'message': 'Stray uses your location to show you relevant crime statistics.'
    }
  ).then(granted => {
    if(granted === PermissionsAndroid.RESULTS.GRANTED) {
      return Promise.resolve("You can use the location")
    } else {
      return Promise.reject("Location permission denied")
    }
  })
}

const getCoordinates = () => {
  return requestPermission().then(ok => {
    return new Promise((resolve, reject) => {
      const options = Platform.OS === 'android' ? {enableHighAccuracy:true}
                      : {enableHighAccuracy:true};
      global.navigator.geolocation.getCurrentPosition(resolve, reject)
    })
  })
}

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

  componentDidMount() {
    console.log("Fetching position...");
    getCoordinates().then(position => {
        this.onLocationSet(position);
    }).catch(error => {
        console.log(error);
    })
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
