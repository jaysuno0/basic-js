class VigenereCipheringMachine {
  //GOT NO IDEA ABOUT THE LAST TEST IN THIS TASK
  //I mean why the code can't pass it... :) broken head
  constructor (isReverse) {
    this.isReverse = isReverse ? true : false;
    this.alphabet = [...'abcdefghijklmnopqrstuvwxyz'.toUpperCase()];
    this.board = this.alphabet.map((letter, index, arr) => {
      const row = [];
      for (let i = 0; i < arr.length; i++) {
        let ind = this.indexate(i + index, arr.length);
        row.push(arr[ind]);
      }
      return row;
    })
  }

  indexate(index, arrayLength) {
    while (index >= arrayLength) {
      index -= arrayLength;
    }
    return index;
  }

  processArgs(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    else {
      return [str.toUpperCase(), key.toUpperCase()];
    }
  }

  encrypt(text, key) {
    const [str, codeword] = this.processArgs(text, key);
    const alph = this.alphabet;
    const board = this.board;
    const code = [...codeword];
    const string = [...str];
    let symbolShift = 0; //not to shift indexation because of symols like , ! - ...

    const encrypted = string.map((letter, ind) => {
      let char = letter;
      if(alph.includes(letter)) {
        const rowIndex = this.indexate(ind + symbolShift, code.length);
        const row = board[alph.indexOf(code[rowIndex])];
        char = row[alph.indexOf(letter)];
      } else symbolShift--;

        return char;
    });

    return this.isReverse ? encrypted.reverse().join('') : encrypted.join('');
  }

  decrypt(text, key) {
    const [str, codeword] = this.processArgs(text, key);
    const alph = this.alphabet;
    const board = this.board;
    const code = [...codeword];
    const string = [...str];
    let symbolShift = 0; //not to shift indexation because of symols like , ! - ...

    const decrypted = string.map((letter, ind) => {
      let char = letter;
      ind = this.indexate(ind + symbolShift, code.length);

      if(alph.includes(letter)) {
        const row = board[alph.indexOf(code[ind])];
        char = alph[row.indexOf(letter)];
      } else symbolShift--;
      return char;
    });

    return this.isReverse ? decrypted.reverse().join('') : decrypted.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
