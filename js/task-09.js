function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textElColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const body = document.body;

const changeColor = () => {
  textElColor.textContent = body.style.backgroundColor = getRandomHexColor();
}

btnChangeColor.addEventListener('click', changeColor);