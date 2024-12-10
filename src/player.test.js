const { Player } = require('./player');
// const { Gameboard } = require('./gameboard');

const p1 = new Player();
const p2 = new Player();

test('Player 1 Gameboard Length', () => {
    expect(p1.gameboard.length).toEqual(9);
})

test('Player 2 Gameboard Width', () => {
    expect(p2.gameboard.width).toEqual(9);
})


test('Player 1 (0 ,0) -> Null', () => {
    expect(p1.gameboard.getShip(0, 0)).toBe(null);
})

test('Player 1 Gameboard Hit (0 ,0) -> Set to O', () => {
    p1.gameboard.receiveAttack(0, 0);
    expect(p1.gameboard.getShip(0, 0)).toEqual('O');
})

test('Player 1 Place + Attack Ship (0 ,0)', () => {
    p1.gameboard.placeShip(0, 0);
    p1.gameboard.receiveAttack(0, 1);
    expect(p1.gameboard.getShip(0, 0).timesHit).toEqual(1);
})