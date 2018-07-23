import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import {Card} from './common';
import Icon from 'react-native-vector-icons/Foundation';
import { connect } from 'react-redux';
import { baselineScoreFetch } from './actions';
import { crimeOptions } from './Constants';
import { DisplayStyles} from '../styles/DisplayStyles';

class SafeViewScore extends Component {

  componentDidUpdate(){
    this.props.baselineScoreFetch(this.props.latitude, this.props.longitude);
  }
  
  getIconName(){
    switch(this.props.baselineScore){
      case "SAFE": return 'check';
      case "UNSAFE": return 'x';
      case "RISKY": return 'safety-cone';
      case "DANGER": return 'skull';
      default: return 'wrench';
    }
  }
  render(){
    console.log("SafeViewScore");
    const dynStyle = DisplayStyles[this.props.baselineScore];
    const {safeViewStyle, iconStyle, containerStyle} = styles;
    return(
      <View style={[containerStyle, dynStyle]}>
        <Text style={safeViewStyle}>{this.props.baselineScore}</Text>
        <Icon name={this.getIconName()} size={40} color='white'/>
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
    elevation: 3,
    backgroundColor: 'white'
  },
  safeViewStyle: {
    color: 'white',
    fontSize: 60,
    fontFamily: 'Lato-Regular'
  }
};

const mapStateToProps = state => {
  const { baselineScore } = state.region;
  return { baselineScore };
}

export default connect (mapStateToProps, {baselineScoreFetch})(SafeViewScore);
