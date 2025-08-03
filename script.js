let count = 0;
let baseSize =50;
const step =5;

const ball = document.getElementById("ball");
const counterDisplay = document.getElementById("counter");
const incrementb = document.getElementById("increment");
const decrementb = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");


function IncreaseBallSize(){
    const size = baseSize + count * step;
    ball.style.width = '${size}px';
    ball.style.height = '${size}px';
    counterDisplay.textContent = count;
}

incrementb.addEventListener("click", () => {
    count++;
    IncreaseBallSize();
});

decrementb.addEventListener("click", () => {
    if (count >0 ){
        count --;
    IncreaseBallSize();
    }
})
resetBtn.addEventListener("click", () => {
    count = 0;
    IncreaseBallSize();
})





