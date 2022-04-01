const daily = document.getElementById("dailyBtn");
const weekly = document.getElementById("weeklyBtn");
const monthly = document.getElementById("monthlyBtn");
daily.classList.remove("selected-btn");
monthly.classList.remove("selected-btn");
weekly.classList.remove("selected-btn");

const hours = document.querySelectorAll(".card-duration");
const previous = document.querySelectorAll(".previous");

const getDaily = () => {
  fetch("../data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      hours.forEach((acc, i) => {
        hours[i].innerHTML = data[i].timeframes.daily.current + "hrs";
        previous[i].innerHTML =
          "Last Daily - " + data[i].timeframes.daily.previous + "hrs";
      });
    });
};

const getWeekly = () => {
  fetch("../data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      hours.forEach((acc, i) => {
        hours[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
        previous[i].innerHTML =
          "Last Weekly - " + data[i].timeframes.weekly.previous + "hrs";
      });
    });
};

const getMonthly = () => {
  fetch("../data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      hours.forEach((acc, i) => {
        hours[i].innerHTML = data[i].timeframes.monthly.current + "hrs";
        previous[i].innerHTML =
          "Last Monthly - " + data[i].timeframes.monthly.previous + "hrs";
      });
    });
};

daily.addEventListener("click", () => {
  daily.classList.add("selected-btn");
  weekly.classList.remove("selected-btn");
  monthly.classList.remove("selected-btn");
  getDaily();
});

weekly.addEventListener("click", () => {
  daily.classList.remove("selected-btn");
  weekly.classList.add("selected-btn");
  monthly.classList.remove("selected-btn");
  getWeekly();
});

monthly.addEventListener("click", () => {
  daily.classList.remove("selected-btn");
  weekly.classList.remove("selected-btn");
  monthly.classList.add("selected-btn");
  getMonthly();
});
