import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import axios from 'axios';
import {Card} from './common';

class CrimeStatistics extends Component {
  state = {
    crimes : []
  };

  componentWillMount(){
    axios.get('https://data.detroitmi.gov/resource/9i6z-cm98.json?$select=location,%20offense_category')
      .then(response => this.setState({
        crimes: response.data
      }));
  }

  getCrimeInfo(category){
    const {crimes} = this.state;
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
        <Text style={crimeNumStyle}>{this.getCrimeInfo(word)}</Text>
        <Text style={crimeNameStyle}>{word}</Text>
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
    alignItems: 'flex-start',

    backgroundColor: 'white',
    width: 100,

    borderRadius: 3,
    elevation: 0.5
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

export {CrimeStatistics};
