import axios from 'axios';
import {DetroitURL} from '../config';
export const radiusChanged = (newSize) => {
  return {
    type: "RADIUS_CHANGED",
    payload: newSize
  };
};

export const loadedFetch = (isLoaded) => {
  return {
    type: "LOADED_FETCH_SUCCESS",
    payload: !isLoaded
  };
};

export const crimesFetch = (radius, latitude, longitude) => {
  return ( dispatch ) => {
    axios.get(DetroitURL(radius, latitude, longitude))
    .then(response => {
      dispatch({ type: "SCORE_FETCH_SUCCESS", payload: response.data})
      dispatch({ type: "CRIMES_FETCH_SUCCESS", payload: response.data})
    })
    .catch(error => {
      console.log(error);
    });
  };
};

export const baselineScoreFetch = (latitude, longitude) => {
  return ( dispatch ) => {
    axios.get(DetroitURL(500, latitude, longitude))
    .then(response => {
      dispatch({ type: "BASELINE_FETCH_SUCCESS", payload: response.data})
    })
    .catch(error => {
      console.log(error)
    });
  };
};
