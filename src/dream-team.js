module.exports = function createDreamTeam(a) {
  if (a === Number(a) || a === null || a === false || a === undefined || a.length === undefined) {
    return false
  } else {
    const aFilter = a.filter(el =>  String(el) === el)
    const result = aFilter.map(el => el.toLocaleUpperCase().split("").filter((el)=> el !== " ").slice(0,1)).sort().join("")
    return result
  }
};
