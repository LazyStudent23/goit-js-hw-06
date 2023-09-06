let counterValue = 0;
const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector(`[data-action="decrement"]`);

const decrement = (event) => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};
decrementBtn.addEventListener('click', decrement);

const incrementBtn = document.querySelector(`[data-action="increment"]`);

const increment = (event) => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};
incrementBtn.addEventListener('click', increment);
