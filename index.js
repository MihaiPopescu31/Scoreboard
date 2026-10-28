let homeScore = 0;
let guestScore = 0;

const homeScoreElement = document.getElementById("home-score");
const guestScoreElement = document.getElementById("guest-score");

const homeButtons = document.querySelectorAll(".buttons-home .btn-score");
const guestButtons = document.querySelectorAll(".buttons-guest .btn-score");

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
