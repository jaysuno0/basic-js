function renameFiles(names) {
  for (let i = 0; i < names.length - 1; i++) {
    let count = 1;

    for (let j = i + 1; j < names.length; j++) {
      if (names[i] === names[j]) names[j] = names[j] + `(${count++})`;
    }
  }

  return names;
}

module.exports = {
  renameFiles
};
