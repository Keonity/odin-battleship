const { Ship } = require('./ship');

class Gameboard {
    constructor(length, width) {
        this.length = length;
        this.width = width;
        this.board = new Array(length);
        for (let i = 0; i < length; i++) {
            this.board[i] = new Array(width);
        }
    }

    placeShip(x, y, shipSize) {
        const newShip = new Ship(shipSize);

        while ((y + shipSize) > this.length) {
            y = parseInt(prompt(`Ship too long to be placed at (${x}, ${y}), please enter a new Y coordinate.`));
        }

        if (shipSize > 1) {
            for (let i = y; i < (y + shipSize); i++) {
                while (this.getShip(x, i) !== null && this.getShip(x, i) !== 'O') {
                    y = parseInt(prompt(`Ship placement (${x}, ${y}) conflicts with another ship, please enter a new Y coordinate.`));
                    i = y;
                }
            }
    
            for (let i = y; i < (y + shipSize); i++) {
                this.board[x][i] = newShip;
            }
        }

        else {
            while (this.getShip(x, y) !== null && this.getShip(x, y) !== 'O') {
                y = parseInt(prompt(`Ship placement (${x}, ${y}) conflicts with another ship, please enter a new Y coordinate.`));
            }
            this.board[x][y] = newShip;
        }
    }

    getShip(x, y) {
        if (this.board[x][y] == null) {
            return null;
        }
        else if (this.board[x][y] == 'O') {
            return 'O';
        }
        else {
            return this.board[x][y];
        }
    }

    receiveAttack(x, y) {
        if (this.board[x][y] == null || this.board[x][y] == 'O') {
            this.board[x][y] = 'O';
            return null;
        }
        else {
            this.board[x][y].hit();
            this.board[x][y] = 'X';
        }
    }

    checkSunkShips() {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.width; j++) {
                if (this.board[i][j] == null || this.board[i][j] == 'O' || this.board[i][j] == 'X') {
                    continue;
                }
                else {
                    if (!this.getShip(i, j).isSunk()) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    resetBoard() {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.width; j++) {
                this.board[i][j] = null;
            }
        }

        const playerBoard = document.getElementById("playerBoard");
        const cpuBoard = document.getElementById("cpuBoard");

        const playerSpaces = Array.from(playerBoard.children);
        const cpuSpaces = Array.from(cpuBoard.children);

        playerSpaces.forEach((e) => {
            e.setAttribute("class", "space");
        })

        cpuSpaces.forEach((e) => {
            e.setAttribute("class", "space");
        })
    }
};

module.exports = { Gameboard }