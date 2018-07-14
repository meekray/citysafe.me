import axios from 'axios';

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

export const crimesFetch = (radius) => {
  return ( dispatch ) => {
    axios.get(`https://data.detroitmi.gov/resource/9i6z-cm98.json?$where=within_circle(location,42.3560102,-83.07087059999998,${radius})&$limit=5000&$select=location,offense_category`)
    .then(response => {
      dispatch({ type: "SCORE_FETCH_SUCCESS", payload: response.data})
      dispatch({ type: "CRIMES_FETCH_SUCCESS", payload: response.data})
    })
    .catch(error => {
      console.log(error)
    });
  };
};

export const baselineScoreFetch = (latitude, longitude) => {
  return ( dispatch ) => {
    axios.get(`https://data.detroitmi.gov/resource/9i6z-cm98.json?$where=within_circle(location,42.3560102,-83.07087059999998,500)&$limit=5000&$select=location,offense_category`)
    .then(response => {
      dispatch({ type: "BASELINE_FETCH_SUCCESS", payload: response.data})
    })
    .catch(error => {
      console.log(error)
    });
  };
};
