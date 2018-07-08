import { combineReducers } from 'redux';
import RadiusReducer from './RadiusReducer';
import LocationReducer from './LocationReducer';
/*
  1) The 'region' piece of state is produced by
     the AuthReducer
  2) combineReducers creates a piece of state for each reducer, which then contains
     that reducers' state. state's state
  3) The object 'reducers' is used to pass into the store, to access the reducers in combineReducers
*/
export default combineReducers(
  {
    region: RadiusReducer,
    location: LocationReducer
  }
);
