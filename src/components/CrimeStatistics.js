import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import {Card} from './common';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { crimesFetch } from './actions';
import { statisticStyles } from '../styles/DisplayStyles';

class CrimeStatistics extends Component {

  componentWillMount () {
    this.props.crimesFetch(500);
  }

  renderStat(word){
    const {crimeStatStyle, crimeNumStyle, crimeNameStyle} = styles;
    const statistic = this.props[word];
    const dynStyle = statisticStyles[this.props.totalScore];

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
    fontFamily: 'Lato-Light',
    color: '#329E87'
  },
  crimeNameStyle: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#329E87'
  }
};

//https://stackoverflow.com/questions/40386128/how-does-a-redux-connected-component-know-when-to-re-render

const mapStateToProps = state => {
  const { isLoaded, DAMAGE, ASSAULT, ROBBERY, DRUGS, totalScore } = state.region;
  return { isLoaded, DAMAGE, ASSAULT, ROBBERY, DRUGS, totalScore};
};
export default connect(mapStateToProps, { crimesFetch })(CrimeStatistics);
