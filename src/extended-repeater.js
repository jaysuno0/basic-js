function repeater(str, options) {
  const strings = [];
  const additions = [];
  let part = String(str);

  if (options) {
    if(options.addition !== undefined) {
      let add = String(options.addition);

      if(options.additionRepeatTimes) {
        for(let i = 0; i < options.additionRepeatTimes; i++) additions.push(add);
      } else part += add;

      part += additions.join(options.additionSeparator ? options.additionSeparator : '|');
    }

    if (options.repeatTimes) {
      for (let i = 0; i < options.repeatTimes; i++) strings.push(part);
    }
  }

  return strings.length ? strings.join(options.separator ? options.separator : '+') : part;
}

module.exports = {
  repeater
};
