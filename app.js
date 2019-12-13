let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("minutes");
let secs = document.getElementById("seconds");

//*this holds the setinterval() value
let interval = undefined;

//*this holds the value if the timer is started or not
let started = false;

let startStop = document
  .getElementById("startStop")
  .addEventListener("click", () => {
    days.textContent = localStorage.getItem("days") || "000";
    hours.textContent = localStorage.getItem("hours") || "00";
    mins.textContent = localStorage.getItem("minutes") || "00";
    secs.textContent = localStorage.getItem("seconds") || "00";
  });

window.addEventListener("load", () => {
  //*initial display
  days.textContent = "000";
  hours.textContent = "00";
  mins.textContent = "00";
  secs.textContent = "00";

  days.textContent = localStorage.getItem("days") || "000";
  hours.textContent = localStorage.getItem("hours") || "00";
  mins.textContent = localStorage.getItem("minutes") || "00";
  secs.textContent = localStorage.getItem("seconds") || "00";
});

const timer = () => {
  secs.textContent++;

  //*when 60secs add a minute
  if (secs.textContent === "60") {
    secs.textContent = 0;
    mins.textContent++;

    //*Add 0 before single digit
    if (secs.textContent < 10) {
      secs.textContent = `0${secs.textContent}`;
    }

    //*Add 0 before single digit
    if (mins.textContent < 10) {
      mins.textContent = `0${mins.textContent}`;
    }

    //*when 60mins add an hour
    if (mins.textContent === "60") {
      mins.textContent = 0;
      hours.textContent++;

      //*Add 0 before single digit
      if (hours.textContent < 10) {
        hours.textContent = `0${hours.textContent}`;
      }
    }

    //*when 24hours add a day
    if (hours.textContent === "24") {
      hours.textContent = 0;
      days.textContent++;

      //*Add 0 before single digit
      if (days.textContent < 100) {
        days.textContent = `00${days.textContent}`;
      }
    }
  }
};

//*gets fired when clicking the startstop button
//*stops when clicked again because started will be false
const startAndStop = () => {
  if (!started) {
    interval = setInterval(timer, 1);
    started = true;
  } else {
    window.clearInterval(interval);
    started = false;
  }

  //*store time in localstorage
  if (days > days.textContent) {
    localStorage.setItem("days", days.textContent);
  }

  if (hours > hours.textContent) {
    localStorage.setItem("hours", hours.textContent);
  }

  if (minutes > mins.textContent) {
    localStorage.setItem("minutes", mins.textContent);
  }

  if (seconds > secs.textContent) {
    localStorage.setItem("seconds", secs.textContent);
  }
};
