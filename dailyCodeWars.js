'use strict';

function areYouPlayingBanjo(name) {
  // Implement me
  var lower = name.toLowerCase();
  if (lower[0] === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}

console.log(areYouPlayingBanjo('Martin'));

function removeSmallest(numbers) {
  var mIndex;
  var min = numbers[0];

  for (var i = 1; i < numbers.length; i++) {
    if (min > numbers[i]) {
      mIndex = i;
      min = numbers[i];
    }
  }

  numbers.splice(mIndex, 1);

  return numbers;
}
console.log(removeSmallest([5, 3, 2, 1, 4])); // [5,3,2,4])
