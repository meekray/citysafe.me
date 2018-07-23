import { View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React, {Component} from 'react';
import { Button} from './common';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NAVY_BLUE} from '../styles/DisplayStyles';

class CitySelection extends Component {

  renderIcon(){
    const {iconStyle} = styles;
    return(
      <View style={iconStyle}>
        <Icon name='map-marker-radius' size={100} color='white'/>
      </View>
    );
  }

  renderDescription(){
    const {cityOptionTextStyle} = styles;
    return(
        <Text style={cityOptionTextStyle}>
          Wander through the favorite parts of a city, or explore new parts,
          while seeing the crimes that have happened around you.
        </Text>
    );
  }

  renderCityOption(cityName){
    const {cityOptionTextStyle} = styles;
    return(
      <TouchableOpacity onPress={() => Actions.main()}>
        <View>
          <Text style={cityOptionTextStyle}>{cityName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render(){
    const {containerStyle} = styles;

      return(
        <View style={containerStyle}>
          {this.renderIcon()}
          {this.renderDescription()}
          {this.renderCityOption("Detroit")}
          {this.renderCityOption("San Francisco")}
        </View>
      );
  }
}

const styles = {
  containerStyle: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: NAVY_BLUE,
    flex: 1,
    flexDirection: 'column'
  },
  iconStyle: {

  },
  descrptionStyle: {
    color: 'white'
  },
  cityOptionTextStyle: {
    color: 'white'
  },
  iconStyle: {
    alignItems: 'center'
  }
};

export default CitySelection;
