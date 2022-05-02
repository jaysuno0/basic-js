function deleteDigit(n) {
  const digits = [];
  let stringNum = n.toString();

  for (let i = 0; i < stringNum.length; i++) {
    if (i === 0) digits.push( +stringNum.slice(i + 1));
    else digits.push( +(stringNum.slice(0, i) + stringNum.slice(i + 1)));      
  }
  
  return Math.max(...digits)
}

module.exports = {
  deleteDigit
};
