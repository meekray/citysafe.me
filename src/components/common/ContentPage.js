import React from 'react';
import { View, Text } from 'react-native';

const ContentPage = (props) => {
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
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 30,
    paddingLeft: 30
  }
};

export { ContentPage };
