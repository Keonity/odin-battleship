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

function placeCpuShips() {

    let x = Math.floor(Math.random() * 9);
    let y = Math.floor(Math.random() * 9);
    let x2 = Math.floor(Math.random() * 9);
    let y2 = Math.floor(Math.random() * 6);
    let x3 = Math.floor(Math.random() * 9);
    let y3 = Math.floor(Math.random() * 4);

    while ((y >= y2 && y <= y2 + 3) || (y >= y3 && y <= y3 + 5)) {
        y = Math.floor(Math.random() * 9);
    }

    while ((y2 >= y3 && y2 <= y3 + 5)) {
        y2 = Math.floor(Math.random() * 6);
    }

    cpu.gameboard.placeShip(x, y, 1);
    cpu.gameboard.placeShip(x2, y2, 3);
    cpu.gameboard.placeShip(x3, y3, 5);
}

function placePlayerShips() {
    if (!player.gameboard.checkSunkShips()) {
        return;
    }

    alert('The following prompts assume the positive X-axis to be from top to bottom and positive Y-axis to be from left to right.')

    let x = parseInt(prompt('Please enter the x coordinate for your small ship.'));

    while (x > 9) {
        x = parseInt(prompt(`X coordinate for small ship (${x}) too high, please lower it.`));
    }

    while (x < 0) {
        x = parseInt(prompt(`X coordinate for small ship (${x}) too low, please increase it.`));
    }

    let y = parseInt(prompt('Please enter the y coordinate for your small ship.'));

    while (y > 9) {
        y = parseInt(prompt(`Y coordinate for small ship (${y}) too high, please lower it.`));
    }

    while (y < 0) {
        y = parseInt(prompt(`Y coordinate for small ship (${y}) too low, please increase it.`));
    }

    let x2 = parseInt(prompt('Please enter the x coordinate for your medium ship.'));

    while (x2 > 9) {
        x2 = parseInt(prompt(`X coordinate for medium ship (${x2}) too high, please lower it.`));
    }

    while (x2 < 0) {
        x2 = parseInt(prompt(`X coordinate for medium ship (${x2}) too low, please increase it.`));
    }

    let y2 = parseInt(prompt('Please enter the y coordinate for your medium ship.'));


    while (y2 > 6) {
        y2 = parseInt(prompt(`Y coordinate for medium ship (${y2}) too high, please lower it.`));
    }

    while (y2 < 0) {
        y2 = parseInt(prompt(`Y coordinate for medium ship (${y2}) too low, please increase it.`));
    }

    let x3 = parseInt(prompt('Please enter the x coordinate for your large ship.'));

    while (x3 > 9) {
        x3 = parseInt(prompt(`X coordinate for large ship (${x3}) too high, please lower it.`));
    }

    while (x3 < 0) {
        x3 = parseInt(prompt(`X coordinate for large ship (${x3}) too low, please increase it.`));
    }

    let y3 = parseInt(prompt('Please enter the y coordinate for your large ship.'));

    while (y3 > 4) {
        y3 = parseInt(prompt(`Y coordinate for large ship (${y3}) too high, please lower it.`));
    }

    while (y3 < 0) {
        y3 = parseInt(prompt(`Y coordinate for large ship (${y3}) too low, please increase it.`));
    }

    player.gameboard.placeShip(x, y, 1);
    player.gameboard.placeShip(x2, y2, 3);
    player.gameboard.placeShip(x3, y3, 5);

    playerSpaces[9 * x + y].setAttribute("class", "occupiedSpace");
    playerSpaces[9 * x2 + y2].setAttribute("class", "occupiedSpace");
    playerSpaces[9 * x2 + y2 + 1].setAttribute("class", "occupiedSpace");
    playerSpaces[9 * x2 + y2 + 2].setAttribute("class", "occupiedSpace");
    playerSpaces[9 * x3 + y3].setAttribute("class", "occupiedSpace");
    playerSpaces[9 * x3 + y3 + 1].setAttribute("class", "occupiedSpace");
    playerSpaces[9 * x3 + y3 + 2].setAttribute("class", "occupiedSpace");
    playerSpaces[9 * x3 + y3 + 3].setAttribute("class", "occupiedSpace");
    playerSpaces[9 * x3 + y3 + 4].setAttribute("class", "occupiedSpace");
}

function handleClick(index) {
    let currX = Math.floor(index / 9);
    let currY = index % 9;
    if (this.disabled) {
        return;
    }

    if ((cpu.gameboard.getShip(currX, currY) != null)) {
        cpu.gameboard.receiveAttack(currX, currY); // Hits twice because ships occupy two spaces each
    }

    if (cpu.gameboard.getShip(currX, currY) == null || cpu.gameboard.getShip(currX, currY) == 'O') {
        this.setAttribute("class", "missedShot");
        this.disabled = true;
    }
    else {
        this.setAttribute("class", "hitShot");
        this.disabled = true;
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
        const winBanner = document.createElement("h2");
        winBanner.innerHTML = "Player Win!";
        winBanner.setAttribute("class", "result");
        document.querySelector(".appContainer").insertBefore(winBanner, document.querySelector(".gameInterface"));
        setTimeout(function() {
            alert("Player win!");
            winBanner.remove();
        }, 1);
        cpu.gameboard.resetBoard();
        player.gameboard.resetBoard();
        placeCpuShips();
        setTimeout(function() {
            placePlayerShips()}, 2);
        cpuSpaces.forEach((child, index) => {
            child.disabled = false;
            // child.addEventListener("click", handleClick.bind(child, index))
        });
    }
    else if (player.gameboard.checkSunkShips() == true) {
        cpu.score++;
        document.querySelector("#cpuScore").innerHTML = `Score: ${cpu.score}`;
        const winBanner = document.createElement("h2");
        winBanner.innerHTML = "CPU Win!";
        winBanner.setAttribute("class", "result");
        document.querySelector(".appContainer").insertBefore(winBanner, document.querySelector(".gameInterface"));
        setTimeout(function() {
            alert("CPU win!");
            winBanner.remove();
        }, 1);
        cpu.gameboard.resetBoard();
        player.gameboard.resetBoard();
        placeCpuShips();
        setTimeout(function() {
            placePlayerShips()}, 2);
        cpuSpaces.forEach((child, index) => {
            child.disabled = false;
            // child.addEventListener("click", handleClick.bind(child, index))
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    placeCpuShips();
    setTimeout(placePlayerShips(), 2);
    
    cpuSpaces.forEach((child, index) => {
        child.addEventListener("click", handleClick.bind(child, index)
        );
    });
})