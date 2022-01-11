initGame();

let frog = document.querySelector('.frog');
let move = 60;
let container = document.querySelector('.container');
let borders = container.getBoundingClientRect();
let containerTop = borders.top;
containerTop = 10;
// console.log(borders.top , borders.right, borders.bottom, borders.left);
// console.log(containerTop);


function initGame() {
    let cars = document.getElementsByClassName('cars');

    // for (let i = 0; i < cars.length; i++) {
    //     cars[i].style.backgroundColor = "red";
    // }
    // Your game can start here, but define separate functions, don't write everything in here :)

}

window.addEventListener('load', () => {
    frog.style.position = 'relative';
    frog.style.left = 0;
    frog.style.top = 0;
});


window.addEventListener('keyup', (e) => {
    // add functionality for arrow buttons
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
    if (frog.style.left === '-480px') {
        frog.style.left = '-420px';
    } else if (frog.style.left === '480px'){
        frog.style.left = '420px';
    } else if (frog.style.top === '-420px'){
        frog.style.top = '-360px';
    } else if (frog.style.top === '60px'){
        frog.style.top = '0px';
    }
});


// branch try
