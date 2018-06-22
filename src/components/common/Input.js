import React from 'react';
import {TextInput, Text, View} from 'react-native';


//purpose of component: wrap a text input and make it look nice
//receives fat arrow function as prop and passes it into the TextInput

//when you call a component but don't pass in a argument/value for some prop,
//it is automically set to false
const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    const {inputStyle, labelStyle, containerStyle} = styles;
    return (
      <View style = {containerStyle}>
        <Text style = {labelStyle}>{label}</Text>

        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          style = {inputStyle}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    );
};

//2 + 1 = 3, 1/3 and 2/3 for respectice component space
//flex property is used to proprtion appropriate space between sibling components
const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
