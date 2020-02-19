module.exports = function countCats(m) {
  let countCats = 0;
  for (let i=0; i<m.length; i++) {
    for (let j=0; j<m[i].length; j++) {
      if (m[i][j] === "^^") {
        countCats= countCats+1
      } else {
        countCats = countCats
      }
    }
  }
  return countCats
};
