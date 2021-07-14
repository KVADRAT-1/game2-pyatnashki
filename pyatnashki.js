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
        gameUserWin.textContent = 'WIN !!!!';
    }
}

function goNumber(e) {
    if (stopGame == true) { return }
    if (e.target.classList[0] === 'game__window') { return }
    for (stringNumber = 0; stringNumber < 4; stringNumber++) {
        for (columnsNumber = 0; columnsNumber < 4; columnsNumber++) {
            if (cellNumber[stringNumber][columnsNumber] == e.target.textContent) {
                move(stringNumber, columnsNumber, e.target.textContent)
                checkWin()
            }
        }
    }
}

function move(stringClick, columnsClick, text) {
    moveTop(stringClick, columnsClick, text)
    moveRight(stringClick, columnsClick, text)
    moveBottom(stringClick, columnsClick, text)
    moveLeft(stringClick, columnsClick, text)
};

function moveTop(stringClick, columnsClick, text) {
    if (stringClick > 0) {
        if (cellNumber[stringClick - 1][columnsClick] === '') {
            cellNumber[stringClick - 1][columnsClick] = text;
            cellNumber[stringClick][columnsClick] = '';
            addNumbers();
        }
    }
};

function moveRight(stringClick, columnsClick, text) {
    if (columnsClick > 0) {
        if (cellNumber[stringClick][columnsClick - 1] === '') {
            cellNumber[stringClick][columnsClick - 1] = text;
            cellNumber[stringClick][columnsClick] = '';
            addNumbers();
        }
    }
};

function moveBottom(stringClick, columnsClick, text) {
    if (stringClick < 3) {
        if (cellNumber[stringClick + 1][columnsClick] === '') {
            cellNumber[stringClick + 1][columnsClick] = text;
            cellNumber[stringClick][columnsClick] = '';
            addNumbers();
        }
    }
};

function moveLeft(stringClick, columnsClick, text) {
    if (columnsClick < 3) {
        if (cellNumber[stringClick][columnsClick + 1] === '') {
            cellNumber[stringClick][columnsClick + 1] = text;
            cellNumber[stringClick][columnsClick] = '';
            addNumbers();
        }
    }
};

addNumbers()

gameWindow.addEventListener('click', goNumber);
gameResetButton.addEventListener('click', addNumbers);
