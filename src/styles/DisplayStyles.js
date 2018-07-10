import {StyleSheet} from 'react-native';

export const SAFE_COLOR = '#329E87';
export const RISKY_COLOR = '#FF9800';
export const UNSAFE_COLOR = '#E84A5F';
export const DANGEROUS_COLOR = '#B71C1C';

export const DisplayStyles = {
  SAFE: {
    backgroundColor: SAFE_COLOR
  },
  RISKY: {
    backgroundColor: RISKY_COLOR
  },
  UNSAFE: {
    backgroundColor: UNSAFE_COLOR
  },
  DANGEROUS: {
    backgroundColor: DANGEROUS_COLOR
  }
};

export const StatisticStyles = StyleSheet.create({
  SAFE: {
    color: SAFE_COLOR
  },
  RISKY: {
    color: RISKY_COLOR
  },
  UNSAFE: {
    color: UNSAFE_COLOR
  },
  DANGEROUS: {
    color: DANGEROUS_COLOR
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
