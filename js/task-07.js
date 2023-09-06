const inputArea = document.querySelector('#font-size-control');
const textArea = document.querySelector('#text');

function toggleSizeBar( {currentTarget} ) {
    (textArea.style.fontSize = `${currentTarget.value}px`);
}
inputArea.addEventListener('input', toggleSizeBar);
