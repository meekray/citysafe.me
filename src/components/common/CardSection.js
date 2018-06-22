import React from 'react';
import { View, Dimensions} from 'react-native';

const CardSection = (props) => {
  return (
    <View style ={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    flex: 0.6
  }
};

export {CardSection};
