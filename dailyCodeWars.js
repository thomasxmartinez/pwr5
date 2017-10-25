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
