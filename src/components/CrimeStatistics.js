import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import axios from 'axios';
import {Card} from './common';

class CrimeStatistics extends Component {
  state = {
    crimes : []
  };

  getStatus(){

  }
  componentWillMount(){
    axios.get('https://data.detroitmi.gov/resource/9i6z-cm98.json?$select=location,%20address,%20offense_category')
      .then(response => this.setState({
        crimes: response.data
      }));
  }

  renderStatistics() {
    const {titleStyle, crimeStatStyle,containerStyle, crimeNumStyle} = styles;
    return (
      <View style={{flex: 4}}>
        <Text style={titleStyle}>
          CRIMES AROUND ME
        </Text>
        <View style={containerStyle}>
          <View style={crimeStatStyle}>
            <Text style={crimeNumStyle}>34</Text>
            <Text>MURDER</Text>
          </View>
          <View style={crimeStatStyle}>
            <Text style={crimeNumStyle}>24</Text>
            <Text>ASSAULTS</Text>
          </View>
          <View style={crimeStatStyle}>
            <Text style={crimeNumStyle}>5</Text>
            <Text>THEFTS</Text>
          </View>
          <View style={crimeStatStyle}>
            <Text style={crimeNumStyle}>{this.state.crimes.length}</Text>
            <Text>OTHER</Text>
          </View>
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
