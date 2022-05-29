const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newDays = "1 1 2023";

function countdown() {
    const newDaysDate = new Date(newDays);
    const currentDays = new Date();

    const totalSeconds = Math.floor((newDaysDate - currentDays) / 1000);
    const seconds = Math.floor(totalSeconds % 60)
    const mins = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}


countdown();

setInterval(countdown, 1000)