const INITIAL_STATE = {
  totalScore: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SCORE_CALCULATED":
    console.log(action.payload);
      return {
        ...state,
        totalScore: action.payload
      };
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
