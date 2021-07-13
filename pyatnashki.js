const body = document.querySelector('.body');
const game = body.querySelector('.game');
const gameUserWin = game.querySelector('.game__user-win');
const gameWindow = game.querySelector('.game__window');
const gameCellAll = game.querySelectorAll('.game__cell');
const gameResetButton = game.querySelector('.game__reset-button');

let number = 15

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// console.log(getRandomInt(number))

let cellNumber = [{number: ''}, {number: ''}, {number: ''}, {number: ''}, {number: ''}, {number: ''}, {number: ''}, {number: ''}, {number: ''}, {number: ''}, {number: ''}, {number: ''}, {number: ''}, {number: ''}, {number: ''}, {number: ''},];

cellNumber.forEach((cell) => {
    if (number <= 0) {
        number = ''
        cell.number = `${number}`;
        return
    }
    cell.number = `${number}`;
    number -= 1;
})

console.log(cellNumber)

// gameWindow.addEventListener('click', xxx);
// gameResetButton.addEventListener('click', xxx);
