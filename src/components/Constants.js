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
  switch (true) {
    case (totalScore > 1500):
      return "DANGER";
    case (totalScore > 1000):
      return "UNSAFE";
    case (totalScore > 200):
      return "RISKY";
    case (totalScore < 200):
      return "SAFE";
    default:
      return "???";
  }
}
