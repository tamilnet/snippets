const fruits = new Map([
  ["apples", 500],
  ["oranges", 200],
  ["bananas", 300],
  ["kiwi", 100],
  ["grapes", 400]
]);

// sort by keys

const sortMap = new Map([...fruits].sort());  // sort by ascending
console.log(sortMap);

const reverseSortMap = new Map([...fruits].sort().reverse());   // sort by descending
console.log(reverseSortMap);

// sort by values

const mapSort = new Map([...fruits.entries()].sort(function(a,b){return(a[1]-b[1])}));  // ascending
console.log(mapSort);

const reverseMapSort = new Map([...fruits.entries()].sort(function(a,b){return(b[1]-a[1])})); //descending
console.log(reverseMapSort);

// (...) = Spread syntax can be used when all elements from an object or array need to be included in a new array or object.
// The spread syntax (...) is used to get an array of the Map's entries, which we can sort using the sort method.

// value as string

const fruitsValueAsString = new Map([
  ["apples", "z"],
  ["oranges", "y"],
  ["bananas", "a"],
  ["kiwi", "d"],
  ["grapes", "m"]
]);

const mapSortValue = new Map([...fruitsValueAsString.entries()].sort(function(a,b){return a[1]>b[1] ? 1 : -1}));  // ascending
console.log(mapSortValue);

// for descending a[1]<b[1] ? 1 : -1    (or)   a[1]>b[1] ? -1 : 1