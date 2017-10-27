var workoutForm = document.getElementById('send');

function sendButton(event) {
  if (event.target.id === 'send') {
    window.location.href = './percentage.html';
    var deadlift = document.getElementById('DeadLift').value;
    localStorage.setItem('DeadLift', JSON.stringify(Number(deadlift)));

    var squat = document.getElementById('squat').value;
    localStorage.setItem('Squat', JSON.stringify(Number(squat)));

    var bench = document.getElementById('bench').value;
    localStorage.setItem('Bench', JSON.stringify(Number(bench)));

    var barbellRow = document.getElementById('barbell row').value;
    localStorage.setItem('BarbellRow', JSON.stringify(Number(barbellRow)));

    var shoulderPress = document.getElementById('ShoulderPress').value;
    localStorage.setItem('ShoulderPress', JSON.stringify(Number(shoulderPress)));
  } else {
  }
}
workoutForm.addEventListener('click', sendButton);

console.log(workout);
