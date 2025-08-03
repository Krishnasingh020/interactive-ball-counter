let count = 0;
let baseSize =50;
const step =5;

const ball = document.getElementById("ball");
const counterDisplay = document.getElementById("counter");
const incrementb = document.getElementById("increment");
const decrementb = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");


function GetRandomColor(){
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


function IncreaseBallSize(){
    const size = baseSize + count * step;
    ball.style.width = `${size}px`;
    ball.style.height = `${size}px`;
    counterDisplay.textContent = count;

    //for changing the color of the ball
    if (count % 5 ===0 && count !==0){
        
        const newColor = GetRandomColor();
        ball.style.backgroundColor = newColor;
        ball.classList.add("glow-pulse");
        setTimeout(() => {
        ball.classList.remove("glow-pulse");
    }, 600);
        
    }
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
    ball.style.backgroundColor = "white";
    ball.style.boxShadow = "none";
    IncreaseBallSize();
})








