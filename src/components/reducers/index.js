import { combineReducers } from 'redux';
import ScoreReducer from './ScoreReducer';
import RadiusReducer from './RadiusReducer'
/*
  1) The 'auth' piece of state is produced by
     the AuthReducer
  2) combineReducers creates a piece of state for each reducer, which then contains
     that reducers' state. state's state
  3) The object 'reducers' is used to pass into the store, to access the reducers in combineReducers
*/
export default combineReducers(
  {
    score: ScoreReducer,
    region: RadiusReducer
  }
);
