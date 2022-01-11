initGame();

function initGame() {
    let cars = document.getElementsByClassName('cars');
    console.log(cars[2]);
    for (let i = 0; i < cars.length; i++) {
        cars[i].setAttribute('style', 'background-color: red;');
    }
    // Your game can start here, but define separate functions, don't write everything in here :)

}
