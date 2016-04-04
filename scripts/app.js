//make sure DOM is loaded before loading scripts
document.addEventListener("DOMContentLoaded", function() {

  var score = 0;
  var input;

  //add 5 to score
  document
    .getElementById('increase-5')
    .addEventListener('click', function() {
      score += 5;
      document.getElementById('score')
        .innerHTML = score + " Points";
    });

  //subtract 5 from score
  document
    .getElementById('decrease-5')
    .addEventListener('click', function() {
      if (score - 5 < 0) {
        return;
      } else {
        score -= 5;
        document.getElementById('score')
          .innerHTML = score + " Points";
      }
    });

  //set custom score and alert if invalid entry
  document
    .getElementById('submit-custom-score')
    .addEventListener('click', function() {
      input = document.getElementById('custom-score').value
      if (input >= 0) {
        score = parseInt(input);
        document.getElementById('score')
          .innerHTML = score + " Points";
      } else {
        alert("Please enter a valid, positive number.")
      }
    });
});
