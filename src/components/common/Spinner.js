import React from 'react';
import {View, ActivityIndicator } from 'react-native';


//(size || 'large') says: if we pass in a size prop, use that value.
//otherwise, default to 'large'
const Spinner = ({size}) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator
      size={size || 'large'}/>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
