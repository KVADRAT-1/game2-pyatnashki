const body = document.querySelector('.body');
const game = body.querySelector('.game');
const gameUserWin = game.querySelector('.game__user-win');
const gameWindow = game.querySelector('.game__window');
const gameCellAll = game.querySelectorAll('.game__cell');
const gameResetButton = game.querySelector('.game__reset-button');
let columnsNumber = 0;
let stringNumber = 0;

let win = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15, '']];

let cellNumber = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15, '']];

function addNumbers() {
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

function goNumber(e) {
    if (e.target.classList[0] === 'game__window') { return }
    for (stringNumber = 0; stringNumber < 4; stringNumber++) {
        for (columnsNumber = 0; columnsNumber < 4; columnsNumber++) {
            if (cellNumber[stringNumber][columnsNumber] == e.target.textContent) {
                console.log(`string: ${stringNumber}`)
                console.log(`column: ${columnsNumber}`)
            }
        }
    }
}

addNumbers()

gameWindow.addEventListener('click', goNumber);
gameResetButton.addEventListener('click', addNumbers);
