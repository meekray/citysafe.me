export const DetroitURL = (radius, latitude, longitude) => {
  return (`https://data.detroitmi.gov/resource/9i6z-cm98.json?$where=within_circle(location,${latitude},${longitude},${radius})&$limit=500&$select=location,offense_category`);
}

export const SanFranURL = (radius, latitude, longitude) => {
  return (`https://data.sfgov.org/resource/cuks-n6tp.json?$where=within_circle(location,${latitude},${longitude},${radius})&$limit=500&$select=location,category`);
}
