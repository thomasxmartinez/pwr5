var signInForm = document.getElementById('send');

function sendButton(event) {
  if (event.target.id === 'send') {
    window.location.href = './html/workouts.html';
    var data = document.getElementById('userName').value;
    localStorage.setItem('name', JSON.stringify(data));
  } else {
  }
}
signInForm.addEventListener('click', sendButton);
