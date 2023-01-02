var moment = require('moment-timezone');


let timezone = ("Asia/Kolkata").toLowerCase();
console.log(timezone);
let allTimezone = moment.tz.names();
let result = allTimezone.map(v => v.toLowerCase());


let isValid = result.includes(timezone);
console.log(isValid);
// let output = Intl.DateTimeFormat().resolvedOptions().timezone;
// console.log(output);

let couseStartDate = moment(new Date("2022-11-22 00:11:00.000Z")).tz('Asia/Kolkata');
let couseEndDate = moment(new Date("2022-11-22 00:11:00.000Z")).tz('Asia/Kolkata').add(1, "hours");

let userCurrentDate = moment(new Date()).tz('Asia/Kolkata');

console.log("couseStartDate : "+couseStartDate.toDate());
console.log("couseEndDate : "+couseEndDate.toDate());
console.log("userCurrentDate : "+userCurrentDate.toDate());

//console.log("couseStartDate < couseEndDate : " + couseStartDate.isBefore(couseEndDate));
console.log("couseStartDate < userCurrentDate : " + userCurrentDate.isBefore(couseEndDate));
if(userCurrentDate.isBetween(couseStartDate, couseEndDate) == true){
  console.log("true");
} else {
  console.log("false");
}
