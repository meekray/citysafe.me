import React from 'react';
import { View, Dimensions} from 'react-native';

const MapSection = (props) => {
  return (
    <View style ={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 3,
    padding: 30
  }
};

export {MapSection};
