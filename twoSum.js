// let nums = [7, 2, 1, 5 ];
// let target = 8;
// function twoSum(nums, target) {
//     let numMap = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (numMap.has(complement)) {
//             return [numMap.get(complement), i];
//         }
//         numMap.set(nums[i], i);
//     }
//     return [];
// }
// let result = twoSum(nums, target);
// console.log(result); // Output: [0, 3] since nums[0] + nums[3] = 7 + 1 = 8






// known method

let number;
var twoSum = function(nums, target) {

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      console.log([i, j]);
      return [i, j];
    }
  }
}
}

twoSum([7, 2, 1, 5], 7);
