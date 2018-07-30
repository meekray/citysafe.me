import axios from 'axios';
import {GetCrimes} from '../Models';
import { crimeOptions, generateScore, transformToHeatMapCoords } from '../Control';
import {CITY_SELECTION} from '../CitySelection';

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
  var scores = [0, 0, 0, 0];
  var URL = GetCrimes(radius, latitude, longitude);
  console.log(CITY_SELECTION);
  return ( dispatch ) => {
    axios.get(URL)
    .then(response => {
      var totalScore = generateScore(scores, response.data);
      dispatch({
        type: "SCORE_FETCH_SUCCESS",
        payload: {
          scores: scores,
          totalScore: totalScore
        }
      })
      dispatch({ type: "CRIMES_FETCH_SUCCESS", payload: response.data})
    })
    .catch(error => {
      console.log(error);
    });
  };
};

export const baselineScoreFetch = (latitude, longitude) => {
  return ( dispatch ) => {
    axios.get(GetCrimes(500, latitude, longitude))
    .then(response => {
      var scores = [0, 0, 0, 0];
      var baselineScore = generateScore(scores, response.data);
      dispatch({ type: "BASELINE_FETCH_SUCCESS", payload: baselineScore})
    })
    .catch(error => {
      console.log(error)
    });
  };
};
