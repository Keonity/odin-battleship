const { Ship } = require('./ship.js');

const newShip = new Ship(2);

test('Test isSunk 0', () => {
    expect(newShip.isSunk()).toBe(false);
})

test('Test hit 0 -> 1', () => {
    newShip.hit();
    expect(newShip.timesHit).toEqual(1);
});

test('Test isSunk 1', () => {
    expect(newShip.isSunk()).toBe(false);
})

test('Test hit 1 -> 2', () => {
    newShip.hit();
    expect(newShip.timesHit).toEqual(2);
});

test('Test isSunk 2', () => {
    expect(newShip.isSunk()).toBe(true);
})