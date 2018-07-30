export const citySelected = (key) => {
  return {
    type: "CITY_SELECTED",
    payload: key
  };
};

export const locationChanged = (latitude, longitude) => {
  return {
    type: "LOCATION_CHANGED",
    payload: {latitude, longitude}
  };
};
