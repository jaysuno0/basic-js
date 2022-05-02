function createDreamTeam(members) {
  const name = [];

  if (Array.isArray(members)) {
    members.forEach(mem => {
      typeof mem === 'string' && name.push(mem.trim()[0].toUpperCase());
    });
  }
  
  return name.sort().join('');
}

module.exports = {
  createDreamTeam
};

