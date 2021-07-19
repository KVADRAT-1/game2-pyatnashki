const body = document.querySelector('.body');
const page = body.querySelector('.page');
const header = page.querySelector('.header');
const headerRestartButton = header.querySelector('.header__restart-button');
const headerUserWin = header.querySelector('.header__user-win');
const headerTimer = header.querySelector('.header__timer');
const game = page.querySelector('.game');
const gameCellAll = game.querySelectorAll('.game__cell');

export { body, page, header, headerRestartButton, headerUserWin, headerTimer, game, gameCellAll }