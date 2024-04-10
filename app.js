const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = 0;

const randomSquare = () => {
    squares.forEach(square => {
        square.classList.remove("mole");
    });
    
    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");
    hitPosition = randomPosition.id;
};

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});

const moveMole = () => {
    timerId = setInterval(randomSquare, 750);
};

moveMole();

const countDown = () => {
    currentTime--;
    timeLeft.textContent = currentTime;
    
    if (currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert("--- GAME OVER --- Your final score is: " + result);
    }
};

let countDownTimerId = setInterval(countDown, 1000);