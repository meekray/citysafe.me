import React, {Component} from 'react';
import { View, Dimensions, StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';
import { radiusChanged } from './actions';
import mapStyle from './mapstyle.json';

class MapSection extends Component {
  state = {
    latitude: 43.3,
    longitude: -43.43,
    isLoaded: false,
    radius: 500
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
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    ).then(() => {
      console.log(this.state.isLoaded);
    })
  }

  onMapLoad() {
    const { isLoaded } = this.state;
    this.setState({
      isLoaded: true
    });
  }

  renderCircle(){
    var radius;
    if(this.props.radius === "undefined") radius = 500;
    else radius = this.props.radius
    if(this.state.isLoaded){
      return(
        <MapView.Circle
          center={{latitude: this.state.latitude, longitude: this.state.longitude}}
          radius={radius}
        />
      );
    }
  }
  render(){
    const location = {
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.015
    }
    return (
      <View style ={styles.containerStyle}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={MapStyles.map}
          customMapStyle={mapStyle}
          region={location}
          onMapReady={this.onMapLoad.bind(this)}
          showsUserLocation={true}
          >
          {this.renderCircle()}
        </MapView>
      </View>
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
