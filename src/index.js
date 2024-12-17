import './styles.css';
const { Player } = require('./player');

const player = new Player();
player.type = "Player";
const cpu = new Player();
cpu.type = "Cpu";

const playerBoard = document.getElementById("playerBoard");
const cpuBoard = document.getElementById("cpuBoard");

const playerSpaces = Array.from(playerBoard.children);
const cpuSpaces = Array.from(cpuBoard.children);

playerSpaces.forEach((child, index) => {
    let currX = Math.floor(index / 9);
    let currY = index % 9;
    child.addEventListener("click", () => {
        if ((player.gameboard.getShip(currX, currY) != null)) {
            player.gameboard.receiveAttack(currX, currY); // Hits twice because ships occupy two spaces each
        }
    })
})

cpuSpaces.forEach((child, index) => {
    let currX = Math.floor(index / 9);
    let currY = index % 9;
    child.addEventListener("click", () => {
        if ((cpu.gameboard.getShip(currX, currY) != null)) {
            cpu.gameboard.receiveAttack(currX, currY); // Hits twice because ships occupy two spaces each
        }
    })
});

let currentTurn = Math.round(Math.random());
    
cpu.gameboard.placeShip(3, 3);
player.gameboard.placeShip(2, 2);

cpuSpaces.forEach((child, index) => {
    child.addEventListener("click", () => {

        let currX = Math.floor(index / 9);
        let currY = index % 9;
        if (cpu.gameboard.getShip(currX, currY) == null || cpu.gameboard.getShip(currX, currY) == 'O') {
            child.setAttribute("class", "missedShot");
        }
        else {
            child.setAttribute("class", "hitShot");
        }

        let coords = player.pickRandom();
        if (player.gameboard.getShip(coords.x, coords.y) == null || player.gameboard.getShip(coords.x, coords.y) == 'O') {
            playerSpaces[((9 * coords.x) + coords.y)].setAttribute("class", "missedShot");
        }
        else {
            playerSpaces[((9 * coords.x) + coords.y)].setAttribute("class", "hitShot");
        }

        if (cpu.gameboard.checkSunkShips() == true) {
            console.log('Player Win');
        }
        
        if (player.gameboard.checkSunkShips() == true) {
            console.log('CPU Win');
        }
    })
})

/* while (true) {
    if (currentTurn == 1) {
        // CPU Turn
        let coords = player.pickRandom();

        
        // player.pickSpace(2, 2);
        // player.pickSpace(2, 3);
        currentTurn = 0;
    }
    else {
        let coords = cpu.pickRandom();
        // Player Turn
        // cpuSpaces[0].click();
        // cpuSpaces[1].click();
        
        currentTurn = 1;
    }

    if (cpu.gameboard.checkSunkShips() == true || player.gameboard.checkSunkShips() == true) {
        break;
    }
} */

/* if (cpu.gameboard.checkSunkShips() == true) {
    console.log('Player Win');
}
else if (player.gameboard.checkSunkShips() == true) {
    console.log('CPU Win');
} */

// cpu.gameboard.resetBoard();
// player.gameboard.resetBoard();

    // CPU.pickSpace(3, 3);
    // CPU.pickSpace(3, 4);