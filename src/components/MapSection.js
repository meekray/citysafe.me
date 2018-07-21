import React, {Component} from 'react';
import { Text, View, Dimensions, StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {Circle} from 'react-native-maps';
import { connect } from 'react-redux';
import { radiusChanged, crimesFetch } from './actions';
import mapStyle from './mapstyle.json';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import LocationButtons from './LocationButtons';

class MapSection extends Component {


  renderCircle(){
    if(this.isLoaded() && this.props.crimes !== undefined){
      var radius;
      if(this.props.radius === "undefined") radius = 500;
      else radius = this.props.radius;
      return(
        <Circle
          center={{latitude: this.props.latitude, longitude: this.props.longitude}}
          radius={radius}
          strokeWidth={2}
          fillColor='rgba(23,38,60,0.3)'
          strokeColor='rgba(23,38,60,0.8)'
        />
      );
    }
  }

  renderHeatMap() {
    if(this.isLoaded() && this.props.crimes !== undefined){
      return (
        <MapView.Heatmap
          points = {this.props.crimes}
          opacity = {1}
          radius = {15}
          maxIntensity = {100}
          gradient={{colors: ["#FF671C", "#020122"], values: [0.5, 1.0]}}
          heatmapMode = {"POINTS_DENSITY"}
        />
      );
    }
    else {
      return <View></View>;
    }
  }

  isLoaded(){
    if(this.props.latitude != 0) return true;
    else return false;
  }
  
  render(){
    console.log("MapSection");
    const location = {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.015
    }
    return (
      <ShimmerPlaceHolder
      autoRun={true}
      visible={this.isLoaded()}
      height={250}
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
            {this.renderHeatMap()}
          </MapView>
          <LocationButtons
            latitude={this.props.latitude}
            longitude={this.props.longitude}/>
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
  const { radius, crimes } = state.region;
  return { radius, crimes };
}
export default connect(mapStateToProps, {radiusChanged, crimesFetch})(MapSection);
