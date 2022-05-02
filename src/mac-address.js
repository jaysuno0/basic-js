function isMAC48Address(str) {
  let symbols = str.split('-');
  let isValid = true;
  
  if (symbols.length !== 6) isValid = false;
  
  for (let i = 0; i < symbols.length; i++) {
    const number = parseInt(symbols[i], 16);
    if (!number && number !== 0) isValid = false;
  }
  
  return isValid;
}


module.exports = {
  isMAC48Address
};
