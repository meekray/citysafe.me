import React from 'react';
import { Text, View, Dimensions} from 'react-native';

const ContentRow = (props) => {
  return (
    <View style ={[styles.containerStyle, props.style]}>
      <Text style={styles.textStyle}>
        {props.text}
      </Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
  },

  textStyle: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#4F4F4F",
    fontSize: 24
  }
};

export {ContentRow};
