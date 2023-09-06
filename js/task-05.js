
const inputArea = document.getElementById("name-input");
const spanArea = document.getElementById("name-output");
const placeholder = (event) => {
  spanArea.textContent =
    inputArea.value !== "" ? event.currentTarget.value : "Anonymous";
};
inputArea.addEventListener('input', placeholder);