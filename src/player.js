const { Gameboard } = require('./gameboard');

class Player {
    constructor() {
        this.gameboard = new Gameboard(9, 9);
        this.type;
        this.score = 0;
    }

    pickRandom() {
        let x = Math.floor(Math.random() * 9);
        let y = Math.floor(Math.random() * 9);
        while (this.gameboard.getShip(x, y) == 'O' || this.gameboard.getShip(x, y) == 'X') {
            x = Math.floor(Math.random() * 9);
            y = Math.floor(Math.random() * 9);
        }
        
        this.gameboard.receiveAttack(x, y);
        return { x, y };
    }

    pickSpace(x, y) {
        this.gameboard.receiveAttack(x, y);
    }
}

module.exports = { Player }