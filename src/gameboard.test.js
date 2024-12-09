const { Gameboard } = require('./gameboard.js');

const newBoard = new Gameboard(5, 6);

test('Length 5', () => {
    expect(newBoard.length).toBe(5);
});

test('Width 6', () => {
    expect(newBoard.width).toBe(6);
});

test('Place Ship (3, 3) & Get Ship (3, 3)', () => {
    newBoard.placeShip(3, 3);
    expect(newBoard.getShip(3, 3)).toBe(newBoard.board[3, 4]);
})