import React from 'react';
import { View, Text } from 'react-native';

const ContentSection = (props) => {
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
    flex: 4
  }
};

export { ContentSection };
