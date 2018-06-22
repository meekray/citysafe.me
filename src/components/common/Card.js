import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style = {styles.containerStyle}>
      {props.children}
    </View>
  );
};

//styles is an object
//containerStyle is a property
const styles = {
  containerStyle: {
    flex: 1,
  }
};

export { Card };
