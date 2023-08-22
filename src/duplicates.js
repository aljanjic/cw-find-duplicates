function duplicates(arr) {


  let x = [];
  let y = [];

  arr.forEach((i) => {
  	if (x.includes(i) === false) return x.push(i);
  	if (x.includes(i) && y.includes(i) === false) return y.push(i);
  })

  return y
}

module.exports = duplicates;
