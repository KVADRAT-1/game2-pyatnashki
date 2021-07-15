const body = document.querySelector('.body');
const game = body.querySelector('.game');
const gameUserWin = game.querySelector('.game__user-win');
const gameWindow = game.querySelector('.game__window');
const gameCellAll = game.querySelectorAll('.game__cell');
const gameResetButton = game.querySelector('.game__reset-button');

let stopGame = false;
let stringNumber = 0;
let columnsNumber = 0;
let win = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15, '']];
let cellNumber = [[3, 11, 8, 2],[14, 13, 12, 10],[4, 15, 9, 1],[6, 7, 5, '']];

function addNumbers() {
    columnsNumber = 0;
    stringNumber = 0;
    gameCellAll.forEach((item) => {
        if (columnsNumber > 3) {
            columnsNumber = 0; 
            stringNumber++;
            item.textContent = cellNumber[stringNumber][columnsNumber];
            columnsNumber++;
            return;
        }
        item.textContent = cellNumber[stringNumber][columnsNumber];
        columnsNumber++;
        if (columnsNumber === 4 && stringNumber === 3) {
            columnsNumber = 0;
            stringNumber = 0;
        }
    });
}

function checkWin() {
    let errorBuild = false;
    for (stringNumber = 0; stringNumber < 4; stringNumber++) {
        for (columnsNumber = 0; columnsNumber < 4; columnsNumber++) {
            if (win[stringNumber][columnsNumber] != cellNumber[stringNumber][columnsNumber]) {
                errorBuild = true
            };
        }
    }
    if (errorBuild == false) {
        stopGame = true;
        gameUserWin.textContent = 'YOU WIN';
    }
}

function goNumber(e) {
    if (stopGame == true) { return }
    if (e.target.classList[0] === 'game__window') { return }
    for (stringNumber = 0; stringNumber < 4; stringNumber++) {
        for (columnsNumber = 0; columnsNumber < 4; columnsNumber++) {
            if (cellNumber[stringNumber][columnsNumber] == e.target.textContent) {
                move(stringNumber, columnsNumber)
                checkWin()
            }
        }
    }
}

function goStirCells() {
    for (let i = 0; i < 1000; i++) {
        stirCells();
    }
}

// ---------------------------------------------- REMAKE ---------

function stirCells() {
    let stringNumberAuto = '';
    let columnsNumberAuto ='';
    for (stringNumberAuto = 0; stringNumberAuto < 4; stringNumberAuto++) {
        for (columnsNumberAuto = 0; columnsNumberAuto < 4; columnsNumberAuto++) {
            move(Math.floor(Math.random() * (stringNumberAuto + 1)), Math.floor(Math.random() * (columnsNumberAuto + 1)))
        }
        checkWin()
        if (stopGame == true) { goStirCells() }
    }
}

// ---------------------------------------------- REMAKE ---------


function move(stringMove, columnsMove) {
    moveTop(stringMove, columnsMove)
    moveRight(stringMove, columnsMove)
    moveBottom(stringMove, columnsMove)
    moveLeft(stringMove, columnsMove)
};

function moveTop(stringMove, columnsMove) {
    if (stringMove > 0) {
        if (cellNumber[stringMove - 1][columnsMove] === '') {
            cellNumber[stringMove - 1][columnsMove] = cellNumber[stringMove][columnsMove];
            cellNumber[stringMove][columnsMove] = '';
            addNumbers();
        }
    }
};

function moveRight(stringMove, columnsMove) {
    if (columnsMove > 0) {
        if (cellNumber[stringMove][columnsMove - 1] === '') {
            cellNumber[stringMove][columnsMove - 1] = cellNumber[stringMove][columnsMove];
            cellNumber[stringMove][columnsMove] = '';
            addNumbers();
        }
    }
};

function moveBottom(stringMove, columnsMove) {
    if (stringMove < 3) {
        if (cellNumber[stringMove + 1][columnsMove] === '') {
            cellNumber[stringMove + 1][columnsMove] = cellNumber[stringMove][columnsMove];
            cellNumber[stringMove][columnsMove] = '';
            addNumbers();
        }
    }
};

function moveLeft(stringMove, columnsMove) {
    if (columnsMove < 3) {
        if (cellNumber[stringMove][columnsMove + 1] === '') {
            cellNumber[stringMove][columnsMove + 1] = cellNumber[stringMove][columnsMove];
            cellNumber[stringMove][columnsMove] = '';
            addNumbers();
        }
    }
};

function newGame() {
    goStirCells()
    gameUserWin.textContent = '';
}

goStirCells()

gameWindow.addEventListener('click', goNumber);
gameResetButton.addEventListener('click', newGame);
