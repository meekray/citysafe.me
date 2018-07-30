export const crimeOptions = [
    {crimeType: 'DAMAGE', riskFactor: 2},
    {crimeType: 'ASSAULT', riskFactor: 4},
    {crimeType: 'ROBBERY', riskFactor: 3},
    {crimeType: 'DRUGS', riskFactor: 1}
];

export const generateScore = (scores, action) => {

  for(var i = 0; i < crimeOptions.length; i++){
    for(var j = 0; j < action.payload.length; j++){
      if(action.payload[j].offense_category.includes(crimeOptions[i].crimeType)){
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

export const mapKey = (key) => {
  switch(key){
    case (key == "San Francisco"):
      return SAN_FRANCISCO_KEY;
    case (key == "Detroit"):
      return DETROIT_KEY;
    default:
      return "COMING_SOON";
  }
}

export const SAN_FRANCISCO_KEY = "SAN_FRANCISCO_KEY";
export const DETROIT_KEY = "DETROIT_KEY";
