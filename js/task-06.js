const inputArea = document.querySelector("#validation-input");

function validation (event) {
    const inputDataLength = Number(inputArea.dataset.length);
    const inputValueLength = Number(inputArea.value.trim().length);

    if (inputDataLength === inputValueLength) {
        inputArea.classList.remove("invalid");
        inputArea.classList.add("valid");
    } else {
        inputArea.classList.remove("valid");
        inputArea.classList.add("invalid");
    }
}

inputArea.addEventListener('blur', validation);