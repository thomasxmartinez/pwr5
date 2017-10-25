'use strict';

function liftFive(num) {
  return num * 0.8;
}

console.log(liftFive(500));

function liftArray(nums) {
  var newNums = [];
  for (var i = 0; i < nums.length; i++) {
    newNums.push(nums[i] * 0.8);
  }
  return newNums;
}

console.log(liftArray([500, 400, 300, 200, 100]));

// function liftObject(obj) {
//   for (var key in obj) {
//     obj.key = key * 0.8;
//   }
//   console.log(obj);
// }
//
// var totals = {
//   Deadlift: 500,
//   Squat: 400,
//   Bench: 300,
//   ShoulderPress: 200,
//   BarbellRow: 100
// };
// liftObject(totals);
