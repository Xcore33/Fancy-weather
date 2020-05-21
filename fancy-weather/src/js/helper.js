const getSeason = dateTime => {
  const monthOffset = 1;
  const monthValue = new Date(dateTime).getMonth() + monthOffset;
  let seasonPeriod = '';
  switch (monthValue) {
    case 3:
    case 4:
    case 5:
      seasonPeriod = 'spring';
      break;
    case 6:
    case 7:
    case 8:
      seasonPeriod = 'summer';
      break;
    case 9:
    case 10:
    case 11:
      seasonPeriod = 'fall';
      break;
    default:
      seasonPeriod = 'winter';
      break;
  }

  return seasonPeriod;
};

const getDayPeriod = (dateTime, offsetSec) => {
  const secondsInHour = 3600;
  const timeValue = new Date(dateTime).getUTCHours() + offsetSec / secondsInHour;
  return timeValue >= 7 && timeValue <= 19 ? 'day' : 'night';
};

module.exports = {
  getSeason,
  getDayPeriod,
};
