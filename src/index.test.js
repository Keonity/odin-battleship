/**
 * @jest-environment jsdom
 */


const { Player } = require('./player');
const CPU = new Player();
CPU.type = "CPU";

const player = new Player();
player.type = "Player";

test('Click player 1 space 0', () => {
    document.body.innerHTML = `
    <div class="appContainer" id="appContainer">
        <h1 class="title" id="title">Odin's Battleships</h1>
        <div class="gameInterface" id="gameInterface">
            <div class="playerContainer" id="playerContainer">
                <h2 class="playerTitle" id="playerName">Player</h2>
                <h3 class="playerScore" id="playerScore">Score: 0</h3>
                <div class="gameboard" id="playerBoard">
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                </div>
            </div>
            <div class="cpuContainer" id="cpuContainer">
                <h2 class="playerTitle" id="cpuTitle">CPU</h2>
                <h3 class="playerScore" id="cpuScore">Score: 0</h3>
                <div class="gameboard" id="cpuBoard">
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <div class="space"></div>
                </div>
            </div>
        </div>
    </div>`;
    const playerBoard = document.getElementById("playerBoard");
    const cpuBoard = document.getElementById("cpuBoard");

    const playerSpaces = Array.from(playerBoard.children);
    const cpuSpaces = Array.from(cpuBoard.children);

    player.gameboard.placeShip(0, 3);
    player.gameboard.placeShip(8, 8);

    CPU.gameboard.placeShip(1, 3);

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
            if ((CPU.gameboard.getShip(currX, currY) != null)) {
                CPU.gameboard.receiveAttack(currX, currY); // Hits twice because ships occupy two spaces each
            }
        })
    });

    playerSpaces[3].click()
    // expect(msg).toEqual(`Clicked player [object HTMLDivElement] #0`);

    cpuSpaces[12].click()
    // expect(msg).toEqual(`Clicked cpu [object HTMLDivElement] #1`);

    expect(player.gameboard.getShip(0, 3).timesHit).toEqual(1);

    expect(CPU.gameboard.getShip(1, 3).timesHit).toEqual(1);
})