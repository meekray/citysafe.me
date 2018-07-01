import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Card} from './common';
import Icon from 'react-native-vector-icons/EvilIcons';



import SnapSlider from 'react-native-snap-slider';

class CityLocation extends Component {
  state = {
    latitude: '12.123',
    longitude: '-34.123',
  };

  getNewCoords(){

  }
  componentWillMount() {

  }

  renderButton(name, icon) {
    const {textButtonStyle, groupIconAndText} = styles;
    return(
      <View>
        <TouchableOpacity
          style={groupIconAndText}
          onPress={() => console.log("Hi")}>
            <Icon name={icon} size={25} color='#329E87'/>
            <Text style={textButtonStyle}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render(){
    const {titleStyle, rowStyle, textButtonStyle} = styles;
    const {latitude, longitude} = this.state;

    return(
        <View style={rowStyle}>
          {this.renderButton("REFRESH LOCATION", "refresh")}
          {this.renderButton("CHANGE RADIUS", "arrow-up")}
        </View>
    );
  }
}

/*
<SnapSlider
  items={[
      {value: 0, label: 'item A'},
      {value: 1, label: 'item B'},
      {value: 2, label: 'item C'},
      {value: 3, label: 'item D'}
  ]}
  defaultItem={2}
  labelPosition="bottom"
/>
*/

const styles = {
  rowStyle: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  groupIconAndText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textButtonStyle: {
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    color: 'grey'
  }
};

export {CityLocation};
