var obj = {
  value: undefined,
  name: "tamil",
  address: [
    {
      city: "chennai",
      street: undefined,
      type: "billing"
    },
    {
      city: "chennai",
      street: "mount road",
      type: "shipping"
    }
  ],
  hobbies: ["reading", undefined, "running"]
};

console.log(JSON.stringify(obj))
//{"name":"tamil","address":{"billing":{"city":"chennai"}},"hobbies":["reading",null,"running"]}