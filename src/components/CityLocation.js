import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import {Card} from './common'

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
    const {titleStyle, coordNumStyle, coordNameStyle, containerStyle} = styles;
    const {latitude, longitude} = this.state;

    return(
      <Card>
        <Text style={titleStyle}>
          DETROIT
        </Text>
        <View style={containerStyle}>
          <View style={containerStyle}>
            <Text style={coordNameStyle}>LATITUDE: </Text>
            <Text style={coordNumStyle}>{latitude}°</Text>
          </View>
          <View style={containerStyle}>
            <Text style={coordNameStyle}>LONGITUDE: </Text>
            <Text style={coordNumStyle}>{longitude}°</Text>
          </View>
        </View>
      </Card>
    );
  }
}
const styles = {
  titleStyle: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#4F4F4F",
    fontSize: 24
  },
  coordNameStyle:{
    fontWeight: 'bold',
    color: '#828282',
    fontSize: 16
  },
  coordNumStyle: {
    fontSize: 15,
    color: '#828282',
    fontStyle: 'italic'
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
};

export {CityLocation};
