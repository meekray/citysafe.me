import {CITY_SELECTION} from './CitySelection';
import {SAN_FRANCISCO_KEY, DETROIT_KEY} from './Models';

export const GetCrimes = (radius, latitude, longitude) => {
  switch(true){
    case CITY_SELECTION === "DETROIT_KEY":
      return (`https://data.detroitmi.gov/resource/9i6z-cm98.json?$where=within_circle(location,${latitude},${longitude},${radius})&$limit=100000&$select=location,offense_category`);
    case CITY_SELECTION === "SAN_FRANCISCO_KEY":
      return (`https://data.sfgov.org/resource/cuks-n6tp.json?$where=within_circle(location,${latitude},${longitude},${radius})&$limit=100000&$select=location,category`);
  }
}
