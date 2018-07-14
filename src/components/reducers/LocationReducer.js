const INITIAL_STATE = {
  latitude: 0,
  longitude: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOCATION_CHANGED":
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    default:
      return state;
  }
}
