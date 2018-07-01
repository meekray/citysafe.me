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
    flex: 5,
    elevation: 2,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#F4F4F4',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.2},
    shadowOpacity: 0.1,
    shadowRadius: 0.1,
    margin: 10
  }
};

export { ContentSection };
