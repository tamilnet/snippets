let mongoquery = {userType: "INSTRUCTOR"};
let sDate = "2022-08-01";
let eDate = "2022-08-30";

sDateObj = new Date(sDate);
eDateObj = new Date(eDate);

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

if (!isValidDate(sDateObj)) {
  console.log("start date is wrong");
  return;
}

if (!isValidDate(eDateObj)) {
  console.log("end date is wrong");
  return;
}

if (sDateObj > eDateObj) {
  console.log("start date should not greater than end date");
  return;
}

mongoquery.createdDatetime = {$gte: new Date(sDate), $lt: new Date(eDate)};
console.log(mongoquery);