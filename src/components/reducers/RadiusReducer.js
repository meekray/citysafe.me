const INITIAL_STATE = {
  radius: 500
};
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
