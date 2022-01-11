initGame();

function initGame() {
    let cars = document.getElementsByClassName('cars');
    for (let i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    };
    // Your game can start here, but define separate functions, don't write everything in here :
}

function carMovement() {
    const INDEX = 0
    const field = document.getElementsByClassName('container')[INDEX]
    console.log(field)
    let firstCarLeft = document.getElementsByClassName("car-left1")[INDEX]
    let secondCarLeft = document.getElementsByClassName("car-left2")[INDEX]

    async function leftCarMove(car) {
        const fieldParams = field.getBoundingClientRect()
        while (true) {
            let carParams = car.getBoundingClientRect()
            let elstyle = window.getComputedStyle(car)
            let carLeftSide = elstyle.getPropertyValue("left").replace('px', '')
            car.style.left = `${parseInt(carLeftSide, 10) + 1}px`
            await new Promise((r) => setTimeout(() => r(), 10));
            if (car.style.left === `${fieldParams.right - 1.5 * carParams.height}px`) {
                car.style.left = "10px"
            }
        }
    }
    leftCarMove(firstCarLeft);
    leftCarMove(secondCarLeft);
}

carMovement();