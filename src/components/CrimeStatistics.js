import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import {Card} from './common';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { crimesFetch } from './actions';

class CrimeStatistics extends Component {

  componentWillMount () {
    this.props.crimesFetch(this.props.radius);
  }

  getCrimeInfo(category){
    const {crimes} = this.props;
    var count = 0;
    for(var i = 0; i < crimes.length;i++){
      if(crimes[i].offense_category.includes(category))
        count++;
    }
    return count;
  }

  renderStat(word){
    const {crimeStatStyle, crimeNumStyle, crimeNameStyle} = styles;

    return (
        <View style={crimeStatStyle}>
          <ShimmerPlaceHolder autoRun={true} visible={this.props.isLoaded} height={50}>
            <Text style={crimeNumStyle}>{this.getCrimeInfo(word)}</Text>
            <Text style={crimeNameStyle}>{word}</Text>
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

const mapStateToProps = state => {
  const { radius, isLoaded, crimes } = state.region;
  return { radius, isLoaded, crimes};
};
export default connect(mapStateToProps, { crimesFetch })(CrimeStatistics);
