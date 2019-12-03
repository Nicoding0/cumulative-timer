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
    days.textContent = localStorage.getItem("days");
    hours.textContent = localStorage.getItem("hours");
    mins.textContent = localStorage.getItem("minutes");
    secs.textContent = localStorage.getItem("seconds");
  });

window.addEventListener("load", () => {
  days.textContent = localStorage.getItem("days");
  hours.textContent = localStorage.getItem("hours");
  mins.textContent = localStorage.getItem("minutes");
  secs.textContent = localStorage.getItem("seconds");
});

const timer = () => {
  secs.textContent++;

  //*Add 0 before single digit
  if (secs.textContent < 10) {
    secs.textContent = `0${secs.textContent}`;
  }

  //*when 60secs add a minute
  if (secs.textContent === "60") {
    secs.textContent = 0;
    mins.textContent++;

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

const startAndStop = () => {
  if (!started) {
    interval = setInterval(timer, 1000);
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
