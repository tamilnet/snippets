// sorting strings in ascending order

list = ["orange", "lemon", "apple", "kiwi"];
const result = list.sort();   
console.log(result);

// for descending 
// list.sort();
// list.reverse();

// sorting numbers in ascending order

numbers = [25, 34,2,89,56,22];
const sortResult = numbers.sort(function(a, b){return a-b}); // for descending : {return b-a}
console.log(sortResult);
