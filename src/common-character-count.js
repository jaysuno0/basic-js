function getCommonCharacterCount(s1, s2) {
  const letters1 = [...s1];
  const letters2 = [...s2];
  let count = 0;

  for(let i = 0; i < letters1.length; i++) {
    for (let j = 0; j < letters2.length; j++){
      if (letters1[i] === letters2[j]) {
        count++
        letters2[j] = false;
        break;
      }
    }
  }

  return count;
}
 

module.exports = {
  getCommonCharacterCount
};
