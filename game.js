
let frog = document.querySelector('.frog');
let move = 60;
let container = document.querySelector('.container');
let borders = container.getBoundingClientRect();
let containerTop = borders.top;
containerTop = 10;
let gameBorderLeft = '-480px';
let frogLimitLeft = '-420px';
let score = 0;
let lives = 3;

initGame();

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
    } else if (frog.style.left === '480px'){
        frog.style.left = '420px';
    } else if (frog.style.top === '-420px'){
        frog.style.top = '-360px';
    } else if (frog.style.top === '60px'){
        frog.style.top = '0px';
    }
});

function checkIfWin() {
    if (frog.style.top === '-300px'){
        alert('win');
    score += 1;
    let winDiv = document.getElementById('win');
    winDiv.innerText = 'You won!';
    let scoreDiv = document.getElementById('score');
    scoreDiv.innerText = 'Your score is: '+score;
    frog.style.top = '60px';
    };
}


