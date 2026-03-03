let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 1000);
        running = true;
    }
}

function stop() {
    clearInterval(timerInterval);
    running = false;
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    running = false;
    display.innerHTML = "00:00:00";
}

function updateTime() {
    elapsedTime = Date.now() - startTime;

    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)));

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;

    display.innerHTML = `${hours}:${minutes}:${seconds}`;
}