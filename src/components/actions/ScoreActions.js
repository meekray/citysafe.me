export const crimeDatumFetched = ({type, frequency}) => {
  return {
    type: "CRIME_DATUM_FETCHED",
    payload: {type, frequency}
  };
};
