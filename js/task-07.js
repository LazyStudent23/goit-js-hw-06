const inputArea = document.querySelector('#font-size-control');
const textArea = document.querySelector('#text');
const textStartSize = textArea.style.fontSize = `${inputArea.value}px`;
inputArea.addEventListener('input', toggleSizeBar);
function toggleSizeBar( event ) {
    textArea.style.fontSize = `${inputArea.value}px`;
}

