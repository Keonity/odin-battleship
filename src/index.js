import './styles.css';

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