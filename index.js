let homeScore = 0;
let guestScore = 0;

//selecting the HTML elements
const homeScoreElement = document.getElementById("home-score");
const guestScoreElement = document.getElementById("guest-score");

//selecting the buttons
const homeButtons = document.querySelectorAll(".buttons-home .btn-score");
const guestButtons = document.querySelectorAll(".buttons-guest .btn-score");

//updating the scoreboard
function render() {
  homeScoreElement.textContent = homeScore;
  guestScoreElement.textContent = guestScore;
}

// for button HOME
homeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // read the value
    const points = parseInt(button.dataset.points);

    // adding the score
    homeScore += points;

    // updating the table
    render();
  });
});

// for button GUEST
guestButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const points = parseInt(button.dataset.points);

    guestScore += points;

    render();
  });
});

//adding the reset button functionality;
const newGameBtn = document.getElementById("new-game-btn");

newGameBtn.addEventListener("click", function () {
  homeScore = 0;
  guestScore = 0;

  render();
});
