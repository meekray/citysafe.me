import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import {Card} from './common'

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
        <Text style={iconStyle}>(icon)</Text>
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
  },
  iconStyle: {
    fontSize: 10
  }
};

export {SafeViewScore};
