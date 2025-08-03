let count = 0;

const countBtn = document.getElementById("counter");
const incrementBtn = document.getElementById("increament");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

incrementBtn.addEventListener("click", () => {
    count++;
    countBtn.textContent = count;
});

decrementBtn.addEventListener("click", () => {
    count--;
    countBtn.textContent = count;
})
resetBtn.addEventListener("click", () => {
    count = 0;
    countBtn.textContent = count;
})