import { crimeOptions, generateScore } from '../Constants';

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
      var scores = [0, 0, 0, 0];

      for(var i = 0; i < crimeOptions.length; i++){
        for(var j = 0; j < action.payload.length; j++){
          if(action.payload[j].offense_category.includes(crimeOptions[i].crimeType)){
            scores[i]++;
          }
        }
      }
      var totalScore = generateScore(scores);
      console.log("totalScore: " + totalScore);
      return {
        ...state,
        isLoaded: true,
        DAMAGE: scores[0],
        ASSAULT: scores[1],
        ROBBERY: scores[2],
        DRUGS: scores[3],
        totalScore: totalScore
      }
    }
    case 'BASELINE_FETCH_SUCCESS':
    {
      var scoresA = [0, 0, 0, 0];

      for(var i = 0; i < crimeOptions.length; i++){
        for(var j = 0; j < action.payload.length; j++){
          if(action.payload[j].offense_category.includes(crimeOptions[i].crimeType)){
            scoresA[i]++;
          }
        }
      }
      var baselineScore = generateScore(scoresA);
      console.log("baselineScore: " + baselineScore);
      return {
        ...state,
        baselineScore: baselineScore
      }
    }
    case 'CRIMES_FETCH_SUCCESS':
    {
      var heatMapCrimes = transformToHeatMapCoords(action.payload);
      return {
        ...state,
        crimes: heatMapCrimes
      }
    }
    default:
      return state;
  }
}

const transformToHeatMapCoords = (crimes) => {
  heatMapCoords = [];
  for(var i = 0; i < crimes.length; i++){
    var heatMapCoord = {
      latitude: 0,
      longitude: 0,
      weight: 0
    };
    heatMapCoord.latitude = crimes[i].location.coordinates[1];
    heatMapCoord.longitude = crimes[i].location.coordinates[0];
    heatMapCoord.weight = getWeight(crimes[i].offence_category);
    heatMapCoords.push(heatMapCoord);
  }
  return heatMapCoords;
}

const getWeight = (offenseCategory) => {
  return 1;
}


/*
-->What Redux is Doing
  1) Whenever we call an action creater, we take our slice of state
     which was last produced by the reducer + an action
  2) After the reducer runs, redux looks at the OLD value of state
     and the NEW one, and checks if NEW === OLD
  3) If NEW !== OLD, Redux sends the new STATE to all connected components
  4) A new piece of state is the output
*/

/*
--> How JavaScript compares objects ===
  1) If you instantiate a new object = an old object, JS is NOT
     creating a new object. *Think Pointers
*/
