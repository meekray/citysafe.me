import { crimeOptions, generateScore, transformToHeatMapCoords } from '../Control';

const INITIAL_STATE = {
  radius: 500,
  isLoaded: false
};

//TODO set up initial state
/*
  --> Produces a piece of [application] state [auth]
  1) Initial state can't be undefined.
  2) Handles the logic for new email that is coming from the action
     -action will be whatever the user has typed in
*/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RADIUS_CHANGED':
      return {
        ...state,
        radius: action.payload
      }
    case 'LOADED_FETCH_SUCCESS':
      return {
        ...state,
        isLoaded: action.payload
      }
    case 'SCORE_FETCH_SUCCESS':
    {
      return {
        ...state,
        isLoaded: true,
        DAMAGE: action.payload.scores[0],
        ASSAULT: action.payload.scores[1],
        ROBBERY: action.payload.scores[2],
        DRUGS: action.payload.scores[3],
        totalScore: action.payload.totalScore
      }
    }
    case 'BASELINE_FETCH_SUCCESS':
    {
      return {
        ...state,
        baselineScore: action.payload
      }
    }
    case 'CRIMES_FETCH_SUCCESS':
    {
      return {
        ...state,
        crimes: transformToHeatMapCoords(action.payload)
      }
    }
    default:
      return state;
  }
}
