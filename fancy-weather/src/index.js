import './scss/main.scss';

const settings = require('./js/settings');
const map = require('./js/map');
const domHelper = require('./js/domHelper');

const initApp = async () => {
  await domHelper.generateAppData();

  domHelper.updateAppView();

  await domHelper.changeBackgroundImage();

  map.setMapPosition(settings.latitude, settings.longitude);

  domHelper.setDOMHandlers();
};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
