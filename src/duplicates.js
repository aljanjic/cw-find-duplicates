function duplicates(arr) {

  // create an array of duplicates
  let duplicates = arr.filter((item, i) => arr.includes(item, i + 1 ))
  let uniq = [... new Set(duplicates)]
  console.log(uniq)
  


  // return the array of duplicates
  return uniq;


  // const duplicates = arr => [...new Set(arr.filter((el, i) => i !== arr.indexOf(el)))];

  // let x = [];
  // let y = [];

  // arr.forEach((i) => {
  // 	if (x.includes(i) === false) return x.push(i);
  // 	if (x.includes(i) && y.includes(i) === false) return y.push(i);
  // })

  // return y
}

module.exports = duplicates;
