export const locationChanged = (latitude, longitude) => {
  return {
    type: "LOCATION_CHANGED",
    payload: {latitude, longitude}
  };
}
