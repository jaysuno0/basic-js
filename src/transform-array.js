function transform(arr) {
  if (Array.isArray(arr)) {
    const newArr = [];
    let continueCurrent = false;
    let doubleCurrent = false;

    const instrunctions = {
      '--discard-prev': () => newArr.pop(),
      '--discard-next': () => continueCurrent = true,
      '--double-next': () => doubleCurrent = true,
      '--double-prev': () => {
        const lastItem = newArr[newArr.length - 1];
        lastItem && newArr.push(lastItem);
      },
    }

    for (let i = 0; i < arr.length; i++) {
      if (continueCurrent) {
        //prevent instructions for discarded number
        if (!(typeof arr[i + 1] === 'string' && arr[i + 1].includes('prev'))) continueCurrent = false;
        //discard current number
        continue;
      } else {
        if (typeof arr[i] === 'string') {
          //if there is such an instruction => implement it
          if (instrunctions[arr[i]]) instrunctions[arr[i]]();
          else newArr.push(arr[i]);
        } else {
          if (doubleCurrent) {
            doubleCurrent = false;
            arr[i] && newArr.push(arr[i]);
          }
          arr[i] && newArr.push(arr[i]);
        }  
      }
    }

    return newArr;

  } else throw new Error("'arr' parameter must be an instance of the Array!");
}

module.exports = {
  transform
};
