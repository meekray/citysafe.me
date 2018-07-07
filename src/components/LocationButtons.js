import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Card} from './common';
import Icon from 'react-native-vector-icons/EvilIcons';
import SnapSlider from 'react-native-snap-slider';
import { radiusChanged, crimesFetch } from './actions'

class LocationButtons extends Component {
  state = {
    refreshPressed: false,
    position: 2
  };

  componentWillMount() {

  }

  onRadiusPress(itemSelected) {
    const { refreshPressed } = this.state;
    this.setState({
      refreshPressed: !refreshPressed
    });
  }

  onRefreshPress(){
    //this.props.crimesFetch(500);
    console.log("I Complete");
  }

  slidingComplete(itemSelected){
    const {refreshPressed, position } = this.state;
    const newSize = radiusOptions[itemSelected].value;
    this.props.radiusChanged(newSize);
    this.props.crimesFetch(newSize);
    this.onRadiusPress(itemSelected);
    this.setState({
      refreshPressed: !refreshPressed,
      position: itemSelected
    });
  }

  renderButton(name, icon, buttonFunction) {
    const {textButtonStyle, groupIconAndText} = styles;
    return(
      <View>
        <TouchableOpacity
          ref="slider"
          style={groupIconAndText}
          onPress={() => buttonFunction()}>
            <Icon name={icon} size={25} color='#329E87'/>
            <Text style={textButtonStyle}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderSlider(){
    const { sliderStyle } = styles;
    if(this.state.refreshPressed){
      return(
          <View style={sliderStyle}>
            <SnapSlider
              items={radiusOptions}
              defaultItem={this.state.position}
              labelPosition="bottom"
              onSlidingComplete={this.slidingComplete.bind(this)}
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
    console.log("LocationButtons");

    const {titleStyle, rowStyle, textButtonStyle} = styles;
    const {latitude, longitude} = this.state;

    return(
      <View>
        <View style={rowStyle}>
          {this.renderButton("REFRESH LOCATION", "refresh", this.onRefreshPress.bind(this))}
          {this.renderButton("CRIME RADIUS", "arrow-up", this.onRadiusPress.bind(this))}
        </View>
        {this.renderSlider()}
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

const radiusOptions = [
    {value: 100, label: '100m'},
    {value: 250, label: '250m'},
    {value: 500, label: '500m'}
];

export default connect(null, {radiusChanged, crimesFetch})(LocationButtons);
