import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import {Card} from './common';
import Icon from 'react-native-vector-icons/EvilIcons';

class CityLocation extends Component {
  state = {
    latitude: '12.123',
    longitude: '-34.123'
  };

  getNewCoords(){

  }
  componentWillMount() {

  }

  render(){
    const {titleStyle, rowStyle, coordNumStyle, coordNameStyle, containerStyle} = styles;
    const {latitude, longitude} = this.state;

    return(
      <View style={containerStyle}>
        <View style={rowStyle}>
          <Icon name='location' size={25} color='#329E87'></Icon>
          <View style={rowStyle}>
            <Text style={coordNameStyle}>LATITUDE: </Text>
            <Text style={coordNumStyle}>{latitude}°</Text>
          </View>
          <View style={rowStyle}>
            <Text style={coordNameStyle}>LONGITUDE: </Text>
            <Text style={coordNumStyle}>{longitude}°</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = {
  coordNameStyle:{
    fontFamily: "Lato-Bold",
    color: '#329E87',
    fontSize: 16
  },
  coordNumStyle: {
    fontSize: 15,
    color: '#329E87',
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
};

export {CityLocation};
