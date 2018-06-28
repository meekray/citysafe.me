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
    const {titleStyle, crimeStatStyle,containerStyle, crimeNumStyle} = styles;
    return (
      <View style={crimeStatStyle}>
        <Text style={crimeNumStyle}>{this.getCrimeInfo(word)}</Text>
        <Text>{word}</Text>
      </View>
    );
  }

  crimesTitle(){
    const {titleStyle, crimeStatStyle,containerStyle, crimeNumStyle} = styles;
    return(
      <Text style={titleStyle}>
        CRIMES AROUND ME
      </Text>
    );
  }

  renderStatistics() {
    const {titleStyle, crimeStatStyle,containerStyle, crimeNumStyle} = styles;
    return (
      <View style={{flex: 4}}>
        {this.crimesTitle()}
        <View style={containerStyle}>
          {this.renderStat("DAMAGE")}
          {this.renderStat("ASSAULT")}
          {this.renderStat("ROBBERY")}
          {this.renderStat("DRUGS")}
        </View>
      </View>
    );
  }

  render(){
    return (
      <View style={{flex: 4}}>
        {this.renderStatistics()}
      </View>
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
  crimeStatStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  crimeNumStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
};

export {CrimeStatistics};
