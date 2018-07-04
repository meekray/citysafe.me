import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import {Card} from './common';
import Icon from 'react-native-vector-icons/FontAwesome';

class SafeViewScore extends Component {
  state = {
    scoreDisplay: 'SAFE'
  };

  getScore(){

  }
  componentWillMount() {

  }

  render(){
    console.log("Safeview");

    const {safeViewStyle, iconStyle, containerStyle} = styles;
    const {scoreDisplay} = this.state;

    return(
      <View style={containerStyle}>
        <Text style={safeViewStyle}>{this.state.scoreDisplay}</Text>
        <Icon name='check-circle' size={40} color='white'/>
      </View>
    );
  }
}
const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#329E87',
    elevation: 3
  },
  safeViewStyle: {
    color: 'white',
    fontSize: 60,
    fontFamily: 'Lato-Regular'
  }
};

export {SafeViewScore};
