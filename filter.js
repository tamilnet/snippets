const list =[
  {
    name: "Development",
    id: 1,
    status : "ACTIVE"
  },
  {
    name: "Web Development",
    id: 2,
    status : "ACTIVE"
  },
  {
    name: "Javascript",
    id: 3,
    status : "ACTIVE"
  },
  {
    name: "React",
    id: 4,
    status : "REJECTED"
  }
];

const result = list.filter(li => li.listOrder != -1 && li.status == "ACTIVE");
console.log(result);