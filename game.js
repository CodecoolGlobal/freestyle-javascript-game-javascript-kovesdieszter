initGame();

let circle = document.querySelector('.circle');
let move = 60;

function initGame() {
    let cars = document.getElementsByClassName('cars');

    for (let i = 0; i < cars.length; i++) {
        cars[i].style.backgroundColor = "red";
    }
    // Your game can start here, but define separate functions, don't write everything in here :)

}

window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
});
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - move + 'px';
            break;
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + move + 'px';
            break;
        case 'ArrowUp':
            circle.style.top = parseInt(circle.style.top) - move + 'px';
            break;
        case 'ArrowDown':
            circle.style.top = parseInt(circle.style.top) + move + 'px';
            break;
    }
});

// branch try
