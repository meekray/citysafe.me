import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Card} from './common';
import Icon from 'react-native-vector-icons/EvilIcons';
import SnapSlider from 'react-native-snap-slider';



class LocationButtons extends Component {
  state = {
    refreshPressed: false
  };

  getNewCoords(){

  }
  componentWillMount() {

  }

  onRadiusPress() {
    const { refreshPressed } = this.state;
    this.setState({refreshPressed: !refreshPressed})
  }

  onRefreshPress(){

  }

  renderButton(name, icon, buttonFunction) {
    const {textButtonStyle, groupIconAndText} = styles;
    return(
      <View>
        <TouchableOpacity
          style={groupIconAndText}
          onPress={() => buttonFunction()}>
            <Icon name={icon} size={25} color='#329E87'/>
            <Text style={textButtonStyle}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderSlider(){
    console.log("rendering again" + this.state.refreshPressed);
    const { sliderStyle } = styles;
    if(this.state.refreshPressed){
      return(
          <View style={sliderStyle}>
            <SnapSlider
              items={[
                  {value: 100, label: '100m'},
                  {value: 250, label: '250m'},
                  {value: 500, label: '500m'}
              ]}
              defaultItem={1}
              labelPosition="bottom"
            />
          </View>
      );
  }
    else {
        return(
          <View></View>
        );
    }
  }
  render(){
    const {titleStyle, rowStyle, textButtonStyle} = styles;
    const {latitude, longitude} = this.state;

    return(
      <View>
        <View style={rowStyle}>
          {this.renderButton("REFRESH LOCATION", "refresh", this.onRefreshPress.bind(this))}
          {this.renderButton("CHANGE RADIUS", "arrow-up", this.onRadiusPress.bind(this))}
        </View>
        <View>
          {this.renderSlider()}
        </View>
      </View>
    );
  }
}

const styles = {
  rowStyle: {
    height: 40,
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
  },
  sliderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: 40
  }
};

export {LocationButtons};
