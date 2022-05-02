function sortByHeight(arr) {
  const newArray = arr.filter(item => item !== -1).sort((a, b) => b - a);
  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) resultArray.push(newArray.pop());
    else resultArray.push(-1);
  }

  return resultArray;
}

module.exports = {
  sortByHeight
};
