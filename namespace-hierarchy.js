let listOfCategories = [
  {
    "id": 4,
    "name": "JavaScript",
    "namespace": "/1/2"
  },
  {
    "id": 1,
    "name": "Development",
    "namespace": "/"
  },
  {
    "id": 2,
    "name": "Web Development",
    "namespace": "/1"
  },
  {
    "id": 3,
    "name": "ReactJS",
    "namespace": "/1/2"
  },
  {
    "id": 5,
    "name": "Music",
    "namespace": "/"
  },
  {
    "id": 6,
    "name": "Instruments",
    "namespace": "/5"
  },
  {
    "id": 7,
    "name": "Veena",
    "namespace": "/5/6"
  }
]

let namespaceMap = new Map();
for (var i in listOfCategories) {

  if (namespaceMap.get(listOfCategories[i].namespace)) {
    // if already exists in map
    var categoriesBelongToNamespace = new Array(...namespaceMap.get(listOfCategories[i].namespace))
    categoriesBelongToNamespace.push(listOfCategories[i])
    namespaceMap.set(listOfCategories[i].namespace, categoriesBelongToNamespace)
  } else {
    namespaceMap.set(listOfCategories[i].namespace, new Array(listOfCategories[i]))
  }
}

const sortnamespaceMap = new Map([...namespaceMap].sort((x, y) => (x < y) ? -1 : ((x > y) ? 1 : 0)));

function eachRecursive(data, addCatUnderNamespace, subCategories) {
  for (var i in data) {
    var namespaceOfCat = data[i].namespace;
    if (data[i].namespace === "/") {
      namespaceOfCat = data[i].namespace + data[i].id
    } else {
      namespaceOfCat = data[i].namespace + "/" + data[i].id
    }
    if (typeof data[i] == "object" && data[i] !== null && namespaceOfCat === addCatUnderNamespace) {
      data[i].subCategories = subCategories
      break
    } else if (data[i].subCategories) {
      eachRecursive(data[i].subCategories, addCatUnderNamespace, subCategories);
    }
  }
}

console.log("Namespace Map");
console.log(namespaceMap);
console.log("Sorted Map");
console.log(sortnamespaceMap);

let finalData = new Array();

for (var [key, value] of sortnamespaceMap.entries()) {
  // Flat the first element
  if (key == [...sortnamespaceMap][0][0]) {
    finalData.push(...value)
    continue;
  }
  console.log("Passed Key : " + key)
  eachRecursive(finalData, key, value)
}

// console.log(finalData);
// Convert to JSON and preety print
console.log(JSON.stringify(finalData, null, 2))