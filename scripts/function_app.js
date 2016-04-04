//make sure DOM is loaded before loading scripts
document.addEventListener("DOMContentLoaded", function() {

  var score = 0;
  var input;

  //add 5 to score
  document
    .getElementById('increase-5')
    .addEventListener('click', function() {
      setScore(getScore(), 'increase-5');
    });

  //subtract 5 from score
  document
    .getElementById('decrease-5')
    .addEventListener('click', function() {
      setScore(getScore(), 'decrease-5');
    });

  //set custom score and alert if invalid entry
  document
    .getElementById('submit-custom-score')
    .addEventListener('click', function() {
      setScore(getScore(), 'submit-custom-score');
    });



function getScore () {
  var score = document.getElementById('score').innerHTML.split(' ')[0];
  return parseInt(score);
};

function setScore (score, elementId) {
  if (elementId === 'increase-5') {
    score += 5;
    document.getElementById('score')
      .innerHTML = score + " Points";
  } else if (elementId === 'decrease-5') {
    if (score - 5 < 0) {
      return;
    } else {
      score -= 5;
      document.getElementById('score')
        .innerHTML = score + " Points";
    }
  } else {
    input = document.getElementById('custom-score').value
    if (input >= 0) {
      score = parseInt(input);
      document.getElementById('score')
        .innerHTML = score + " Points";
    } else {
      alert("Please enter a valid, positive number.")
    }
  }
}
});
