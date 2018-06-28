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
    const {safeViewStyle, iconStyle, containerStyle} = styles;
    const {scoreDisplay} = this.state;

    return(
      <View style={containerStyle}>
        <Text style={safeViewStyle}>{this.state.scoreDisplay}</Text>
        <Icon name='check-circle' size={30} color='white'/>
      </View>
    );
  }
}
const styles = {
  containerStyle: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#6FCF97'
  },
  safeViewStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60
  }
};

export {SafeViewScore};
