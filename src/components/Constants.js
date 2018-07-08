export const crimeOptions = [
    {crimeType: 'DAMAGE', riskFactor: 2},
    {crimeType: 'ASSAULT', riskFactor: 4},
    {crimeType: 'ROBBERY', riskFactor: 3},
    {crimeType: 'DRUGS', riskFactor: 1}
];

export const generateScore = (scores) => {
  var totalScore = 0;
  for(var i = 0; i < crimeOptions.length; i++){
    var crimeCount = scores[i];
    var weightage = crimeOptions[i].riskFactor;
    totalScore += (crimeCount*weightage);
  }

  switch (true) {
    case (totalScore > 1500):
      return "DANGER";
    case (totalScore > 400):
      return "UNSAFE";
    case (totalScore > 200):
      return "RISKY";
    case (totalScore < 200):
      return "SAFE";
    default:
      return "???";
  }
}
