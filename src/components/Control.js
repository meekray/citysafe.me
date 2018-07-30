import {CITY_SELECTION} from './CitySelection';

export const crimeOptions = [
    {crimeType: 'DAMAGE', riskFactor: 2},
    {crimeType: 'ASSAULT', riskFactor: 4},
    {crimeType: 'ROBBERY', riskFactor: 3},
    {crimeType: 'DRUGS', riskFactor: 1}
];

export const generateScore = (scores, action) => {

  for(var i = 0; i < crimeOptions.length; i++){
    for(var j = 0; j < action.length; j++){
      if(action[j][crimeContainsByCity()].includes(crimeOptions[i].crimeType)){
        scores[i]++;
      }
    }
  }

  var totalScore = 0;
  for(var i = 0; i < crimeOptions.length; i++){
    var crimeCount = scores[i];
    var weightage = crimeOptions[i].riskFactor;
    totalScore += (crimeCount*weightage);
  }
  //console.log(totalScore);
  switch (true) {
    case (totalScore > 1500):
      return "DANGER";
    case (totalScore > 1000):
      return "UNSAFE";
    case (totalScore > 800):
      return "RISKY";
    case (totalScore <= 800):
      return "SAFE";
    default:
      return "???";
  }
}

const crimeContainsByCity = () => {
  switch (true){
    case (CITY_SELECTION == SAN_FRANCISCO_KEY):
      return "category";

    case (CITY_SELECTION == DETROIT_KEY):
      return "offense_category";
  }
}


export const mapKey = (key) => {
  switch(true){
    case (key == "San Francisco"):
      return SAN_FRANCISCO_KEY;
    case (key == "Detroit"):
      return DETROIT_KEY;
    default:
      return "COMING_SOON";
  }
}

export const transformToHeatMapCoords = (crimes) => {
  heatMapCoords = [];
  for(var i = 0; i < crimes.length; i++){
    var heatMapCoord = {
      latitude: 0,
      longitude: 0,
      weight: 0
    };
    heatMapCoord.latitude = crimes[i].location.coordinates[1];
    heatMapCoord.longitude = crimes[i].location.coordinates[0];
    heatMapCoord.weight = getWeight(crimes[i].offence_category);
    heatMapCoords.push(heatMapCoord);
  }
  return heatMapCoords;
}

export const getWeight = (offenseCategory) => {
  return 1;
}

export const SAN_FRANCISCO_KEY = "SAN_FRANCISCO_KEY";
export const DETROIT_KEY = "DETROIT_KEY";
