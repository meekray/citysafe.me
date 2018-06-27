//a nice rectangle with some text that says Albums

//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
//Make a component

  //props is parent to child communication
const Header = (props) => {
  //matches declaration with definition (definition starting at L22)
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style = {textStyle}>{props.headerText}</Text>
    </View>
  );
};


const styles = {
  viewStyle: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 30,
    //android specific solution for bottom shadow
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20
  }
};

//Make the component available to other parts of the app
export { Header };
