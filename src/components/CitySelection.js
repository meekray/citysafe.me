import { View, Text, TouchableOpacity, Dimensions, ImageBackground, StatusBar} from 'react-native';
import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {NAVY_BLUE} from '../styles/DisplayStyles';
import sanFrancisco from '../styles/sanFrancisco.jpg';
import {Card} from './common';
import {mapKey} from './Control';
import { citySelected } from './actions';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export var CITY_SELECTION = "";

class CitySelection extends Component {

  componentWillMount(){
      RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
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

  renderIcon(){
    const {iconStyle} = styles;
    return(
      <View style={iconStyle}>
        <Icon name='map-marker-radius' size={100} color='white'/>
      </View>
    );
  }

  renderHeadline(){
    const {headlineTextStyle, headlineContainerStyle} = styles;
    return(
      <View style={headlineContainerStyle}>
        <Text style={headlineTextStyle}>Explore knowingly.</Text>
      </View>
    );
  }
  renderDescription(){
    const {descriptionTextStyle, descriptionStyle} = styles;
    return(
      <View style={descriptionStyle}>
        <Text style={descriptionTextStyle}>
          Wander through your favorite parts of a city, or explore new ones,
          while seeing the crimes that have happened around you.
        </Text>
      </View>
    );
  }

  onButtonPress(cityName) {
    CITY_SELECTION = mapKey(cityName);
    Actions.main();
  }

  renderCityButton(cityName){
    const {buttonOptionStyle, buttonStyle, buttonContainerStyle} = styles;
    return(
      <View style={buttonContainerStyle}>
        <TouchableOpacity
          onPress={this.onButtonPress.bind(this, cityName)}
          style={buttonStyle}
          activeOpacity={0.9}>
          <Text style={buttonOptionStyle}>{cityName}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  render(){
    const {containerStyle} = styles;

      return(
        <Card>
            <StatusBar hidden={true} />
            <ImageBackground source={sanFrancisco} style={{width: '100%', height: '100%'}}>
              <View style={containerStyle}>
                {this.renderHeadline()}
                {this.renderDescription()}
                {this.renderCityButton("Detroit")}
                {this.renderCityButton("San Francisco")}
              </View>
            </ImageBackground>
          </Card>
      );
  }
}

/*

*/

const styles = {
  //// TODO: Reorganize style objects
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    padding: 20
  },
  headlineContainerStyle: {
    paddingTop: 150,
    paddingBottom: 15
  },
  headlineTextStyle: {
    color: 'white',
    fontFamily: 'MavenPro-Bold',
    fontSize: 35
  },
  descriptionStyle: {
    paddingBottom: 20
  },
  descriptionTextStyle: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'MavenPro-Regular'
  },
  buttonOptionStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'MavenPro-Bold',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#191919',
    width: 150,
    height: 30,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainerStyle: {
    alignItems: 'center'
  }
};

export default connect(null, {citySelected})(CitySelection);