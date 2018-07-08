import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Card} from './common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SnapSlider from 'react-native-snap-slider';
import { radiusChanged, crimesFetch } from './actions';
import { DisplayStyles, statisticStyles, SliderStyle } from '../styles/DisplayStyles';

class LocationButtons extends Component {
  state = {
    refreshPressed: false,
    position: 2
  };

  onRadiusPress(itemSelected) {
    const { refreshPressed } = this.state;
    this.setState({
      refreshPressed: !refreshPressed
    });
  }

  onRefreshPress(){

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
            <Icon name={icon} size={35} color='white'/>
        </TouchableOpacity>
      </View>
    );
  }

  renderSlider(){
    const { sliderStyle } = styles;
    const dynStyle = SliderStyle[this.props.totalScore];
    if(this.state.refreshPressed){
      return(
          <View style={sliderStyle}>
            <SnapSlider
              items={radiusOptions}
              minimumTrackTintColor='white'
              defaultItem={this.state.position}
              thumbTintColor='white'
              labelPosition="bottom"
              itemStyle={{color:'white', fontFamily: 'Lato-Bold'}}
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
    //{this.renderButton("REFRESH LOCATION", "refresh", this.onRefreshPress.bind(this))}

    return(
      <View>

        <View style={rowStyle}>
          {this.renderButton("CRIME RADIUS", "map-marker-radius", this.onRadiusPress.bind(this))}
        </View>
        {this.renderSlider()}
      </View>
    );
  }
}

const styles = {
  rowStyle: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#17263C'
  },
  groupIconAndText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButtonStyle: {
    fontSize: 15,
    fontFamily: 'Lato-Bold',
    color: 'white'
  },
  sliderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17263C',
    height: 40
  }
};

const radiusOptions = [
    {value: 100, label: '100m'},
    {value: 250, label: '250m'},
    {value: 500, label: '500m'}
];

const mapStateToProps = state => {
  const { totalScore } = state.region;
  return { totalScore };
};

export default connect(mapStateToProps, {radiusChanged, crimesFetch})(LocationButtons);
