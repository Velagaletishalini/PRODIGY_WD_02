let timer;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 10);
        isRunning = true;
    }
}

function pause() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    isRunning = false;
    display.innerHTML = "00:00:00";
    laps.innerHTML = "";
}

function lap() {
    const lapTime = document.createElement('li');
    lapTime.textContent = display.textContent;
    laps.appendChild(lapTime);
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

    display.innerHTML = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('lap').addEventListener('click', lap);
