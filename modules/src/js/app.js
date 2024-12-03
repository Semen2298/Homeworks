import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

const game = new Game();
game.start();

const saving = new GameSavingData({ id: 1, created: Date.now() });
console.log('Game saving data:', saving);

loadGame();
saveGame();
