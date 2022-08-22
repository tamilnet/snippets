const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

fruits.set("kiwi", 100);

let text = "";
for (const x of fruits.entries()) {
  console.log(x)
  console.log(x[0])
  console.log(x[1])
  console.log(typeof x)
}