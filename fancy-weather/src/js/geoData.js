const config = require('./config');

const getGeoPosition = async () => {
  const requestUrl = `${config.ipBaseUrl}${config.ipInfoToken}`;

  const response = await fetch(requestUrl);
  const geoPositionIP = await response.json();

  return geoPositionIP;
};

const getGeoPositionData = async (latitude, longitude, language) => {
  const queryParams = `q=${latitude}%2C%20${longitude}&key=${config.openCageDataApiKey}&language=${language}&pretty=1`;
  const requestUrl = `${config.openCageDataBaseUrl}${queryParams}`;

  const response = await fetch(requestUrl);
  const geoPositionDataOpenCageData = await response.json();

  return geoPositionDataOpenCageData;
};

module.exports = {
  getGeoPosition,
  getGeoPositionData,
};
