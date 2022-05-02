const chainMaker = {
  chain: [],

  addLink (link) {
    link === undefined ? this.chain.push('') : this.chain.push(String(link));
    return this;
  },

  removeLink(linkNumber) {
    if(Number.isInteger(linkNumber) && this.chain[linkNumber - 1]) this.chain.splice(linkNumber - 1, 1);
    else {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    return this
  },

  reverseChain () {
    this.chain.reverse();
    return this;
  },

  getLength () {
    return this.chain.length;
  },

  finishChain() {
    const chain = this.chain.map(item => `( ${item} )`).join('~~');
    this.chain = [];
    return chain;
  },
}

module.exports = {
  chainMaker
};
