function duplicates(arr) {


//   let x = [];
//   let y = [];

//   arr.forEach((i) => {
//   	if (x.includes(i) === false) return x.push(i);
//   	if (x.includes(i) && y.includes(i) === false) return y.push(i);
//   })

//   return y







let firstEncounter = [];
let duplicates = [];


arr.forEach(el => {
  
  if(!firstEncounter.includes(el)) return firstEncounter.push(el)
  if(firstEncounter.includes(el) && !duplicates.includes(el)) return duplicates.push(el)

});

return duplicates;


}








module.exports = duplicates;
