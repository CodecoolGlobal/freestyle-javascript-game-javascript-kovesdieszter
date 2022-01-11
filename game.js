initGame();

function initGame() {
    let cars = document.getElementsByClassName('cars');
    for (let i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    };
    // Your game can start here, but define separate functions, don't write everything in here :
}


//const getPosAll = (element) => {
  //  const {x, y, top, right, bottom, left, width, height} = element.getBoundingClientRect();
  //  return {x, y, top, right, bottom, left, width, height} }



async function carMove() {

    let carsLeft = document.getElementsByClassName("car-left")
    for (let i = 0; i < carsLeft.length; i++) {
        let car = carsLeft.item(i)
        while (true) {
            let elstyle = window.getComputedStyle(car)
            let carLeft = elstyle.getPropertyValue("left").replace('px', '')
            car.style.left = `${parseInt(carLeft, 10) + 1}px`
            console.log(carLeft)
            await new Promise((r) => setTimeout(() => r(), 10));
            if (car.style.left === "900px") {
                car.style.left = "10px"
            }
        }
    }
}

carMove();

