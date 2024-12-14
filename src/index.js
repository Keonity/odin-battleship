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
    child.addEventListener("click", () => {
        console.log(`Clicked player ${child} #${index}`);
    })
})

cpuSpaces.forEach((child, index) => {
    child.addEventListener("click", () => {
        console.log(`Clicked cpu ${child} #${index}`);
    })
})