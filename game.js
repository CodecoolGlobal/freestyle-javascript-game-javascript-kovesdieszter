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
let timeout = [15, 10, 5, 4, 3, 2, 1]
let speed = 0
let music = new Audio("static/Crash.wav");
let bcMusic = new Audio("static/Frogger Theme.mp3");

initGame();

function carMovement() {


    async function movingObj(car, direction) {
        const fieldParams = field.getBoundingClientRect()
        let crashed = false
        while (lives > 0) {
            let carParams = car.getBoundingClientRect()
            let elemStyle = window.getComputedStyle(car)
            let carLeftSide = elemStyle.getPropertyValue("left").replace('px', '')
            car.style.left = `${parseInt(carLeftSide, 10) + direction}px`
            crashed = crash(car)

            if (crashed) {
                music.play();
                frog.style.left = 0;
                frog.style.top = 0;
                lives -= 1
                if (checkIfLost()){
                    gameOver()
                }
            }
            await new Promise((r) => setTimeout(() => r(), timeout[speed]));
            if (direction === 1) {
                if (Math.floor(carParams.right) === Math.floor(fieldParams.right)) {
                    car.style.left = "10px"
                }
            } else {
                if (Math.floor(carParams.left) === Math.floor(fieldParams.left)) {
                    car.style.left = "800px"
                }
            }
        }
    }
    movingObj(firstCarLeft, 1);
    movingObj(secondCarLeft, 1);
    movingObj(carRight, -1);
}



function initGame() {
    window.addEventListener('click', () => {
    bcMusic.play();
    frog.style.position = 'relative';
    frog.style.left = 0;
    frog.style.top = 0;
    removeButton()
    carMovement()
    // Your game can start here, but define separate functions, don't write everything in here :)
        });
}




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
    } else if (frog.style.left === gameBoardRight) {
        frog.style.left = frogLimitRight;
    } else if (frog.style.top === gameBorderTop) {
        frog.style.top = frogLimitTop;
    } else if (frog.style.top === gameBorderBottom) {
        frog.style.top = frogLimitBottom;
    }
});

function checkIfWin() {
    if (frog.style.top === '-360px') {
        score += 1;
        let winDiv = document.getElementById('win');
        winDiv.style.display = "block";
        let scoreDiv = document.getElementById('score');
        scoreDiv.innerText = `Score: ${score}`;
        setTimeout(function(){
            winDiv.style.display = "none"
        }, 1500)
        frog.style.top = '60px';
        if (speed < 6) {
            speed++
        }
    }
}

function crash(car) {
    console.log(lives)
    let carParams = car.getBoundingClientRect()
    let frogImg = document.getElementsByClassName("frog-img")[0]
    let frogParams = frogImg.getBoundingClientRect()
    let carL = Math.floor(carParams.left) //parseInt(car.style.left.replace('px', ''))
    let carT = Math.floor(carParams.top) //parseInt(car.style.top.replace('px', ''))
    let carH = Math.floor(carParams.height) //parseInt(car.style.height.replace('px', ''))
    let carW = Math.floor(carParams.width) //parseInt(car.style.width.replace('px', ''))
    let frogL = Math.floor(frogParams.left) //parseInt(frog.style.left.replace('px', ''))
    let frogT = Math.floor(frogParams.top) //parseInt(frog.style.top.replace('px', ''))
    let frogH = Math.floor(frogParams.height) //parseInt(frog.style.height.replace('px', ''))
    let frogW = Math.floor(frogParams.width) //parseInt(frog.style.width.replace('px', ''))
    let liveOne = document.getElementById("lives1");
    let liveTwo = document.getElementById("lives2");
    let liveThree = document.getElementById("lives3");


    if (carL < frogL + frogW &&
        carL + carW > frogL &&
        carT < frogT + frogH &&
        carH + carT > frogT &&
        lives === 1) {
        liveOne.style.visibility = "hidden";
        return true
    }

    else if (lives === 2 &&
        carL < frogL + frogW &&
        carL + carW > frogL &&
        carT < frogT + frogH &&
        carH + carT > frogT) {
        liveTwo.style.visibility ="hidden";
        return true
    }

    else if (carL < frogL + frogW &&
        carL + carW > frogL &&
        carT < frogT + frogH &&
        carH + carT > frogT) {
        liveThree.style.visibility ="hidden";
        return true
    }



    else {
        return false
    }
}

let body = document.getElementsByTagName("body")[INDEX]
let livesScript = document.getElementsByClassName("lives")[INDEX]
let buttonsimg = document.getElementsByClassName("buttonsImage")[INDEX]
let intro = document.getElementsByClassName("intro")[INDEX]

function gameOver() {
    container.style.display = "none"
    body.innerHTML = "<div class='gameover'><div><div><img src='static/logo.png' width='700px'></div></div><div><div><img src='static/cryingfrog.gif'></div></div><div><div><img src='static/gameover.png' width='700px'></div></div> \
    <div><button class=button onclick=restart(); style='vertical-align:middle'> <span> Restart </span></button></div>"
    livesScript.style.display = "none"
    buttonsimg.style.display = "none"
    body.style.backgroundColor = "white"
    intro.style.display= "none"
}

function checkIfLost() {
    if (lives === 0) {
        return true
    }
    else {
        return false
    }
}

function removeButton() {
    const button = document.getElementsByTagName("button")[INDEX]
    button.style.visibility = "hidden"
}
// branch try


function restart() {
    location.reload()
}