function getSumOfDigits(n) {
  let stringNumber = n.toString();
  let sum = 0;

  for (let i = 0; i < stringNumber.length; i++) sum += Number(stringNumber[i]);
  
  if (sum.toString().length > 1) sum = getSumOfDigits(sum);

  return sum;
}


module.exports = {
  getSumOfDigits
};
