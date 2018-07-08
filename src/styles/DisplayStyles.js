import {StyleSheet} from 'react-native';

export const DisplayStyles = {
  SAFE: {
    backgroundColor: '#329E87'
  },
  RISKY: {
    backgroundColor: '#FF9800'
  },
  UNSAFE: {
    backgroundColor: '#E65100'
  },
  DANGEROUS: {
    backgroundColor: '#B71C1C'
  }
};

export const StatisticStyles = StyleSheet.create({
  SAFE: {
    color: '#329E87'
  },
  RISKY: {
    color: '#FF9800'
  },
  UNSAFE: {
    color: '#E65100'
  },
  DANGEROUS: {
    color: '#B71C1C'
  }
});

export const SliderStyle = {
  SAFE: {
    minimumTrackTintColor: '#329E87',
    thumbTintColor:'#329E87'
  },
  RISKY: {
    minimumTrackTintColor: '#FF9800',
    thumbTintColor:'#FF9800'
  },
  UNSAFE: {
    minimumTrackTintColor: '#E65100',
    thumbTintColor:'#E65100'
  },
  DANGEROUS: {
    minimumTrackTintColor: '#B71C1C',
    thumbTintColor:'#B71C1C'
  }
};
