import React, {Component} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import {Card} from './common'

class CrimeStatistics extends Component {
  state = {
    murder: '',
    assault: '',
    theft: '',
    other: ''
  };

  getStatus(){

  }
  componentWillMount() {
    
  }

  render(){
    const {titleStyle, crimeStatStyle,containerStyle, crimeNumStyle} = styles;
    const {latitude, longitude} = this.state;

    return(
      <Card>
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
            <Text style={crimeNumStyle}>12</Text>
            <Text>OTHER</Text>
          </View>
        </View>
      </Card>
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
