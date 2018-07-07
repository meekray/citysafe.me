import { crimeOptions, generateScore } from '../Constants';

const INITIAL_STATE = {
  radius: 250,
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
    case 'CRIMES_FETCH_SUCCESS':
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
    default:
      return state;
  }
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
