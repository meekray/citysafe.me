const INITIAL_STATE = {
  key: "",
  latitude: "",
  longitude: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CITY_SELECTED":
      return {
        ...state,
        key: action.payload.key
      };
    default:
      return state;
  }
}
