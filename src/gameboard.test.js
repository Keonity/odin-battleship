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
    expect(newBoard.getShip(3, 3)).toBe(newBoard.board[3][4]);
})

test('Receive attack (3, 3)', () => {
    newBoard.receiveAttack(3, 3);
    expect(newBoard.getShip(3, 3).timesHit).toEqual(1);
})

test('Is sunk 1 hit', () => {
    expect(newBoard.getShip(3, 3).isSunk()).toEqual(false);
})

test('Check sunk 1 ship (1st pass)', () => {
    expect(newBoard.checkSunkShips()).toEqual(false);
})

test('Receive attack (3, 3)', () => {
    newBoard.receiveAttack(3, 4);
    expect(newBoard.getShip(3, 3).timesHit).toEqual(2);
})

test('Is sunk 2 hits', () => {
    expect(newBoard.getShip(3, 3).isSunk()).toEqual(true);
})

test('Check sunk 1 ship (2nd pass - True)', () => {
    expect(newBoard.checkSunkShips()).toEqual(true);
})

test('Place ship (4, 4)', () => {
    newBoard.placeShip(4, 4);
    expect(newBoard.getShip(4, 4)).toEqual(newBoard.getShip(4, 5));
})

test('Check sunk 2 ships (1st pass - False)', () => {
    expect(newBoard.checkSunkShips()).toEqual(false);
})

test('2nd ship is sunk 1 hit', () => {
    newBoard.receiveAttack(4, 4);
    expect(newBoard.getShip(4, 4).isSunk()).toEqual(false);
})

test('Check sunk 2nd ship (2nd pass - False)', () => {
    expect(newBoard.checkSunkShips()).toEqual(false);
})

test('Receive attack (4, 5)', () => {
    newBoard.receiveAttack(4, 5);
    expect(newBoard.getShip(4, 5).timesHit).toEqual(2);
})

test('2nd ship is sunk 2 hits', () => {
    expect(newBoard.getShip(4, 4).isSunk()).toEqual(true);
})

test('Check sunk 2nd ship (3rd pass - True)', () => {
    expect(newBoard.checkSunkShips()).toEqual(true);
})