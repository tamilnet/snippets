// const { log } = require("console");

const list =[
  {
    name: "Development",
    id: 1,
    namespace: "/"
  },
  {
    name: "Web Development",
    id: 2,
    namespace: "/1"
  },
  {
    name: "Javascript",
    id: 3,
    namespace: "/1/2"
  },
  {
    name: "React",
    id: 4,
    namespace: "/1/2"
  }
];

const length = list.length;
console.log("The length is " + length);
const sourceMap = new Map();


for(var i = 0; i < length; i++){
  sourceMap.set(list[i].id, list[i]);  
}

console.log(sourceMap);

const finalMap = new Map();
// let namespace = "";
// list.forEach(function (value, key) {
//   namespace += list.namespace;
// })

for(i=0; i<length; i++){
  var namespace = (list[i].namespace);
  console.log(namespace);
  var namespaceId = namespace.split("/");
  console.log(namespaceId);
}


