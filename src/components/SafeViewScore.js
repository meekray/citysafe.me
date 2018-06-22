import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import {ContentRow} from './common/ContentRow';
import {Card} from './common'

class SafeViewScore extends Component {
  state = {
    scoreDisplay: ''
  };

  getScore(){

  }
  componentWillMount() {

  }

  render(){
    const {titleStyle, safeViewStyle, iconStyle, containerStyle} = styles;
    const {scoreDisplay} = this.state;

    return(
      <Card>
        <Text style={titleStyle}>
          MY SAFEVIEW SCORE:
        </Text>
        <View style={containerStyle}>
          <Text style={safeViewStyle}>SAFE</Text>
          <Text style={iconStyle}>(icon)</Text>
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
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  safeViewStyle: {
    color: "#219653",
    fontWeight: 'bold',
    fontSize: 60
  },
  iconStyle: {
    fontSize: 10
  }
};

export {SafeViewScore};
