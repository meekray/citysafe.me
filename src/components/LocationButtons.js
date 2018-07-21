import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Card} from './common';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SnapSlider from 'react-native-snap-slider';
import { radiusChanged, crimesFetch } from './actions';
import { DisplayStyles, statisticStyles, SliderStyle } from '../styles/DisplayStyles';
import {FloatingAction} from 'react-native-floating-action';

class LocationButtons extends Component {

  slidingComplete(itemSelected){
    console.log(itemSelected);
    this.props.radiusChanged(itemSelected);
    this.props.crimesFetch(itemSelected, this.props.latitude, this.props.longitude);
  }

  render(){
    console.log("LocationButtons");

    const {titleStyle, rowStyle, textButtonStyle} = styles;
    //{this.renderButton("REFRESH LOCATION", "refresh", this.onRefreshPress.bind(this))}

    return(
      <FloatingAction
        floatingIcon={<Icon name='map-marker-radius' size={20} color='white'/>}
        actionsPaddingTopBottom={0}
        position={'left'}
        distanceToEdge={20}
        actions={actions}
        color='#17263C'
        onPressItem={
          (name) => {
            console.log(`selected button: ${name}`);
            this.slidingComplete(parseInt(name, 10))
          }
        }
      />
    );
  }
}

const styles = {
  actionItemStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: 'white'
  }
};

const radiusValue = (radius) => {
  const {actionItemStyle} = styles;
  return (
    <Text style={actionItemStyle}>
      {radius}M
    </Text>);
}


const actions = [
{
   icon: radiusValue(100),
   name: '100',
   position: 1,
   color: '#17263C'
},
{
  icon: radiusValue(250),
  name: '250',
  position: 2,
  color: '#17263C'
},
{
    icon: radiusValue(500),
    name: '500',
    position: 3,
    color: '#17263C'
}
];

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
