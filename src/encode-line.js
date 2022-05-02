function encodeLine(str) {
  str = [...str];
  
  for (let i = str.length - 1; i >= 1; i--) {
    if (str[i][0] === str[i - 1][0]) {
      str[i - 1] += str[i];
      str.splice(i, 1);
    }
  }

  return str.map(char => char.length > 1 ? char.length + char[0] : char).join('');
}


module.exports = {
  encodeLine
};
