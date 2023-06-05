let startTime;
let endTime;
let reactionTime;

document.getElementById('game-area').addEventListener('click', function() {
  if (startTime) {
    endTimer();
    showResult();
  } else {
    startTimer();
  }
});

function startTimer() {
  startTime = new Date().getTime();
  document.getElementById('game-area').style.backgroundColor = 'yellow';
}

function endTimer() {
  endTime = new Date().getTime();
  reactionTime = (endTime - startTime) / 1000;
  startTime = null;
}

function showResult() {
  document.getElementById('result').innerText = 'Your reaction time: ' + reactionTime + 's';
  document.getElementById('result').style.display = 'block';
  document.getElementById('game-area').style.background = '#f0f0f0';
}
