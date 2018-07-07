import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import {Card} from './common';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { crimesFetch } from './actions';
import { crimeOptions } from './Constants';

class SafeViewScore extends Component {
  state = {
    totalScore: 0
  };

  componentWillMount() {
  }

  render(){
    console.log("SafeViewScore");
    const {safeViewStyle, iconStyle, containerStyle} = styles;
    return(
      <View style={containerStyle}>
        <Text style={safeViewStyle}>{this.props.totalScore}</Text>
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

const mapStateToProps = state => {
  const { totalScore } = state.region;

  return { totalScore };

}
export default connect (mapStateToProps, {crimesFetch})(SafeViewScore);
