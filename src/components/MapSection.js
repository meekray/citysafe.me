import React, {Component} from 'react';
import { View, Dimensions, StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {Circle} from 'react-native-maps';
import { connect } from 'react-redux';
import { radiusChanged } from './actions';
import mapStyle from './mapstyle.json';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

class MapSection extends Component {
  state = {
    latitude: 0,
    longitude: 0
  };

  componentWillMount() {
    this.watchId = navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
    )
  }

  onMapLoad() {
    console.log("SeND");
  }

  renderCircle(){
    if(this.isLoaded()){
      var radius;
      if(this.props.radius === "undefined") radius = 500;
      else radius = this.props.radius;
      return(
        <Circle
          center={{latitude: this.state.latitude, longitude: this.state.longitude}}
          radius={radius}
          strokeWidth={2}
          fillColor='rgba(23,38,60,0.3)'
          strokeColor='rgba(23,38,60,0.8)'
        />
      );
    }
  }

  isLoaded(){
    if(this.state.latitude) return true;
    else return false;
  }
  render(){
    console.log("MapSection");

    const location = {
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.015
    }
    return (
      <ShimmerPlaceHolder autoRun={true} visible={this.isLoaded()} height={250}
      width={Dimensions.get('window').width}
      colorShimmer={['#17263c', '#1c2e49', '#17263c']}>
        <View style ={styles.containerStyle}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={MapStyles.map}
            region={location}
            showsUserLocation={true}
            >
            {this.renderCircle()}
          </MapView>
        </View>
      </ShimmerPlaceHolder>
    );
  }

}

const styles = {
  containerStyle: {
    height: 250,
    padding: 30
  }
};

const MapStyles = StyleSheet.create({
  container: { ... StyleSheet.absoluteFillObject },
  map: { ...StyleSheet.absoluteFillObject }
});

const mapStateToProps = state => {
  const { radius } = state.region;
  return { radius };
}
export default connect(mapStateToProps, {radiusChanged})(MapSection);