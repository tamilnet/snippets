var obj = {
  value: undefined,
  name: "tamil",
  address: {
    billing: {
      city: "chennai",
      street: undefined
    }
  },
  hobbies: ["reading", undefined, "running"]
};

console.log(JSON.stringify(obj))
//{"name":"tamil","address":{"billing":{"city":"chennai"}},"hobbies":["reading",null,"running"]}