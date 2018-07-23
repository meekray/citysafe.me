import {StyleSheet} from 'react-native';

export const SAFE_COLOR = '#329E87';
export const RISKY_COLOR = '#FF9800';
export const UNSAFE_COLOR = '#E84A5F';
export const DANGER_COLOR = '#B71C1C';

export const NAVY_BLUE = '#17263C';

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
  DANGER: {
    backgroundColor: DANGER_COLOR
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
  DANGER: {
    color: DANGER_COLOR
  }
});
