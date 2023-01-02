async function getPurchaseHistory(req, res){
  let email = req.email;
  let foundUser = await User.findOne({
    email: email
  }).lean();
  if (foundUser != null && foundUser.purchaseHistory != null) {
    let purchaseHistory = foundUser.purchaseHistory;
    for (i = 0; i < purchaseHistory.length; i++) {
      if (purchaseHistory[i].courseCode != null) {
        let foundCourse = await Course.findOne({
          courseCode: purchaseHistory[i].courseCode
        });
        instructorId = foundCourse.instructorId;
        purchaseHistory[i].courseName = foundCourse.courseName;
        purchaseHistory[i].fee = foundCourse.fee;
        purchaseHistory[i].rating = foundCourse.rating;
        purchaseHistory[i].learners = foundCourse.learners;
        if(instructorId != null){
          let courseUser = await User.findOne({_id: instructorId});
          purchaseHistory[i].instructorName = courseUser.fullName;
        }
      }
    }
    statusHelper.successResponse(res, "Purchased list retreived", wishList);
  } else {
    statusHelper.ErrorResponse(res, "Purchased list empty.");
  }
}