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

function moveDigit(e) {
    if (stopGame == true) { return }
    if (e.target.classList[0] === 'game__window') { return }
    for (stringNumber = 0; stringNumber < 4; stringNumber++) {
        for (columnsNumber = 0; columnsNumber < 4; columnsNumber++) {
            if (cellNumber[stringNumber][columnsNumber] == e.target.textContent) {
                move(stringNumber, columnsNumber)
                addNumbers();
                checkWin()
            }
        }
    }
}

function move(stringMove, columnsMove) {
    if (stringMove > 0) {
        if (cellNumber[stringMove - 1][columnsMove] === '') {
            cellNumber[stringMove - 1][columnsMove] = cellNumber[stringMove][columnsMove];
            cellNumber[stringMove][columnsMove] = '';
        }
    };
    if (columnsMove > 0) {
        if (cellNumber[stringMove][columnsMove - 1] === '') {
            cellNumber[stringMove][columnsMove - 1] = cellNumber[stringMove][columnsMove];
            cellNumber[stringMove][columnsMove] = '';
        }
    };
    if (stringMove < 3) {
        if (cellNumber[stringMove + 1][columnsMove] === '') {
            cellNumber[stringMove + 1][columnsMove] = cellNumber[stringMove][columnsMove];
            cellNumber[stringMove][columnsMove] = '';
        }
    };
    if (columnsMove < 3) {
        if (cellNumber[stringMove][columnsMove + 1] === '') {
            cellNumber[stringMove][columnsMove + 1] = cellNumber[stringMove][columnsMove];
            cellNumber[stringMove][columnsMove] = '';
        }
    };
};

function newGame() {
    gameUserWin.textContent = '';
    stopGame = false;
    for (let i = 0; i < 250; i++) {
        findEmptyCell();
    }
    addNumbers();
}

function findEmptyCell() {
    for (stringNumber = 0; stringNumber < 4; stringNumber++) {
        for (columnsNumber = 0; columnsNumber < 4; columnsNumber++) {
            if (cellNumber[stringNumber][columnsNumber] == '') {
                    autoMove(stringNumber, columnsNumber);
                return;
            }
        }
    }
}

function autoMove(stringMove, columnsMove) {
    let randomNumber = Math.floor((Math.random() * 4));
    if (stringMove > 0 && randomNumber == 0) {
        cellNumber[stringMove][columnsMove] = cellNumber[stringMove - 1][columnsMove];
        cellNumber[stringMove - 1][columnsMove] = '';
    }
    if (columnsMove > 0 && randomNumber == 1) {
        cellNumber[stringMove][columnsMove] = cellNumber[stringMove][columnsMove - 1];
        cellNumber[stringMove][columnsMove - 1] = '';
    }
    if (stringMove < 3 && randomNumber == 2) {
        cellNumber[stringMove][columnsMove] = cellNumber[stringMove + 1][columnsMove];
        cellNumber[stringMove + 1][columnsMove] = '';
    }
    if (columnsMove < 3 && randomNumber == 3) {
        cellNumber[stringMove][columnsMove] = cellNumber[stringMove][columnsMove + 1];
        cellNumber[stringMove][columnsMove + 1] = '';
    }
}

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

newGame()

gameWindow.addEventListener('click', moveDigit);
gameResetButton.addEventListener('click', newGame);
