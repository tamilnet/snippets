async function changeEmail (req,res){
  try{
    const email = req.email;
    console.log("email",email);
    const userType = req.userType;
    const {newemail} = req.body;
    const user = await User.findOne({ email: email.toLowerCase()});
    if(user && email.toLowerCase() === user.email){
      const newUser = await User.findOne({ email: newemail.toLowerCase()});
      if(newUser){
        statusHelper.validationError(res,"New Email already exist",newUser);
      }
      else{
      var result = await userHelper.sendverificationCode(user.email.toLowerCase(),userType);

      if(result!=0){
        statusHelper.successResponseWithData(res,"OTP Send successfully");
      }
      else{
        statusHelper.validationError(res,"Unable to find this user");
      }
      }
  }
  else{
      statusHelper.validationError(res,"Email does not exist");
  }
    }
    catch(err){
      console.log("changeEmail - Error", err);
      statusHelper.ErrorResponse(res,"Unable to change. Contact System Adminstrator.");
         }
}

async function changeNameAdmin(req, res){
  let userType = req.userType;
  let userId = req.body._id;
  let newName = req.body.newName;
  if(userType == "ADMIN"){
    let foundUser = await User.findOneAndUpdate({_id: userId},{fullName: newName});
  
    if(foundUser == null){
       statusHelper.ErrorResponse(res,"Error in change name.");
      } else {
          statusHelper.successResponseWithData(res,"Name Changed.",foundUser9);
      }
  } else {
      statusHelper.ErrorResponse(res,"You have no permissions to access.");
  }
};





  