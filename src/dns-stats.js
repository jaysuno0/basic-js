function getDNSStats(domains) {
  const parts = {};

  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i].split('.').reverse().join('.');
    let remaining = '.' + domain;
    let separator;

    while (true) {
      parts[remaining] = 0;
      separator = remaining.lastIndexOf('.');
      if (separator === 0) break;
      remaining = remaining.slice(0, separator);
    }
  }

  for (let i = 0; i < domains.length; i++) {
    let domain = '.' + domains[i].split('.').reverse().join('.');

    Object.keys(parts).forEach(key => {
      if (domain.indexOf(key) >= 0) parts[key] = parts[key] + 1;
    })
  }

  return parts;
}

module.exports = {
  getDNSStats
};
