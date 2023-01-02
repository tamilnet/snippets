async function getCourseByCourseStatus(req,res) {
  let courseStatus = req.body.courseStatus;
  let foundCourse = Course.findOne({
    courseStatus : courseStatus
  });
  console.log(foundCourse);
  if (foundCourse == null) {

    statusHelper.successResponseWithData(res,"Courses found.",foundCourse);
  } else {
    statusHelper.ErrorResponse(res,"Course does not exist.");
  }
};

async function listNewVideos(req, res) {
  let courseStatus = req.body.courseStatus;
  if(courseStatus == "IN REVIEW"){
    let foundCourse = Course.findOne({
      courseStatus : courseStatus
    });
    
  }
};