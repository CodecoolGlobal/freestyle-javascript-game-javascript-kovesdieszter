function carMovement() {
    const INDEX = 0
    const field = document.getElementsByClassName('container')[INDEX]
    let firstCarLeft = document.getElementsByClassName("car-left1")[INDEX]
    let secondCarLeft = document.getElementsByClassName("car-left2")[INDEX]
    let carRight = document.getElementsByClassName("car-right")[INDEX]

    async function movingObj(car, direction) {
        const fieldParams = field.getBoundingClientRect()
        while (true) {
            let carParams = car.getBoundingClientRect()
            let elemStyle = window.getComputedStyle(car)
            let carLeftSide = elemStyle.getPropertyValue("left").replace('px', '')
            car.style.left = `${parseInt(carLeftSide, 10) + direction}px`
            await new Promise((r) => setTimeout(() => r(), 10));
            if (direction === 1) {
                if (car.style.left === `${fieldParams.right - 1.5 * carParams.height}px`) {
                car.style.left = "10px"}
            } else {
                if (car.style.left === `${fieldParams.left}px`) {
                car.style.left = "850px"}
            }
        }
    }
    movingObj(firstCarLeft, 1);
    movingObj(secondCarLeft, 1);
    movingObj(carRight, -1);
}
carMovement()