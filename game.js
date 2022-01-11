initGame();

let frog = document.querySelector('.frog');
let move = 60;

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
    switch (e.key) {
        case 'ArrowLeft':
            frog.style.left = parseInt(frog.style.left) - move + 'px';
            break;
        case 'ArrowRight':
            frog.style.left = parseInt(frog.style.left) + move + 'px';
            break;
        case 'ArrowUp':
            frog.style.top = parseInt(frog.style.top) - move + 'px';
            break;
        case 'ArrowDown':
            frog.style.top = parseInt(frog.style.top) + move + 'px';
            break;
    }
});
