import { View, Text, TouchableOpacity, Dimensions, ImageBackground, StatusBar} from 'react-native';
import React, {Component} from 'react';
import { Button} from './common';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NAVY_BLUE} from '../styles/DisplayStyles';
import sanFrancisco from '../styles/sanFrancisco.jpg';
import {Card} from './common'
class CitySelection extends Component {

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
    const {cityOptionTextStyle, descriptionStyle} = styles;
    return(
      <View style={descriptionStyle}>
        <Text style={cityOptionTextStyle}>
          Wander through your favorite parts of a city, or explore new parts,
          while seeing the crimes that have happened around you.
        </Text>
      </View>
    );
  }

  renderCityOption(cityName){
    const {buttonOptionStyle, buttonStyle, buttonContainerStyle} = styles;
    return(
      <View style={buttonContainerStyle}>
        <TouchableOpacity onPress={() => Actions.main()} style={buttonStyle} activeOpacity={0.9}>
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
                {this.renderCityOption("Detroit")}
                {this.renderCityOption("San Francisco")}
              </View>
            </ImageBackground>
          </Card>
      );
  }
}

/*

*/

const styles = {

  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    padding: 20
  },
  iconStyle: {

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
  cityOptionTextStyle: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'MavenPro-Regular'
  },
  buttonOptionStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'MavenPro-Bold'
  },
  iconStyle: {
    alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: '#191919',
    width: 150,
    borderRadius: 10,
    alignItems: 'center',
    margin: 5,
    height: 30
  },
  buttonContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default CitySelection;
