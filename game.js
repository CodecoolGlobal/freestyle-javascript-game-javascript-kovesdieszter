let frog = document.querySelector('.frog');
let move = 60;
let container = document.querySelector('.container');
let borders = container.getBoundingClientRect();
let containerTop = borders.top;
containerTop = 10;
let gameBorderLeft = '-480px';
let frogLimitLeft = '-420px';
let gameBoardRight = '480px';
let frogLimitRight = '420px';
let gameBorderTop = '-420px';
let frogLimitTop = '-360px';
let gameBorderBottom = '60px';
let frogLimitBottom = '0px';
let score = 0;
let lives = 3;
const INDEX = 0
const field = document.getElementsByClassName('container')[INDEX]
let firstCarLeft = document.getElementsByClassName("car-left1")[INDEX]
let secondCarLeft = document.getElementsByClassName("car-left2")[INDEX]
let carRight = document.getElementsByClassName("car-right")[INDEX]

initGame();
function carMovement() {

    async function movingObj(car, direction) {
        const fieldParams = field.getBoundingClientRect()
        while (true) {
            let carParams = car.getBoundingClientRect()
            let elemStyle = window.getComputedStyle(car)
            let carLeftSide = elemStyle.getPropertyValue("left").replace('px', '')
            car.style.left = `${parseInt(carLeftSide, 10) + direction}px`
            await new Promise((r) => setTimeout(() => r(), 10));
            if (direction === 1) {
                if (car.style.left === `${fieldParams.right - 2 * carParams.height}px`) {
                    car.style.left = "10px"
                }
            } else {
                if (car.style.left === `${fieldParams.left}px`) {
                    car.style.left = "800px"
                }
            }
        }
    }

    movingObj(firstCarLeft, 1);
    movingObj(secondCarLeft, 1);
    movingObj(carRight, -1);
}
carMovement();

function initGame() {
    let cars = document.getElementsByClassName('cars');
    let livesDiv = document.getElementById('lives');
    livesDiv.innerText = 'Your lives: '+lives.toString();
    // Your game can start here, but define separate functions, don't write everything in here :)
}

window.addEventListener('load', () => {
    frog.style.position = 'relative';
    frog.style.left = 0;
    frog.style.top = 0;
});


window.addEventListener('keyup', (e) => {
    // add functionality for arrow buttons
    checkIfWin();
    switch (e.key) {
        case 'ArrowLeft':
            frog.style.left = parseInt(frog.style.left) - move + 'px';
            console.log('Béka left / right:', parseInt(frog.style.left))
            break;
        case 'ArrowRight':
            frog.style.left = parseInt(frog.style.left) + move + 'px';
            console.log('Béka left / right:', parseInt(frog.style.left))
            break;
        case 'ArrowUp':
            frog.style.top = parseInt(frog.style.top) - move + 'px';
            console.log('Béka bottom:', parseInt(frog.style.top))
            break;
        case 'ArrowDown':
            frog.style.top = parseInt(frog.style.top) + move + 'px';
            console.log('Béka bottom:', parseInt(frog.style.top))
            break;
}

    // limit frog's moves between board
    if (frog.style.left === gameBorderLeft) {
        frog.style.left = frogLimitLeft;
    } else if (frog.style.left === gameBoardRight){
        frog.style.left = frogLimitRight;
    } else if (frog.style.top === gameBorderTop){
        frog.style.top = frogLimitTop;
    } else if (frog.style.top === gameBorderBottom){
        frog.style.top = frogLimitBottom;
    }
});

function checkIfWin() {
    if (frog.style.top === '-360px') {
        alert('win');
        score += 1;
        let winDiv = document.getElementById('win');
        winDiv.innerText = 'You won!';
        let scoreDiv = document.getElementById('score');
        scoreDiv.innerText = 'Your score is: ' + score;
    }
}






// branch try