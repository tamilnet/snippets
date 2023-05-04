let myArray = [
  "/getAllCategory",
  "/searchCourse",
  "/suggestCourseByName",
  "/getAllLiveCourse",
  "/getSubCategorybyCategoryCode",
  "/getCourseByCourseCode",
  "/getInstructorById",
  "/getCourseByInstructorId",
  "\/api\/v1\/course\/(.*)\/rating",
  "/getAllFaq"
];
// let regexp = "/api/v1/course/123/rating";
// let matchAll = myArray.match(regexp);
// let firstMatch;
// for(i = 0; i < myArray.length; i++){
//   firstMatch = matchAll[i];
//   console.log( firstMatch.index );
// }
//alert( firstMatch.index );
console.log(myArray.findIndex(a => "/api/v1/course/123/rating".match(a)));


console.log(myArray.findIndex(a => "/searchCourse".match(a)));

async function joinLiveAlert(req, res) {
  try {
    let email = req.email;
    let userID = await userHelper.getUserIdByEmail(email);
    let foundCourse;
    let foundCourseArray = [];
    let liveClassList;
    let foundPurchaseHistory = await PurchaseHistory.find({
      userId: userID.toString(),
    });
    //console.log(foundPurchaseHistory);
    if (foundPurchaseHistory != null) {
      for(i = 0; i < foundPurchaseHistory.length; i++){
        let foundCourseCode = foundPurchaseHistory[i].courseCode;
        console.log("foundCourseCode : ", foundCourseCode);
        foundCourse = await Course.findOne({
          courseCode: foundCourseCode
        }).lean();
        //console.log("foundCourse : ", foundCourse);
        if(foundCourse != null){
          liveClassList = foundCourse.liveClassList;
        if(liveClassList.length != 0){
          for(j = 0; j < liveClassList.length; j++){
            let scheduledClassAlertTime = moment(new Date(liveClassList[j].date))
            .tz("Asia/Kolkata")
            .subtract(5, "minutes");
            console.log("scheduledClassAlertTime : ", scheduledClassAlertTime);
            let userCurrentDate = moment(new Date()).tz("Asia/Kolkata");
            console.log("user date :" + userCurrentDate);
            if (userID != null && userCurrentDate.isSame(scheduledClassAlertTime) == true) {
              foundCourseArray.push(foundCourse);

            }

            }
          }
        }
      }
      if(foundCourseArray.length != 0){
        statusHelper.successResponseWithData(res,"Live Class will start in 5 minutes",foundCourseArray);
      }else {
        statusHelper.successResponseWithData(res,"No Upcoming classes");
      }

    }
  } catch (err) {
    console.log(err);
    statusHelper.ErrorResponse(res, "Something went wrong.");
  }
}