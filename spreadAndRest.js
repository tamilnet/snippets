//Spread with array

const array = [1, 2, 3];
const newArray = [...array, 4, 5, 6];
console.log(newArray); // [1, 2, 3, 4, 5, 6]


//Spread with object

const object = {
  name: 'Prabha',
  age: 25
};
const newObject = {
  ...object,
  gender: "Female",
};
console.log(newObject);


//Rest

const filter = (...args) => {
  return args.filter(el => el === 3);
}
console.log(filter(1, 2, 3)); // [3]

let assessmentDetails = assessmentResult.assessmentDetails;
    //   // loop all questions and save the active status questions in a array
    //   let activeQuestions = [];
    //   for (l = 0; l < assessmentDetails.length; l++) {
    //     if(assessmentDetails[l].questionStatus == "ACTIVE"){
    //       activeQuestions.push(assessmentDetails[l]);
    //     }
    //   }
    //   assessmentResult.assessmentDetails = activeQuestions;