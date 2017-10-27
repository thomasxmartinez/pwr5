var deads = Number(localStorage.DeadLift) * 0.8;
var bench = Number(localStorage.Bench) * 0.8;
var row = Number(localStorage.BarbellRow) * 0.8;
var squat = Number(localStorage.Squat) * 0.8;
var shoulder = Number(localStorage.ShoulderPress) * 0.8;

var lifts = function(element, workout) {
  document.getElementById(element).innerHTML = '5 x 5 @ -' + Math.floor(workout);
};

lifts('lifts-deads', deads);
lifts('lifts-bench', bench);
lifts('lifts-squat', squat);
lifts('lifts-shoulder', shoulder);
lifts('lifts-row', row);
