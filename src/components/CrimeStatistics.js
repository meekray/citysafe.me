import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import {Card} from './common';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { crimesFetch } from './actions';
import { StatisticStyles } from '../styles/DisplayStyles';

class CrimeStatistics extends Component {

  state = {
    latitude: 0,
    longitude: 0
  };

  locationExists(){
    return this.props.latitude !== 0;
  }

  componentDidUpdate  () {
      if(!this.props.isLoaded && this.locationExists()){
          this.props.crimesFetch(500, this.props.latitude,this.props.longitude);
      }
  }

  renderStat(word){
    const {crimeStatStyle, crimeNumStyle, crimeNameStyle} = styles;
    const statistic = this.props[word];
    const dynStyle = StatisticStyles[this.props.baselineScore];

    return (
        <View style={crimeStatStyle}>
          <ShimmerPlaceHolder autoRun={true} visible={this.props.isLoaded} height={50}>
            <Text style={[crimeNumStyle, dynStyle]}>{statistic}</Text>
            <Text style={[crimeNameStyle, dynStyle]}>{word}</Text>
          </ShimmerPlaceHolder>
        </View>
    );
  }

  renderStatistics() {
    const { containerStyle } = styles;
    return (
      <View style={{flex: 2}}>
        <View style={containerStyle}>
          {this.renderStat("DAMAGE")}
          {this.renderStat("ASSAULT")}
        </View>
        <View style={containerStyle}>
          {this.renderStat("ROBBERY")}
          {this.renderStat("DRUGS")}
        </View>
      </View>
    );
  }

  render(){
    console.log("CrimeStatistics");
    return this.renderStatistics();
  }
}
const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1
  },
  crimeStatStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

    backgroundColor: '#FAFAFA',
    width: 100,
    height: 50,
    borderRadius: 2,
    elevation: 1
  },
  crimeNumStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Lato-Light'
  },
  crimeNameStyle: {
    fontFamily: 'Montserrat-SemiBold'
  }
};

const mapStateToProps = state => {
  const { isLoaded, DAMAGE, ASSAULT, ROBBERY, DRUGS, baselineScore } = state.region;
  return { isLoaded, DAMAGE, ASSAULT, ROBBERY, DRUGS, baselineScore };
};

export default connect(mapStateToProps, { crimesFetch })(CrimeStatistics);
