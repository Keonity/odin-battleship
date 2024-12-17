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

cpu.gameboard.placeShip(3, 3);
player.gameboard.placeShip(2, 2);

cpuSpaces.forEach((child, index) => {
    let currX = Math.floor(index / 9);
    let currY = index % 9;
    child.addEventListener("click", () => {
        if ((cpu.gameboard.getShip(currX, currY) != null)) {
            cpu.gameboard.receiveAttack(currX, currY); // Hits twice because ships occupy two spaces each
        }

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
            player.score++;
            document.querySelector("#playerScore").innerHTML = `Score: ${player.score}`;
            alert("Player win!");
            cpu.gameboard.resetBoard();
            player.gameboard.resetBoard();
        }
        else if (player.gameboard.checkSunkShips() == true) {
            cpu.score++;
            document.querySelector("#cpuScore").innerHTML = `Score: ${cpu.score}`;
            alert("CPU win!");
            cpu.gameboard.resetBoard();
            player.gameboard.resetBoard();
        }
    })
});