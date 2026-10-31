let homeScore = 0;
let guestScore = 0;

//selecting the HTML elements
const homeScoreElement = document.getElementById("home-score");
const guestScoreElement = document.getElementById("guest-score");

//adding the leader indicator variable
const homeLead = document.getElementById("home-lead");
const guestLead = document.getElementById("guest-lead");

//adding the timer variables
const timerElement = document.getElementById("timer");
const periodElement = document.getElementById("period");
let timeLeft = 10 * 60;
let currentPeriod = 1;
let timerInterval = null;

// calculating the remaining minutes and seconds
function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  timerElement.textContent =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}
updateTimer();
//starting the timer
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const nextPeriodBtn = document.getElementById("next-period-btn");

startBtn.addEventListener("click", function () {
  if (timerInterval !== null) return;

  timerInterval = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }, 1000);
});

//pause functionality
pauseBtn.addEventListener("click", function () {
  clearInterval(timerInterval);
  timerInterval = null;
});
nextPeriodBtn.addEventListener("click", function () {
  clearInterval(timerInterval);
  timerInterval = null;

  if (currentPeriod < 4) {
    currentPeriod++;
    timeLeft = 10 * 60;

    periodElement.textContent = "PERIOD " + currentPeriod;
    updateTimer();
  }
});

//selecting the buttons
const homeButtons = document.querySelectorAll(".buttons-home .btn-score");
const guestButtons = document.querySelectorAll(".buttons-guest .btn-score");

// updating the scoreboard and displaying the leading team indicator
function render() {
  homeScoreElement.textContent = homeScore;
  guestScoreElement.textContent = guestScore;
  // moving to the next period, up to period 4
  if (homeScore > guestScore) {
    homeLead.style.opacity = "1";
    guestLead.style.opacity = "0";
  } else if (guestScore > homeScore) {
    guestLead.style.opacity = "1";
    homeLead.style.opacity = "0";
  } else {
    homeLead.style.opacity = "0";
    guestLead.style.opacity = "0";
  }
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
  clearInterval(timerInterval);
  timerInterval = null;

  homeScore = 0;
  guestScore = 0;

  timeLeft = 10 * 60;
  currentPeriod = 1;

  updateTimer();
  periodElement.textContent = "PERIOD " + currentPeriod;

  render();
});
