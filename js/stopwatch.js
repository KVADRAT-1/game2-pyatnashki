import { headerTimer } from '../utils/selectors.js';

let timer;
let second = 0;
let minute = 0;

function stopwatch(data) {
    function switchStopwatch() {
        if (data) {
            clearInterval(timer);
            timer = setInterval(addSecond, 1000);
        } else {
            clearInterval(timer);
            second = 0;
            minute = 0;
        }
    };

    function addSecond() {
        if (second == 59 && minute == 59) { second = 0; minute = 0 }
        if (second < 59) { second ++ } else { second = 0; minute ++ }
        addTime()
    };

    function addTime() {
        if (second < 10 && minute == 0) {
            headerTimer.textContent = `00:0${second}`;
        } else if (second < 60 && minute == 0) {
            headerTimer.textContent = `00:${second}`;
        } else if (second < 10 && minute < 10) {
            headerTimer.textContent = `0${minute}:0${second}`;
        } else if (second < 60 && minute < 10) {
            headerTimer.textContent = `0${minute}:${second}`;
        } else if (second < 10 && minute < 60) {
            headerTimer.textContent = `${minute}:0${second}`;
        } else {
            headerTimer.textContent = `${minute}:${second}`;
        }
    };

    switchStopwatch();
};

export { stopwatch };
