
// While comparing objects we are comparing memory addresses
console.log([1,2,3] === [1,2,3]);
console.log({} === {});

var house = {};
console.log(house === house);

console.log('hello' === 'hello');

/*
  false
  false
  true
  true
 */
