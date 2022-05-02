function getSeason(date) {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  let result;
 
  if(!date) result = 'Unable to determine the time of year!';
  else if(isNaN(Date.parse(date)) || Object.getOwnPropertySymbols(date).length !== 0) throw new Error('Invalid date!');
  else {
    switch (date.getMonth()) {
      case 11:
      case 0:
      case 1:
        result = seasons[0];
      break;
 
      case 2:
      case 3:
      case 4:
        result = seasons[1];
      break;
 
      case 5:
      case 6:
      case 7:
        result = seasons[2];
      break;
 
      case 8:
      case 9:
      case 10:
        result = seasons[3];
      break;
 
      default:
    }
  }
 
  return result;
 }

module.exports = {
  getSeason
};

